import { For } from 'solid-js';
import { useViewModel } from 'mobx-view-model-solid';
import { ChatPageVM } from '../../model/vm';
import { ChatItem } from './chat-item';

export function ChatList() {
  const vm = useViewModel(ChatPageVM);

  return (
    <div class="flex-1 overflow-y-auto overflow-x-hidden bg-primary">
      <For each={vm.filteredChats} fallback={
        <div class="px-4 py-8 text-center text-muted text-sm">Нет чатов</div>
      }>
        {(chat) => <ChatItem chat={chat} />}
      </For>
    </div>
  );
}
