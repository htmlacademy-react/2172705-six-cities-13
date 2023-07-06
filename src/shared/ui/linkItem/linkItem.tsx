type LinkItemProps = {
  clss: string;
  href: string;
  text: string;
}

export function LinkItem({clss, href, text}: LinkItemProps) {
  return (
    <a
      className={clss}
      href={href}
    >
      <span>{text}</span>
    </a>
  );
}
