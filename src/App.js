import React from 'react';
import {List} from './features/list/list';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <Container  maxWidth="sm">
      <Typography component="div" style={{ border: '5px solid #ccc ', height: '100vh' }} >
      <header className="App-header">
      <List/>
      </header>
      </Typography>
      </Container>
  );
}

export default App;
