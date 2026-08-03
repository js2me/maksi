import { type JSX } from 'solid-js';

interface IconButtonProps {
  title?: string;
  onClick?: (e: MouseEvent) => void;
  /**
   * Text-color utilities (replaces the default muted/foreground).
   * Used for variants like the send button: `text-brand hover:text-brand-hover`.
   */
  colorClass?: string;
  class?: string;
  children: JSX.Element;
}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      type="button"
      title={props.title}
      onClick={props.onClick}
      class={`inline-flex items-center justify-center w-10 h-10 rounded-full cursor-pointer shrink-0 transition-colors duration-150 hover:bg-surface-hover ${
        props.colorClass ?? 'text-muted hover:text-foreground'
      } ${props.class ?? ''}`}
    >
      {props.children}
    </button>
  );
}
