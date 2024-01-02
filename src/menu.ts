import {app, dialog, Menu, shell} from 'electron';

const menuTemplate: (
  | Electron.MenuItemConstructorOptions
  | Electron.MenuItem
)[] = [
  {label: app.name ?? 'Menu', submenu: [{label: 'About'}]},
  {
    label: 'File',
    submenu: [
      {
        label: 'Map',
        click: async () => undefined,
      },
      {
        label: 'Learn more',
        click: async () => await shell.openExternal('https://google.com'),
      },
      {type: 'separator'},
      {
        label: 'Info',
        click: (_, focused) =>
          dialog.showMessageBox(focused, {
            type: 'info',
            title: 'Application Menu Demo',
            buttons: ['Ok', 'Cancel'],
            message: 'This is the message of this amazing app',
          }),
      },
      {label: 'Exit', click: app.quit},
    ],
  },
  {
    label: 'Window',
    submenu: [{role: 'minimize'}, {role: 'close'}],
  },
];

const menu = Menu.buildFromTemplate(menuTemplate);
export default () => Menu.setApplicationMenu(menu);
