import PropTypes from 'prop-types';
import { cn } from '../../utils';

/**
 * Reusable Button component
 * Light theme: solid surfaces, purple accent. No gradients.
 */
export const Button = ({
  onClick,
  children,
  className = "",
  variant = "default",
  size = "md",
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default:
      "border border-gray-600 bg-gray-800 text-gray-100 hover:bg-gray-700 hover:border-gray-500",
    accent:
      "border border-purple-800 bg-purple-950/50 text-purple-300 hover:bg-purple-900/50 hover:border-purple-700",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs font-medium",
    md: "px-3 py-1.5 text-sm font-medium",
    lg: "px-4 py-2 text-base font-medium",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'accent']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};
