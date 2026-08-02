interface IconProps {
  class?: string;
  size?: number;
}

export function IconMenu(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

export function IconMore(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  );
}

export function IconChats(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function IconFolder(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}

export function IconNews(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 5h12a2 2 0 0 1 2 2v12H6a2 2 0 0 1-2-2V5z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <line x1="8" y1="10" x2="14" y2="10" />
      <line x1="8" y1="14" x2="14" y2="14" />
    </svg>
  );
}

export function IconRadio(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8a6 6 0 0 1 0 8.4" />
      <path d="M7.8 7.8a6 6 0 0 0 0 8.4" />
      <path d="M19.1 4.9a10 10 0 0 1 0 14.2" />
      <path d="M4.9 4.9a10 10 0 0 0 0 14.2" />
    </svg>
  );
}

export function IconEdit(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}

export function IconAttach(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21.4 11.6l-8.5 8.5a5 5 0 0 1-7.1-7.1l8.5-8.5a3.2 3.2 0 0 1 4.5 4.5L10 18.3a1.4 1.4 0 1 1-2-2l7.1-7.1" />
    </svg>
  );
}

export function IconEmoji(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M8.5 14.5s1.5 2 3.5 2 3.5-2 3.5-2" />
    </svg>
  );
}

export function IconMic(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <line x1="12" y1="18" x2="12" y2="21" />
    </svg>
  );
}

export function IconSticker(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
    </svg>
  );
}

export function IconSend(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.4 20.6L21 12 3.4 3.4l.1 7.2L15 12l-11.5 1.4z" />
    </svg>
  );
}

export function IconChecks(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 18} height={props.size ?? 12} viewBox="0 0 18 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M1.5 6.5L4.5 9.5L10 3.5" />
      <path d="M7 9.5L8.5 11L16.5 2.5" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 14} height={props.size ?? 12} viewBox="0 0 14 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M1.5 6.5L4.5 9.5L12.5 1.5" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 16} height={props.size ?? 16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 3l5 5-2.2.8L14.5 13 18 20l-4-3-3 3-.8-4.3L5.8 11.2 3 9l5-5 .8 2.2L12.5 9.5 16 3z" />
    </svg>
  );
}

export function IconPanel(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="9" y1="4" x2="9" y2="20" />
    </svg>
  );
}

export function IconBack(props: IconProps) {
  return (
    <svg class={props.class} width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}
