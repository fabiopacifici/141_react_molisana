import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Alert from './components/Alert'
import alertMessage from './data/alerts'
import menuLinks from './data/mainMenu'
import products from './data/productsList'



function App() {
  //const list = ['<li>React</li>', '<li>Vite</li>', '<li>ESLint</li>', '<li>Prettier</li>', '<li>Stylelint</li>']
  /* const list = ['React', 'Vite', 'ESLint', 'Prettier', 'Stylelint'] */

  return (
    <>
      <Header menuLinks={menuLinks} />

      {/* 
      <div className="container">

        <ul>
          {
            list.map((item, index) => (<li key={index}>{item}</li>))
          }

        </ul>
      </div> */}


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