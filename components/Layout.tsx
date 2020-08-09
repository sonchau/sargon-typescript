import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import {
  RecoilRoot
} from 'recoil';
type Props = {
  children?: ReactNode
  title?: string
}

const Layout:React.FC<Props> = ({ children, title = 'This is the default title' }: Props) => (
  <RecoilRoot>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header headerText="Sargon coding challenge - TypeScript Version" /> 
    {children}
    <Footer footerText="Copyright 2020 by Son Chau" />
  </RecoilRoot>
)

export default Layout
