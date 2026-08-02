import { For } from 'solid-js';
import { type ChatPageVM } from '../../model/vm';
import { MessageBubble } from './message-bubble';

interface MessageListProps {
  vm: ChatPageVM;
}

export function MessageList(props: MessageListProps) {
  return (
    <div class="flex-1 overflow-y-auto py-2 flex flex-col gap-0.5">
      <For each={props.vm.messages}>
        {(msg, index) => (
          <MessageBubble
            message={msg}
            showSender={props.vm.shouldShowSender(msg, index())}
          />
        )}
      </For>
    </div>
  );
}
