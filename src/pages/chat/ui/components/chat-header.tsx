import { type ChatPageVM } from '../../model/vm';
import { IconSearch, IconMore, IconPanel } from '@/shared/ui/icons';
import { IconButton } from '@/shared/ui/icon-button';

interface ChatHeaderProps {
  vm: ChatPageVM;
}

export function ChatHeader(props: ChatHeaderProps) {
  return (
    <div class="flex items-center gap-3 px-4 bg-primary border-b border-border min-h-14 shrink-0">
      <div class="flex-1 min-w-0 py-2">
        <div class="text-sm-plus font-medium truncate leading-tight">
          {props.vm.chatTitle}
        </div>
        <div class="text-xs-plus text-muted leading-tight mt-0.5">
          {props.vm.chatStatusText}
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
