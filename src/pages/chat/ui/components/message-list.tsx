import { For, createEffect } from 'solid-js';
import { type ChatPageVM } from '../../model/vm';
import { MessageBubble } from './message-bubble';

interface MessageListProps {
  vm: ChatPageVM;
}

export function MessageList(props: MessageListProps) {
  let container!: HTMLDivElement;

  createEffect(() => {
    const len = props.vm.messages.length;
    const title = props.vm.chatTitle;
    void len;
    void title;
    requestAnimationFrame(() => {
      if (container) container.scrollTop = container.scrollHeight;
    });
  });

  return (
    <div
      ref={container}
      class="flex-1 overflow-y-auto py-3 flex flex-col gap-1 chat-wallpaper"
    >
      <For each={props.vm.messages}>
        {(msg, index) => (
          <MessageBubble
            message={msg}
            showSender={props.vm.shouldShowSender(msg, index())}
            showDate={props.vm.shouldShowDate(msg, index())}
          />
        )}
      </For>
    </div>
  );
}
