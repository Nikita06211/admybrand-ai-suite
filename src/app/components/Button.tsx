type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const classes =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition'
      : 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-lg transition';
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
