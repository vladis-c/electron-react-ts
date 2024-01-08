import {app, BrowserWindow, ipcMain} from 'electron';
import axios from 'axios';

import menu from './menu';
import tray from './tray';
import splash from './splash';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
const API_KEY = 'P0wnIOkLN3ZKpS4mU7RU';

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 1600,
    width: 1800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
  ipcMain.handle('fetch-map-styles', async () => {
    try {
      const response = await axios.get(
        'https://api.maptiler.com/maps/streets-v2/style.json',
        {params: {key: API_KEY}},
      );
      return response.data;
    } catch (error) {
      console.log('error fetching map styles index.ts', error);
      throw error;
    }
  });
};

app.on('ready', () => {
  splash();
  createWindow();
  menu();
  tray();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
