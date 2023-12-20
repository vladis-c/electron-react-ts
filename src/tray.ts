import {Menu, nativeImage, Tray} from 'electron';

const tray = () => {
  const tray = new Tray(
    nativeImage.createFromPath('../assets/images/react-icon.png'),
  );
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'},
  ]);
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);
};

export default tray;
