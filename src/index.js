import React from 'react'
import ReactDOM from 'react-dom'
import './ToDoList/index.css'
import App from './ToDoList/App'
import { AppProvider } from './ToDoList/context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
