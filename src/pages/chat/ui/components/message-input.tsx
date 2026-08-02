import { Show } from 'solid-js';
import { type ChatPageVM } from '../../model/vm';
import { IconAttach, IconEmoji, IconMic, IconSticker, IconSend } from '@/shared/ui/icons';

interface MessageInputProps {
  vm: ChatPageVM;
}

export function MessageInput(props: MessageInputProps) {
  return (
    <div class="flex items-end gap-0.5 px-2 py-1.5 bg-primary border-t border-border shrink-0">
      <button class="icon-btn" title="Прикрепить">
        <IconAttach size={22} />
      </button>

      <div class="message-input__field flex-1 flex items-center min-w-0">
        <textarea
          value={props.vm.inputText}
          onInput={(e) => props.vm.setInputText(e.currentTarget.value)}
          onKeyDown={(e) => props.vm.handleKeyDown(e)}
          placeholder="Сообщение..."
          rows={1}
        />
      </div>

      <button class="icon-btn" title="Стикеры">
        <IconSticker size={22} />
      </button>
      <button class="icon-btn" title="Эмодзи">
        <IconEmoji size={22} />
      </button>

      <Show
        when={props.vm.canSend}
        fallback={
          <button class="icon-btn" title="Голосовое сообщение">
            <IconMic size={22} />
          </button>
        }
      >
        <button
          class="icon-btn text-brand hover:text-brand-hover"
          onClick={() => props.vm.sendMessage()}
          title="Отправить"
        >
          <IconSend size={22} />
        </button>
      </Show>
    </div>
  );
}
