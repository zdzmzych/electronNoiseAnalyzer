 const { contextBridge, ipcRenderer } = require('electron')
 
 contextBridge.exposeInMainWorld('versions', {
   node: () => process.versions.node,
   chrome: () => process.versions.chrome,
   electron: () => process.versions.electron,
 })

 contextBridge.exposeInMainWorld('ofd', {
  openfiledialog: () => ipcRenderer.invoke('open_file_dialog'),
})
