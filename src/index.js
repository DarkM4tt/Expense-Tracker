import React from 'react'

//Holds the code that gets executed initially when we npm start
import ReactDOM from 'react-dom/client'

import './index.css' //import css file(not valid in normal js.)
import App from './App'

//tells react where this react ui app should be placed in webpage
const root = ReactDOM.createRoot(document.getElementById('root'))
//tells react what would be rendered.
root.render(<App />)
