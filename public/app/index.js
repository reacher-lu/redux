import '../scss/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './configureStore'

const store = configureStore()
const rootDom = document.getElementById('app')

function renderDevTools(store) {
    if (__DEBUG__) {
        let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react')
        return (
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        )
    }
    return null
}

render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        {renderDevTools(store)}
    </div>,
    rootDom
)