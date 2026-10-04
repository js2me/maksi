import { action, computed, observable, reaction } from 'mobx';
import { colorScheme } from 'mobx-web-api';

export type ThemePreference = 'light' | 'dark' | 'system';

export class ThemeManager {
  @observable accessor preference: ThemePreference = 'system';

  constructor() {
    const saved = localStorage.getItem('theme-preference') as ThemePreference | null;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      this.preference = saved;
    }

    reaction(
      () => this.isDark,
      () => this.syncDom(),
      { fireImmediately: true },
    );
  }

  @computed
  get isDark(): boolean {
    if (this.preference === 'dark') return true;
    if (this.preference === 'light') return false;
    return colorScheme.isDark;
  }

  @action
  setPreference(preference: ThemePreference) {
    this.preference = preference;
    localStorage.setItem('theme-preference', preference);
  }

  @action
  private syncDom() {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.classList.toggle('dark', this.isDark);
    root.style.colorScheme = this.isDark ? 'dark' : 'light';
  }
}
