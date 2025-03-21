import Logo from './Logo'

export default function Footer() {

  // logic here


  // template here
  return (
    <footer>

      <div className="flex-container">
        <div className="col">
          <Logo slogan='La pasta buona buona' />
        </div>
        <div className="col">
          <h3>Pastificio</h3>
          <ul className="list-unstyled">
            <li><a href="">Il Pastificio</a></li>
            <li><a href="">Grano lorem</a></li>
            <li><a href="">Filiera lorem</a></li>
            <li><a href="">100 anni di lorem </a></li>
            <li><a href="">Sartoria del lorem</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Prodotti</h3>
          <ul className="list-unstyled">
            <li><a href="">Il Pastificio</a></li>
            <li><a href="">Grano lorem</a></li>
            <li><a href="">Filiera lorem</a></li>
            <li><a href="">100 anni di lorem </a></li>
            <li><a href="">Sartoria del lorem</a></li>
          </ul>
        </div>
      </div>

    </footer>
  )


}