import { globals } from '@/globals';
import { Avatar } from '@/shared/ui/avatar';
import { type Chat } from '@/entities/chat/model/types';

interface ChatItemProps {
  chat: Chat;
}

export function ChatItem(props: ChatItemProps) {
  return (
    <div
      class={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors duration-150 relative
        ${globals.stores.chat.activeChatId === props.chat.id ? 'chat-item--active bg-surface-active' : 'hover:bg-surface-hover'}`}
      onClick={() => globals.stores.chat.setActiveChat(props.chat.id)}
    >
      <Avatar emoji={props.chat.avatar} online={props.chat.online} size={48} />
      <div class="flex-1 min-w-0 flex flex-col gap-1">
        <div class="flex justify-between items-center gap-2">
          <span class="chat-item__title text-sm-plus font-semibold truncate">{props.chat.title}</span>
          <span class="chat-item__time text-xs text-muted shrink-0">{props.chat.lastMessageTime}</span>
        </div>
        <div class="flex justify-between items-center gap-2">
          <span class="chat-item__last-message text-sm text-muted truncate flex-1">{props.chat.lastMessage}</span>
          {props.chat.unreadCount > 0 && (
            <span class="bg-badge text-white text-xs font-semibold min-w-badge h-badge rounded-full flex items-center justify-center px-1.5 shrink-0">
              {props.chat.unreadCount}
            </span>
          )}
        </div>
      </div>
      {props.chat.pinned && <div class="absolute right-2 top-1 text-2xs opacity-40">📌</div>}
    </div>
  );
}
