const { app, BrowserWindow } = require('electron');

// Check for updates
const { autoUpdater } = require("electron-updater");
app.on('ready', function () {
    autoUpdater.checkForUpdatesAndNotify();
});

// Create window
function createWindow() {
    const windowStateKeeper = require('electron-window-state');
    // Window state
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800
    });
    // Create the browser window.
    const path = require('path');
    const win = new BrowserWindow({
        icon: path.join(__dirname, 'icon.icns'),
        'x': mainWindowState.x,
        'y': mainWindowState.y,
        'width': mainWindowState.width,
        'height': mainWindowState.height,
        minWidth: 350,
        minHeight: 100,
        // hide until ready
        show: false,
        // Enables DRM
        webPreferences: {
            plugins: true,
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true
        }
    });

    // Let us register listeners on the window, so we can update the state
    // automatically (the listeners will be removed when the window is closed)
    // and restore the maximized or full screen state
    mainWindowState.manage(win);
    // hides toolbar
    win.setMenuBarVisibility(false);
    // allows you to open toolbar by pressing alt
    win.setAutoHideMenuBar(true);
    
    win.loadURL("http://open.spotify.com/",
        // spoofs safari user agent
        {userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Safari/605.1.15"});

    // shows when ready
    win.once('ready-to-show', () => {
        win.show()
    })
}

// enables DRM and opens window
app.on('widevine-ready', createWindow);

