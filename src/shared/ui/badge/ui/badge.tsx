type BadgeProps = {
  className: string;
  text: string;
}

export function Badge({ className, text }: BadgeProps) {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
}
