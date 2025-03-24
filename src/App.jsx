import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Alert from './components/Alert'

function App() {

  const alertMessage = { text: "Goodmorning folks", type: "info", title: "Welcome!" }

  const menuLinks = [
    {
      id: 1,
      name: "Home",
      url: "#",
      active: false
    },
    {
      id: 2,
      name: "Prodotti",
      url: "#",
      active: true
    },
    {
      id: 3,
      name: "Chi siamo",
      url: "#",
      active: false
    },
    {
      id: 4,
      name: "Contatti",
      url: "#",
      active: false
    },

  ]
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

      <Main />
      <Footer />

    </>
  )
}

export default App