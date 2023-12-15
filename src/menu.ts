import {app, Menu, shell} from 'electron';

const menuTemplate: (
  | Electron.MenuItemConstructorOptions
  | Electron.MenuItem
)[] = [
  {label: app.name, submenu: [{label: 'About'}]},
  {
    label: 'File',
    submenu: [
      {
        label: 'Learn more',
        click: async () => await shell.openExternal('https://google.com'),
      },
      {type: 'separator'},
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
