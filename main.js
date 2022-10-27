const { app, BrowserWindow } = require('electron')
const path = require('path')
const { ipcMain, dialog } = require('electron')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  //open file dialog
  ipcMain.handle('open_file_dialog', async () => {
    const options = {
      title: 'Title'
    }
    let result = await dialog.showOpenDialog(mainWindow, options)
    .then(async (r) => {
        let filename = r.filePaths.shift();
        //data = fs.readFileSync(filename, 'utf8');
        return filename;
    });
    return result;
  });  
  //

  //mainWindow.webContents.openDevTools()   
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})