/**
 * Theme Configuration
 * Dark theme: purple accent, neutral (gray-950, gray-100, gray). No gradients.
 * Design tokens for the portfolio — components use these for consistent look.
 */
export const theme = {
  colors: {
    background: "bg-gray-950",
    text: "text-gray-400",
    textPrimary: "text-gray-100",
    textMuted: "text-gray-500",
    accent: "text-purple-400",
    accentHover: "hover:text-purple-300",
    accentBg: "bg-purple-950/50",
    accentBorder: "border-purple-800",
    line: "bg-gray-600",
    lineActive: "bg-purple-500",
    surface: "bg-gray-900",
    surfaceHover: "hover:bg-gray-800",
    border: "border-gray-700",
    borderMuted: "border-gray-800",
    buttonBg: "bg-gray-800",
    buttonBorder: "border-gray-600",
  },
  spacing: {
    sectionGap: "mb-12 sm:mb-16 md:mb-20 lg:mb-24",
    itemGap: "mb-8 sm:mb-10",
    contentGap: "mt-2",
  },
  typography: {
    heading: "text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl md:text-5xl",
    subheading: "text-lg font-medium tracking-tight text-gray-100 sm:text-xl",
    label: "text-xs font-semibold uppercase tracking-widest text-gray-500",
  },
};
