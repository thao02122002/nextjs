import React from 'react'
import {LayoutProps} from '../../models/Layout'


type Props = {}

const Layoutadmin = ({children}: LayoutProps) => {
  return (
    <div>
      <div>Sidebar</div>
      <div>{children}</div>
    </div>
  )
}

export default Layoutadmin