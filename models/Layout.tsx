import React from 'react'
import {NextPage} from 'next'
import {ReactElement} from 'react'
import { AppProps } from 'next/app'

export type LayoutProps = {
  children: React.ReactNode}

  export type NextPageWithLayout = NextPage & {
    Layout?: (page:LayoutProps) => ReactElement
  }

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}