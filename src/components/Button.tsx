
type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "small" | "medium" | "large";
};

const Button = ({ 
  label, 
  onClick, 
  variant = "primary", 
  size = "medium" 
}: ButtonProps) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;