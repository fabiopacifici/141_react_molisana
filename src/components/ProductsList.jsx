import Card from './Card/Card';
export default function ProductsList() {

  // logic here



  // template the Card component
  return (
    <section className="products">
      <div className="container">
        <h2>Products List</h2>

        <div className="row">

          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/03/spaghetto-quadrato-classiche-pack.webp" title="Spaghetti 01" />

          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/06/64-peperini.webp" title="Spaghetti 02" />

          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/09/88-quadrotto.webp" title="Spaghetti 03" />


          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/03/spaghetto-quadrato-classiche-pack.webp" title="Spaghetti 01" />

          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/06/64-peperini.webp" title="Spaghetti 02" />

          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/09/88-quadrotto.webp" title="Spaghetti 03" />

          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/03/spaghetto-quadrato-classiche-pack.webp" title="Spaghetti 01" />

          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/06/64-peperini.webp" title="Spaghetti 02" />

          <Card image="https://www.lamolisana.it/wp-content/uploads/2021/09/88-quadrotto.webp" title="Spaghetti 03" />


        </div>
      </div>

    </section>
  )
}