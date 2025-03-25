import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Alert from './components/Alert'
import alertMessage from './data/alerts'
import menuLinks from './data/mainMenu'
import products from './data/productsList'



function App() {


  return (
    <>
      <Header menuLinks={menuLinks} />

      <Alert type={alertMessage.type}>
        <h3>{alertMessage.title}</h3>
        <p>{alertMessage.text}</p>
      </Alert>

      <Main products={products} />
      <Footer />

    </>
  )
}

export default App