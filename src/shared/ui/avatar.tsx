
interface AvatarProps {
  emoji: string;
  size?: number;
  online?: boolean;
}

const sizeClasses: Record<number, string> = {
  40: 'w-10 h-10 text-xl',
  48: 'w-12 h-12 text-2xl',
};

export function Avatar(props: AvatarProps) {
  const classes = () => sizeClasses[props.size ?? 48] ?? sizeClasses[48];

  return (
    <div class={`relative shrink-0 rounded-full bg-avatar flex items-center justify-center ${classes()}`}>
      <span>{props.emoji}</span>
      {props.online && (
        <div class="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-online border-2 border-primary" />
      )}
    </div>
  );
}
