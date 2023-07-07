type LogoLinkProps = {
  linkClss: string;
  href: string;
  imgClss: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function LogoLink({
  linkClss,
  href,
  imgClss,
  src,
  alt,
  width,
  height,
}: LogoLinkProps) {
  return (
    <a
      className={linkClss}
      href={href}
    >
      <img
        className={imgClss}
        src={src}
        alt={alt}
        width={String(width)}
        height={String(height)}
      />
    </a>
  );
}
