import { type ChatPageVM } from '../../model/vm';

interface SidebarHeaderProps {
  vm: ChatPageVM;
}

export function SidebarHeader(props: SidebarHeaderProps) {
  return (
    <div class="flex items-center gap-2 px-3 py-2 bg-secondary">
      <button
        class="w-icon-btn h-icon-btn border-none bg-transparent text-muted text-xl cursor-pointer rounded-full flex items-center justify-center transition-colors duration-150 shrink-0 hover:bg-surface-hover"
        title="Меню"
      >
        ☰
      </button>
      <div class="flex-1 flex items-center bg-input rounded-full px-3 h-10 gap-2">
        <span class="text-sm opacity-50 shrink-0">🔍</span>
        <input
          type="text"
          class="flex-1 border-none bg-transparent text-foreground text-sm outline-none placeholder:text-muted"
          placeholder="Поиск"
          value={props.vm.searchQuery}
          onInput={(e) => props.vm.setSearchQuery(e.currentTarget.value)}
        />
      </div>
      <button
        class="w-icon-btn h-icon-btn border-none bg-transparent text-muted text-lg cursor-pointer rounded-full flex items-center justify-center transition-colors duration-150 shrink-0 hover:bg-surface-hover"
        onClick={() => props.vm.toggleTheme()}
        title={`Тема: ${props.vm.themePreference}`}
      >
        {props.vm.themePreference === 'system' ? '💻' : props.vm.isDark ? '🌙' : '☀️'}
      </button>
    </div>
  );
}
