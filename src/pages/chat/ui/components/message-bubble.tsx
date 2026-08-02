import { For, Show } from 'solid-js';
import { type Message } from '@/entities/message/model/types';
import { IconChecks } from '@/shared/ui/icons';

interface MessageBubbleProps {
  message: Message;
  showSender?: boolean;
  showDate?: boolean;
}

export function MessageBubble(props: MessageBubbleProps) {
  const isMine = () => props.message.senderId === 'me';
  const isSystem = () => props.message.type === 'system';

  return (
    <>
      <Show when={props.showDate && props.message.date}>
        <div class="flex justify-center py-2">
          <span class="px-3 py-1 rounded-full text-[13px] font-medium text-white bg-[color:var(--date-pill)] shadow-sm">
            {props.message.date}
          </span>
        </div>
      </Show>

      <Show
        when={!isSystem()}
        fallback={
          <div class="flex justify-center px-4 py-1">
            <span class="text-[13px] text-muted bg-black/10 dark:bg-white/10 px-3 py-1 rounded-full">
              {props.message.text}
            </span>
          </div>
        }
      >
        <div
          class={`message flex px-px-msg py-0.5 ${
            isMine() ? 'message--mine justify-end' : 'message--other justify-start'
          }`}
        >
          <div class="flex flex-col max-w-bubble">
            <div class="message__bubble px-2.5 pt-1.5 pb-1 rounded-bubble relative break-words shadow-[var(--message-bubble-shadow)]">
              <Show when={props.showSender && !isMine()}>
                <div class="flex items-baseline gap-1.5 mb-0.5 pr-1">
                  <span class="text-[13px] font-semibold text-accent truncate">
                    {props.message.senderName}
                  </span>
                  <Show when={props.message.senderRole}>
                    <span class="text-[12px] text-muted shrink-0">
                      {props.message.senderRole}
                    </span>
                  </Show>
                  <Show when={props.message.showReplyLink}>
                    <button class="ml-auto border-none bg-transparent text-accent text-[13px] cursor-pointer p-0 hover:underline shrink-0">
                      Ответить
                    </button>
                  </Show>
                </div>
              </Show>

              <div class="text-[15px] leading-[1.35] whitespace-pre-wrap text-foreground">
                {props.message.text}
              </div>

              <div class="flex items-center justify-end gap-1 mt-0.5 float-right ml-3 relative top-0.5">
                <span class="text-[12px] text-muted opacity-80 tabular-nums leading-none">
                  {props.message.time}
                </span>
                <Show when={isMine()}>
                  <span class="text-checks opacity-90 leading-none inline-flex">
                    <IconChecks size={16} />
                  </span>
                </Show>
              </div>
              <div class="clear-both" />
            </div>

            <Show when={props.message.actions?.length}>
              <div class="flex flex-col gap-1.5 mt-1.5 min-w-[240px]">
                <For each={props.message.actions}>
                  {(action) => (
                    <button
                      class="w-full border-none rounded-lg py-2.5 px-3 text-[14px] font-medium text-white cursor-pointer
                        bg-action-btn hover:bg-action-btn-hover transition-colors"
                    >
                      {action.label}
                    </button>
                  )}
                </For>
              </div>
            </Show>
          </div>
        </div>
      </Show>
    </>
  );
}
