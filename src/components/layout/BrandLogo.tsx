import { Link } from "react-router-dom";
import { site } from "../../data/site";

interface BrandLogoProps {
  src: string;
  className?: string;
}

export function BrandLogo({ src, className = "h-9 w-auto sm:h-10" }: BrandLogoProps) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center">
      <img src={src} alt={site.name} className={className} />
    </Link>
  );
}
