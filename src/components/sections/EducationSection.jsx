import PropTypes from 'prop-types';
import { Card } from "../ui";
import { ThemePropType } from "../../types";

/**
 * EducationSection component
 * Renders education entries with degree, institution, period, and GPA
 */
export const EducationSection = ({ items, theme }) => {
  return (
    <ul className="group/list">
      {items.map((entry, index) => (
        <li key={`education-${index}`} className={theme.spacing.itemGap}>
          <Card>
            <div className="relative z-10 space-y-1.5">
              <h3
                className={`font-medium ${theme.colors.textPrimary} text-lg leading-tight`}
              >
                {entry.degree}
              </h3>
              <p
                className={`text-base ${theme.colors.text} leading-relaxed`}
              >
                {entry.institution}
              </p>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

EducationSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      gpa: PropTypes.string,
    })
  ).isRequired,
  theme: ThemePropType.isRequired,
};
