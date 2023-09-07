console.log('Bonjour de LinkEsport !')

const { app, BrowserWindow } = require('electron')
require('update-electron-app')()

//chargement de l'appli et création de la fenetre
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080
  })

  win.loadFile('pages/index.html')
}

//quand l'appli est pret ouverture
app.whenReady().then(() => {
  createWindow()
})

//si toutes les pages sont fermées, fermer l'appli
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
    console.log("tout est ferme alors je stop")
  })