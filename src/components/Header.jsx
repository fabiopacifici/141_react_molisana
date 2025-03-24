import Logo from './Logo'
import Nav from './Nav'

export default function Header({ menuLinks }) {

  {/*
    Inline styles are not recommended, but you can use them if you want
     <header className="text-center" style={{ textAlign: "center" }}> 
     
     */ }

  return (
    <header className="text-center">
      <Logo />
      <Nav menuLinks={menuLinks} />
    </header>
  )
}

