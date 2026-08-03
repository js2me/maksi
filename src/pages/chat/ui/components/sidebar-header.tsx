import { Show } from 'solid-js';
import logoUrl from '@/assets/logo.png';
import { type ChatPageVM } from '../../model/vm';
import { IconSearch, IconMore, IconBack } from '@/shared/ui/icons';
import { IconButton } from '@/shared/ui/icon-button';

interface SidebarHeaderProps {
  vm: ChatPageVM;
}

export function SidebarHeader(props: SidebarHeaderProps) {
  return (
    <div class="bg-primary border-b border-border shrink-0">
      <Show
        when={props.vm.searchOpen}
        fallback={
          <div class="flex items-center h-14 px-2 gap-1">
            <IconButton
              title="Поиск"
              onClick={() => props.vm.toggleSearch()}
            >
              <IconSearch size={22} />
            </IconButton>
            <div class="flex-1 flex items-center justify-center gap-2 min-w-0">
              <img
                src={logoUrl}
                alt="Макси"
                class="h-8 w-8 rounded-md object-cover shrink-0"
              />
              <span class="text-base font-semibold tracking-wide truncate">Макси</span>
            </div>
            <IconButton title="Ещё">
              <IconMore size={22} />
            </IconButton>
          </div>
        }
      >
        <div class="flex items-center h-14 px-2 gap-2">
          <IconButton
            title="Назад"
            onClick={() => props.vm.toggleSearch()}
          >
            <IconBack size={22} />
          </IconButton>
          <input
            type="text"
            class="flex-1 h-9 border-none bg-surface-hover rounded-full px-4 text-sm outline-none placeholder:text-muted"
            placeholder="Поиск"
            value={props.vm.searchQuery}
            onInput={(e) => props.vm.setSearchQuery(e.currentTarget.value)}
            autofocus
          />
        </div>
      </Show>
    </div>
  );
}
