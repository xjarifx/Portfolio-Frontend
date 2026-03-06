import PropTypes from "prop-types";
import { cn } from "../../utils";

/**
 * Card component
 * Light theme: solid border and background, subtle hover. No gradients or glass.
 */
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        'group relative grid gap-4 rounded-lg p-4 transition-colors sm:p-5 lg:p-0 lg:group-hover/list:opacity-60 lg:hover:!opacity-100',
        className
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
