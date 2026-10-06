import { Show } from 'solid-js';
import { useViewModel } from 'mobx-view-model-solid';
import { ChatPageVM } from '../../model/vm';
import { IconAttach, IconEmoji, IconMic, IconSticker, IconSend } from '@/shared/ui/icons';
import { IconButton } from '@/shared/ui/icon-button';

export function MessageInput() {
  const vm = useViewModel(ChatPageVM);

  return (
    <div class="flex items-end gap-0.5 px-2 py-1.5 bg-primary border-t border-border shrink-0">
      <IconButton title="Прикрепить">
        <IconAttach size={22} />
      </IconButton>

      <div class="flex-1 flex items-center min-w-0">
        <textarea
          class="w-full text-sm-plus resize-none outline-none py-2.5 px-0 leading-message max-h-30 overflow-y-auto placeholder:text-muted"
          value={vm.inputText}
          onInput={(e) => vm.setInputText(e.currentTarget.value)}
          onKeyDown={(e) => vm.handleKeyDown(e)}
          placeholder="Сообщение..."
          rows={1}
        />
      </div>

      <IconButton title="Стикеры">
        <IconSticker size={22} />
      </IconButton>
      <IconButton title="Эмодзи">
        <IconEmoji size={22} />
      </IconButton>

      <Show
        when={vm.canSend}
        fallback={
          <IconButton title="Голосовое сообщение">
            <IconMic size={22} />
          </IconButton>
        }
      >
        <IconButton
          title="Отправить"
          onClick={() => vm.sendMessage()}
          colorClass="text-brand hover:text-brand-hover"
        >
          <IconSend size={22} />
        </IconButton>
      </Show>
    </div>
  );
}
