interface AvatarProps {
  letter: string;
  color?: string;
  size?: number;
  online?: boolean;
}

export function Avatar(props: AvatarProps) {
  const size = () => props.size ?? 48;

  return (
    <div
      class="relative shrink-0 rounded-full flex items-center justify-center text-on-accent font-medium select-none"
      style={{
        width: `${size()}px`,
        height: `${size()}px`,
        'background-color': props.color ?? '#64B5F6',
        'font-size': `${Math.round(size() * 0.4)}px`,
      }}
    >
      <span>{props.letter}</span>
      {props.online && (
        <div
          class="absolute bottom-0 right-0 rounded-full bg-online border-2 border-primary"
          style={{ width: `${Math.max(10, size() * 0.28)}px`, height: `${Math.max(10, size() * 0.28)}px` }}
        />
      )}
    </div>
  );
}
