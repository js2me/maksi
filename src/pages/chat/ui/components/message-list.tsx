import { For, createEffect } from 'solid-js';
import { useViewModel } from 'mobx-view-model-solid';
import { ChatPageVM } from '../../model/vm';
import { MessageBubble } from './message-bubble';

export function MessageList() {
  const vm = useViewModel(ChatPageVM);
  let container!: HTMLDivElement;

  createEffect(() => {
    const len = vm.messages.length;
    const title = vm.chatTitle;
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
      <For each={vm.messages}>
        {(msg, index) => (
          <MessageBubble
            message={msg}
            showSender={vm.shouldShowSender(msg, index())}
            showDate={vm.shouldShowDate(msg, index())}
          />
        )}
      </For>
    </div>
  );
}
