import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { HomeScreenStore, homeStore } from './store'

function HomeScreen() {
  return (
    <>
      <h1 onClick={() => homeStore.increment()}>Hello World {homeStore.count}</h1>
      <h1>Example Mobx</h1>
    </>
  )
}

export default observer(HomeScreen)
