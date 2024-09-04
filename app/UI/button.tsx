import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger'; // Add more variants as needed
}

export function Button({ children, className, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        // Base styles for all variants
        {
          'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500 active:bg-blue-600':
            variant === 'primary',
          'bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500 focus-visible:outline-blue-500 active:bg-blue-600':
            variant === 'secondary',
          'bg-red-500 text-white hover:bg-red-400 focus-visible:outline-red-500 active:bg-red-600':
            variant === 'danger',
          // Add more styles for other variants here
        },
        'aria-disabled:cursor-not-allowed aria-disabled:opacity-50', // Styles for disabled state
        className // Custom class names passed in props
      )}
    >
      {children}
    </button>
  );
}
