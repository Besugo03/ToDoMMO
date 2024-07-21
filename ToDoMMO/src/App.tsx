import './App.css'
import '@mantine/core/styles.css'
import Header from './components/Header'

import { MantineProvider } from '@mantine/core';
import UserCard from './components/UserCard';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

function App() {

  return (
    <>
    <MantineProvider>
      <Header title='' />
      <UserCard currentExperience={432} maxExperience={1000} username='Besugo' level={5} activeItemsNumber={12}></UserCard>
      <FullCalendar selectable={true} plugins={[dayGridPlugin]} initialView='dayGridMonth' />
    </MantineProvider>
    </>
  )
}

export default App
