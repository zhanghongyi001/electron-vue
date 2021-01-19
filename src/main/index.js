'use strict'

import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  // /**
  //  * Initial window options
  //  */
  // const { app, Menu } = require('electron')

  // const template = [
  //   //     Version: 1.52.1
  //   // Commit: ea3859d4ba2f3e577a159bc91e3074c5d85c0523
  //   // Date: 2020 - 12 - 16T16: 30: 02.420Z
  //   // Electron: 9.3.5
  //   // Chrome: 83.0.4103.122
  //   // Node.js: 12.14.1
  //   // V8: 8.3.110.13 -About Electron.0
  //   // OS: Darwin x64 19.6.0
  //   {
  //     label: '关于',
  //     submenu: [
  //       { role: 'undo' }
  //     ]
  //   },
  //   {
  //     label: 'Electron',
  //     submenu: [
  //       { role: 'undo' }
  //     ]
  //   },
  //   {
  //     label: 'Edit',
  //     submenu: [
  //       { role: 'undo' }
  //       // { role: 'redo' },
  //       // { type: 'separator' },
  //       // { role: 'cut' },
  //       // { role: 'copy' },
  //       // { role: 'paste' },
  //       // { role: 'pasteandmatchstyle' },
  //       // { role: 'delete' },
  //       // { role: 'selectall' }
  //     ]
  //   },
  //   {
  //     label: 'View',
  //     submenu: [
  //       { role: 'reload' }
  //       // { role: 'forcereload' },
  //       // { role: 'toggledevtools' },
  //       // { type: 'separator' },
  //       // { role: 'resetzoom' },
  //       // { role: 'zoomin' },
  //       // { role: 'zoomout' },
  //       // { type: 'separator' },
  //       // { role: 'togglefullscreen' }
  //     ]
  //   },
  //   {
  //     role: 'window',
  //     submenu: [
  //       { role: 'minimize' }
  //       // { role: 'close' }
  //     ]
  //   },
  //   {
  //     role: 'help',
  //     submenu: [
  //       {
  //         label: 'Learn More',
  //         click() { require('electron').shell.openExternal('https://electronjs.org') }
  //       }
  //     ]
  //   }
  // ]

  // if (process.platform === 'darwin') {
  //   template.unshift({
  //     label: app.getName(),
  //     submenu: [
  //       { role: 'about' },
  //       { type: 'separator' },
  //       { role: 'services', submenu: [] },
  //       { type: 'separator' },
  //       { role: 'hide' },
  //       { role: 'hideothers' },
  //       { role: 'unhide' },
  //       { type: 'separator' },
  //       { role: 'quit' }
  //     ]
  //   })

  //   // Edit menu
  //   template[1].submenu.push(
  //     { type: 'separator' },
  //     {
  //       label: 'Speech',
  //       submenu: [
  //         { role: 'startspeaking' },
  //         { role: 'stopspeaking' }
  //       ]
  //     }
  //   )

  //   // Window menu
  //   template[3].submenu = [
  //     { role: 'close' },
  //     { role: 'minimize' },
  //     { role: 'zoom' },
  //     { type: 'separator' },
  //     { role: 'front' }
  //   ]
  // }

  // const menu = Menu.buildFromTemplate(template)
  // console.log(Menu.getApplicationMenu())
  // Menu.setApplicationMenu(menu)
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 300,
    titleBarStyle: 'hidden',
    frame: false
  })
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
