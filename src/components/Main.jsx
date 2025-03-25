import ProductsList from "./ProductsList"

export default function Main({ products }) {

  // logic here
  function handleClick() {
    alert('Button clicked!');

  }

  // template here 
  return (

    <main>
      <ProductsList products={products} />
      {/* Demo button click */}



      {/*  <button onClick={() => alert('Button clicked!')}>Click Me</button> */}
      <button onClick={handleClick}> <i class="fas fa-heart"></i> Click Me</button>
      <button onClick={() => { handleClick() }}></button>

      {/* Never call the function directly - it is invoked when the page loads */}
      {/*   <button onClick={alert('ciaci ao')}>Click Me</button> */}

      {/* <button onClick={handleClick()}>Click Me</button> */}





    </main>
  )
}