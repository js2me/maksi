import { useViewModel } from 'mobx-view-model-solid';
import { ChatPageVM } from '../../model/vm';
import { IconSearch, IconMore, IconPanel } from '@/shared/ui/icons';
import { IconButton } from '@/shared/ui/icon-button';

export function ChatHeader() {
  const vm = useViewModel(ChatPageVM);

  return (
    <div class="flex items-center gap-3 px-4 bg-primary border-b border-border min-h-14 shrink-0">
      <div class="flex-1 min-w-0 py-2">
        <div class="text-sm-plus font-medium truncate leading-tight">
          {vm.chatTitle}
        </div>
        <div class="text-xs-plus text-muted leading-tight mt-0.5">
          {vm.chatStatusText}
        </div>
      </div>
      <div class="flex items-center gap-0.5">
        <IconButton title="Поиск">
          <IconSearch size={22} />
        </IconButton>
        <IconButton title="Панель">
          <IconPanel size={22} />
        </IconButton>
        <IconButton title="Ещё">
          <IconMore size={22} />
        </IconButton>
      </div>
    </div>
  );
}
