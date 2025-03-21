import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Alert from './components/Alert'

function App() {

  return (
    <>
      <Header />

      <Alert type='danger'>
        <h3>Alert!</h3>
        <p>This is a danger alert message.</p>
      </Alert>

      <Main />
      <Footer />

    </>
  )
}

export default App