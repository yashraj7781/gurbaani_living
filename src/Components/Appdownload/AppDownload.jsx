// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Appdownload.css"

 
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='Appdownload' id='Appdownload'>
      <p>For Better Experience Download <br />Gurbaani Living</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload