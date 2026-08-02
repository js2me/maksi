import { type ChatPageVM } from '../../model/vm';

interface MessageInputProps {
  vm: ChatPageVM;
}

export function MessageInput(props: MessageInputProps) {
  return (
    <div class="flex items-end gap-2 px-3 py-2 bg-secondary border-t border-border">
      <button
        class="w-icon-btn h-icon-btn border-none bg-transparent text-muted text-xl cursor-pointer rounded-full flex items-center justify-center transition-colors duration-150 shrink-0 hover:bg-surface-hover"
        title="Прикрепить"
      >
        📎
      </button>
      <div class="message-input__field flex-1 bg-input rounded-pill px-3 flex items-center">
        <textarea
          value={props.vm.inputText}
          onInput={(e) => props.vm.setInputText(e.currentTarget.value)}
          onKeyDown={(e) => props.vm.handleKeyDown(e)}
          placeholder="Сообщение..."
          rows={1}
        />
      </div>
      <button
        class="w-icon-btn h-icon-btn border-none bg-brand text-white text-lg cursor-pointer rounded-full flex items-center justify-center transition-all duration-150 shrink-0 hover:bg-brand-hover disabled:opacity-40 disabled:cursor-default"
        onClick={() => props.vm.sendMessage()}
        disabled={!props.vm.canSend}
        title="Отправить"
      >
        ➤
      </button>
    </div>
  );
}
