type BadgeProps = {
  clss: string;
  text: string;
}

export function Badge({clss, text}: BadgeProps) {
  return (
    <div className={clss}>
      <span>{text}</span>
    </div>
  );
}
