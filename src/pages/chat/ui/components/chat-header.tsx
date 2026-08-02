import { type ChatPageVM } from '../../model/vm';
import { Avatar } from '@/shared/ui/avatar';

interface ChatHeaderProps {
  vm: ChatPageVM;
}

export function ChatHeader(props: ChatHeaderProps) {
  return (
    <div class="flex items-center gap-3 px-4 py-2 bg-secondary border-b border-border min-h-14">
      <Avatar emoji={props.vm.chatAvatar} online={props.vm.chatOnline} size={40} />
      <div class="flex-1 min-w-0">
        <div class="text-sm-plus font-semibold truncate">{props.vm.chatTitle}</div>
        <div class="text-xs-plus text-muted">{props.vm.chatStatusText}</div>
      </div>
      <div class="flex gap-1">
        <button class="w-icon-btn h-icon-btn border-none bg-transparent text-muted text-lg cursor-pointer rounded-full flex items-center justify-center transition-colors duration-150 hover:bg-surface-hover" title="Поиск">🔍</button>
        <button class="w-icon-btn h-icon-btn border-none bg-transparent text-muted text-lg cursor-pointer rounded-full flex items-center justify-center transition-colors duration-150 hover:bg-surface-hover" title="Телефон">📞</button>
        <button class="w-icon-btn h-icon-btn border-none bg-transparent text-muted text-lg cursor-pointer rounded-full flex items-center justify-center transition-colors duration-150 hover:bg-surface-hover" title="Ещё">⋮</button>
      </div>
    </div>
  );
}
