import { Show } from 'solid-js';
import { globals } from '@/globals';
import { Avatar } from '@/shared/ui/avatar';
import { IconChecks, IconCheck, IconPin } from '@/shared/ui/icons';
import { type Chat } from '@/entities/chat/model/types';

interface ChatItemProps {
  chat: Chat;
}

export function ChatItem(props: ChatItemProps) {
  const isActive = () => globals.stores.chat.activeChatId === props.chat.id;

  return (
    <div
      class={`flex items-center gap-3 px-3 py-[9px] cursor-pointer transition-colors duration-100 relative
        ${isActive() ? 'chat-item--active bg-surface-active' : 'hover:bg-surface-hover'}`}
      onClick={() => globals.stores.chat.setActiveChat(props.chat.id)}
    >
      <Avatar
        letter={props.chat.avatar}
        color={props.chat.avatarColor}
        online={props.chat.online}
        size={54}
      />
      <div class="flex-1 min-w-0 flex flex-col gap-0.5">
        <div class="flex justify-between items-center gap-2">
          <span class="chat-item__title text-[15px] font-medium truncate">
            {props.chat.title}
          </span>
          <span class="chat-item__time text-xs text-muted shrink-0 tabular-nums">
            {props.chat.lastMessageTime}
          </span>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div class="flex items-center gap-1 min-w-0 flex-1">
            <Show when={props.chat.lastMessageOutgoing}>
              <span class="chat-item__checks text-checks shrink-0 inline-flex">
                <Show
                  when={props.chat.lastMessageStatus === 'sent'}
                  fallback={<IconChecks size={16} />}
                >
                  <IconCheck size={14} />
                </Show>
              </span>
            </Show>
            <span class="chat-item__last-message text-[14px] text-muted truncate">
              {props.chat.lastMessage}
            </span>
          </div>
          <Show when={props.chat.unreadCount > 0}>
            <span class="bg-badge text-white text-[12px] font-semibold min-w-badge h-badge rounded-full flex items-center justify-center px-1.5 shrink-0">
              {props.chat.unreadCount}
            </span>
          </Show>
          <Show when={props.chat.pinned && props.chat.unreadCount === 0}>
            <span class="chat-item__status text-muted opacity-50 shrink-0">
              <IconPin size={14} />
            </span>
          </Show>
        </div>
      </div>
    </div>
  );
}
