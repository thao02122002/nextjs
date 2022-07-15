import React from 'react'
import { LayoutProps } from '../../models/Layout'
import Header from '../Header'
type Props = {}

const Layout = ({children}: LayoutProps) => {
  return (
    <div><Header />
    {children}</div>
  )
}

export default Layout