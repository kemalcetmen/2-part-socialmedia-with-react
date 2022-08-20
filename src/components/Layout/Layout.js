import React from 'react';
import { Sidebar,Widgets,TheButton} from '../index';
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
        <div className="sidebar">
        <Sidebar />
        </div>
        <div className="main">
          {children}
        </div>
        <div className="widgets">
        <Widgets/>
        </div>

    </div>
  )
}

export default Layout