
import './App.css';

import Header from './components/Header';
import {Container} from "react-bootstrap";

function App() {
  return (
    <>
      <Header>  </Header>
          <main className={'py-5'}>
              <Container>
                  <h1>Welcome to TechBuy</h1>
              </Container>
          </main>

    </>
  );
}

export default App;
