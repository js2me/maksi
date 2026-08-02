import { For } from 'solid-js';
import { type ChatPageVM } from '../../model/vm';
import { ChatItem } from './chat-item';

interface ChatListProps {
  vm: ChatPageVM;
}

export function ChatList(props: ChatListProps) {
  return (
    <div class="flex-1 overflow-y-auto overflow-x-hidden bg-primary">
      <For each={props.vm.filteredChats} fallback={
        <div class="px-4 py-8 text-center text-muted text-sm">Нет чатов</div>
      }>
        {(chat) => <ChatItem chat={chat} />}
      </For>
    </div>
  );
}
