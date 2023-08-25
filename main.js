const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        width: 1600,
        height: 900,
        frame: false
    })

    mainWindow.loadFile('index.html')
    mainWindow.setMenuBarVisibility(false)
}
app.whenReady().then(() => {
    createWindow()
})
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});