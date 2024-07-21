import './App.css'
import '@mantine/core/styles.css'
import Header from './components/Header'

import { MantineProvider } from '@mantine/core';
import UserCard from './components/UserCard';

function App() {

  return (
    <>
    <MantineProvider>
      <Header title='' />
      <UserCard currentExperience={432} maxExperience={1000} username='Besugo' level={5} activeItemsNumber={12}></UserCard>
      </MantineProvider>
    </>
  )
}

export default App