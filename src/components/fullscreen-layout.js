import React from 'react'
import './layout.css'

const FullscreenLayout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `2em 2em 2em`
    }}
  >
    <main>{children}</main>
  </div>
)

export default FullscreenLayout
