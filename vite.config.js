import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { spawnSync } from "node:child_process";
import { basename, extname, resolve } from "node:path";
import { existsSync, renameSync } from "node:fs";

const RESUME_DIR = resolve(process.cwd(), "public/resume");
const RESUME_DOCX = resolve(RESUME_DIR, "resumeWORD.docx");
const RESUME_PDF = resolve(RESUME_DIR, "resume.pdf");

const getSofficeCommand = () => {
  if (process.platform === "win32") return "soffice.exe";
  if (process.platform === "darwin") {
    return "/Applications/LibreOffice.app/Contents/MacOS/soffice";
  }
  return "soffice";
};

const convertResumeToPdf = () => {
  if (!existsSync(RESUME_DOCX)) {
    console.warn(
      `[resume] Source file not found: ${RESUME_DOCX}. Skipping PDF generation.`,
    );
    return;
  }

  const soffice = getSofficeCommand();
  const hasSoffice =
    spawnSync(soffice, ["--version"], { stdio: "ignore" }).status === 0;

  if (!hasSoffice) {
    console.warn(
      "[resume] LibreOffice CLI (soffice) not found. Resume PDF not generated.",
    );
    return;
  }

  const result = spawnSync(
    soffice,
    ["--headless", "--convert-to", "pdf", "--outdir", RESUME_DIR, RESUME_DOCX],
    { stdio: "inherit" },
  );

  if (result.status !== 0) {
    console.warn("[resume] Failed to convert DOCX to PDF.");
    return;
  }

  const generatedPdf = resolve(
    RESUME_DIR,
    `${basename(RESUME_DOCX, extname(RESUME_DOCX))}.pdf`,
  );

  if (generatedPdf !== RESUME_PDF && existsSync(generatedPdf)) {
    renameSync(generatedPdf, RESUME_PDF);
  }
};

const resumePdfAutoGeneratePlugin = () => ({
  name: "resume-pdf-auto-generate",
  configureServer(server) {
    convertResumeToPdf();
    server.watcher.add(RESUME_DOCX);
    server.watcher.on("change", (filePath) => {
      if (resolve(filePath) === RESUME_DOCX) {
        convertResumeToPdf();
      }
    });
  },
  buildStart() {
    convertResumeToPdf();
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), resumePdfAutoGeneratePlugin()],
});
