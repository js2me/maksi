import { type Message } from '@/entities/message/model/types';

interface MessageBubbleProps {
  message: Message;
  showSender?: boolean;
}

export function MessageBubble(props: MessageBubbleProps) {
  const isMine = () => props.message.senderId === 'me';

  return (
    <div class={`message flex px-px-msg ${isMine() ? 'message--mine justify-end' : 'message--other justify-start'}`}>
      {props.showSender && !isMine() && (
        <div class="text-xs-plus font-semibold text-accent mb-0.5 pl-3">{props.message.senderName}</div>
      )}
      <div class="message__bubble max-w-bubble px-2.5 pt-1.5 pb-1 rounded-xl relative break-words shadow-[var(--message-bubble-shadow)]">
        <div class="text-sm leading-snug whitespace-pre-wrap">{props.message.text}</div>
        <div class="flex items-center justify-end gap-1 mt-0.5">
          <span class="text-2xs text-muted opacity-80">{props.message.time}</span>
          {isMine() && (
            <span class="text-sm text-muted opacity-60 leading-none">
              {props.message.status === 'sent' && '✓'}
              {props.message.status === 'delivered' && '✓✓'}
              {props.message.status === 'read' && '✓✓'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
