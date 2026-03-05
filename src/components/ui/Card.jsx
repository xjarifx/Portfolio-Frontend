import PropTypes from "prop-types";
import { cn } from "../../utils";

/**
 * Card component
 * Reusable card wrapper with hover effects
 */
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        "group relative grid gap-4 pb-1 transition-all lg:group-hover/list:opacity-50 lg:hover:!opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
