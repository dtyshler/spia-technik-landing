interface LogoIconProps {
  className?: string;
  variant?: "full" | "icon";
  /** When true, uses dark logo for light backgrounds (e.g. nav when scrolled) */
  light?: boolean;
}

export default function LogoIcon({ className = "", variant = "full", light = false }: LogoIconProps) {
  const src = light ? "/logo-dark.png" : "/logo-light.png";
  return (
    <img
      src={src}
      alt="SPIA Technik"
      className={className}
    />
  );
}
