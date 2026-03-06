import PropTypes from 'prop-types';
import { Badge, ExternalLink, Card } from "../ui";
import { ProjectPropType, ThemePropType } from "../../types";

/**
 * ProjectItem component
 * Renders individual project card
 */
const ProjectItem = ({ project, theme }) => {
  return (
    <li className={theme.spacing.itemGap}>
      <Card>
        {project.image && (
          <div className="z-10">
            <img
              alt={`${project.title} screenshot`}
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              className="rounded bg-gray-800 transition"
              src={project.image}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}
        <div className="z-10">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3
              className={`leading-tight font-medium ${theme.colors.textPrimary} text-lg`}
            >
              {project.title}
            </h3>
            {project.links && project.links.length > 0 && (
              <div className="flex gap-2">
                {project.links.map((link, linkIndex) => (
                  <ExternalLink
                    key={`${project.title}-link-${linkIndex}`}
                    href={link.url}
                    label={`${link.label} for ${project.title}`}
                  >
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            )}
          </div>
          <p className={`mt-1 text-sm ${theme.colors.textMuted}`}>
            {project.techStack.join(' · ')}
          </p>
          {project.highlights && project.highlights.length > 0 && (
            <ul
              className={`${theme.spacing.contentGap} text-sm ${theme.colors.text}`}
            >
              {project.highlights.map((highlight, hlIndex) => (
                <li key={hlIndex} className="mb-1">
                  • {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </li>
  );
};

ProjectItem.propTypes = {
  project: ProjectPropType.isRequired,
  theme: ThemePropType.isRequired,
};

/**
 * ProjectSection component
 * Renders list of projects
 */
export const ProjectSection = ({ items, theme }) => {
  return (
    <div>
      <ul className="group/list">
        {items.map((project, index) => (
          <ProjectItem
            key={`project-${index}`}
            project={project}
            theme={theme}
          />
        ))}
      </ul>
    </div>
  );
};

ProjectSection.propTypes = {
  items: PropTypes.arrayOf(ProjectPropType).isRequired,
  theme: ThemePropType.isRequired,
};
