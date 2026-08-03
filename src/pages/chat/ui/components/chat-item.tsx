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
      class={`flex items-center gap-3 px-3 py-2.25 cursor-pointer transition-colors duration-100 relative
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
          <span class={`text-sm-plus font-medium truncate ${isActive() ? 'text-on-accent' : ''}`}>
            {props.chat.title}
          </span>
          <span class={`text-xs shrink-0 tabular-nums ${isActive() ? 'text-on-accent' : 'text-muted'}`}>
            {props.chat.lastMessageTime}
          </span>
        </div>
        <div class="flex justify-between items-center gap-2">
          <div class="flex items-center gap-1 min-w-0 flex-1">
            <Show when={props.chat.lastMessageOutgoing}>
              <span class={`shrink-0 inline-flex ${isActive() ? 'text-on-accent-muted' : 'text-checks'}`}>
                <Show
                  when={props.chat.lastMessageStatus === 'sent'}
                  fallback={<IconChecks size={16} />}
                >
                  <IconCheck size={14} />
                </Show>
              </span>
            </Show>
            <span class={`text-sm truncate ${isActive() ? 'text-on-accent' : 'text-muted'}`}>
              {props.chat.lastMessage}
            </span>
          </div>
          <Show when={props.chat.unreadCount > 0}>
            <span class="bg-badge text-on-accent text-xs font-semibold min-w-badge h-badge rounded-full flex items-center justify-center px-1.5 shrink-0">
              {props.chat.unreadCount}
            </span>
          </Show>
          <Show when={props.chat.pinned && props.chat.unreadCount === 0}>
            <span class={`shrink-0 ${isActive() ? 'text-on-accent' : 'text-muted'} opacity-50`}>
              <IconPin size={14} />
            </span>
          </Show>
        </div>
      </div>
    </div>
  );
}
