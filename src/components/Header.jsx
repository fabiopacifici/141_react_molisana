export default function Header() {

  {/*
    Inline styles are not recommended, but you can use them if you want
     <header className="text-center" style={{ textAlign: "center" }}> 
     
     */ }

  return (
    <header className="text-center">
      <img src="/logo.png" alt="" />

      <nav id="menu">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="" className="active">Prodotti</a></li>
          <li><a href="">Chi siamo</a></li>
          <li><a href="">Contatti</a></li>

        </ul>
      </nav>
    </header>
  )



}