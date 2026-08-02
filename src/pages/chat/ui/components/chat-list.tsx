import { For } from 'solid-js';
import { type ChatPageVM } from '../../model/vm';
import { ChatItem } from './chat-item';

interface ChatListProps {
  vm: ChatPageVM;
}

export function ChatList(props: ChatListProps) {
  return (
    <div class="flex-1 overflow-y-auto overflow-x-hidden">
      <For each={props.vm.filteredChats}>
        {(chat) => <ChatItem chat={chat} />}
      </For>
    </div>
  );
}
