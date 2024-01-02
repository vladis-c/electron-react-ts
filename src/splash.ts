import {BrowserWindow} from 'electron';

const splash = () => {
  const splashWindow = new BrowserWindow({
    height: 400,
    width: 200,
    frame: false,
    transparent: true,
    show: false,
    backgroundColor: '#6e707e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  splashWindow.loadFile('./src/index.html');
};

export default splash;
