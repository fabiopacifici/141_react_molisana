import Card from './Card/Card';
export default function ProductsList({ products }) {



  // template the Card component
  {/* <Card key={`product-${product.id}`} image={product.src} title={product.title} /> */ }
  return (
    <section className="products">
      <div className="container">
        <h2>Products List</h2>

        <div className="row">
          {products.map(product => (

            <Card key={`product-${product.id}`} product={product} />
          ))}


        </div>
      </div>

    </section>
  )
}