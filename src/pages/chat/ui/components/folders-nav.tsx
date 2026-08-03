import { For, Show } from 'solid-js';
import { type ChatPageVM } from '../../model/vm';
import {
  IconMenu,
  IconChats,
  IconNews,
  IconRadio,
  IconFolder,
  IconEdit,
} from '@/shared/ui/icons';
import { type ChatFolder } from '@/entities/chat/model/types';

interface FoldersNavProps {
  vm: ChatPageVM;
}

function FolderIcon(props: { icon: ChatFolder['icon']; class?: string }) {
  const size = 26;
  switch (props.icon) {
    case 'chats':
      return <IconChats size={size} class={props.class} />;
    case 'news':
      return <IconNews size={size} class={props.class} />;
    case 'radio':
      return <IconRadio size={size} class={props.class} />;
    default:
      return <IconFolder size={size} class={props.class} />;
  }
}

export function FoldersNav(props: FoldersNavProps) {
  return (
    <aside class="folders-panel w-folders min-w-folders bg-folders flex flex-col items-stretch overflow-hidden shrink-0 select-none">
      <div class="flex justify-center pt-3 pb-2">
        <button
          class="w-10 h-10 border-none bg-transparent text-folders-text cursor-pointer rounded-full flex items-center justify-center hover:bg-folders-hover"
          title="Меню"
          onClick={() => props.vm.toggleTheme()}
        >
          <IconMenu size={22} />
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto overflow-x-hidden py-1">
        <For each={props.vm.folders}>
          {(folder) => {
            const active = () => props.vm.category === folder.id;
            return (
              <button
                class={`w-full border-none bg-transparent cursor-pointer flex flex-col items-center gap-1 px-1 py-2.5 transition-colors relative
                  ${active() ? 'text-folders-active' : 'text-folders-text hover:text-folders-text-hover'}`}
                onClick={() => props.vm.setCategory(folder.id)}
                title={folder.title}
              >
                <Show when={active()}>
                  <span class="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-8 rounded-r-full bg-folders-active" />
                </Show>
                <div class="relative">
                  <FolderIcon icon={folder.icon} />
                  {(folder.unreadCount ?? 0) > 0 && (
                    <span class="absolute -top-1.5 -right-2.5 min-w-4 h-4 px-1 rounded-full bg-danger text-on-accent text-3xs font-semibold flex items-center justify-center leading-none">
                      {folder.unreadCount}
                    </span>
                  )}
                </div>
                <span class="text-2xs leading-tight text-center max-w-full truncate px-0.5">
                  {folder.title}
                </span>
              </button>
            );
          }}
        </For>
      </nav>

      <div class="flex justify-center py-3">
        <button
          class="border-none bg-transparent text-folders-text cursor-pointer flex flex-col items-center gap-1 hover:text-folders-text-hover"
          title="Редактировать"
        >
          <IconEdit size={22} />
          <span class="text-2xs">Ред.</span>
        </button>
      </div>
    </aside>
  );
}
