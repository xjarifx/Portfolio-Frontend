import PropTypes from 'prop-types';
import { cn } from '../../utils';

/**
 * Badge component — tags and tech badges
 * Light theme: purple accent variant, gray default. No gradients.
 */
export const Badge = ({
  children,
  className = "",
  variant = "accent",
  ...props
}) => {
  const variants = {
    accent: "bg-purple-950/50 text-purple-300 border border-purple-800",
    default: "bg-gray-800 text-gray-300 border border-gray-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['accent', 'default']),
};
