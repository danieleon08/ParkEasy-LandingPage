import { cn } from '@/lib/utils';

export const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"
      fill="currentColor"
    />
    <path
      d="M12 11.5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 12 6.5a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 12 11.5zm0-4a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 12 10.5a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 12 7.5z"
      fill="black"
    />
    <path
      d="M11.5 10.5h1V8h-1v2.5zM11 7.5h2.5v-1H11v1z"
      fill="white"
    />
    <text
      x="10.2"
      y="11.2"
      fill="black"
      style={{
        fontSize: '4px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
      }}
    >
      P
    </text>
  </svg>
);
