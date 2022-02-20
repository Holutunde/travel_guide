import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={4}>
            <Map />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  )
}

export default App
