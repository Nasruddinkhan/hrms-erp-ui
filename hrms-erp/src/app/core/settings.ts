export interface AppSettings {
  navPos?: 'side' | 'top';
  showHeader?: boolean;
  showUserPanel?: boolean;
  sidenavOpened?: boolean;
  sidenavCollapsed?: boolean;
}

export const defaults: AppSettings = {
  navPos: 'side',
  showHeader: true,
  showUserPanel: true,
  sidenavOpened: true,
  sidenavCollapsed: false
};
