import React from 'react'

import Provider from 'contexts/global'

import Layout from 'components/layout'

const App = () => {
  return (
    <Provider>
      <Layout />
    </Provider>
  )
}

export default App
