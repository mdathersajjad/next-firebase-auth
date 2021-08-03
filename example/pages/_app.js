import React from 'react'
import '../styles/globals.css'

// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/app'
import 'firebase/auth'

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default MyApp
