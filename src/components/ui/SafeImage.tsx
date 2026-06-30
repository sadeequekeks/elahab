import { useEffect, useState } from "react";
import { FALLBACK_PROPERTY } from "../../lib/images";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function SafeImage({
  src,
  fallback = FALLBACK_PROPERTY,
  alt = "",
  ...props
}: SafeImageProps) {
  const [url, setUrl] = useState(src);

  useEffect(() => {
    setUrl(src);
  }, [src]);

  return (
    <img
      {...props}
      src={url}
      alt={alt}
      onError={() => {
        if (url !== fallback) setUrl(fallback);
      }}
    />
  );
}
