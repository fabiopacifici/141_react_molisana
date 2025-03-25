import { useState } from "react"
import ProductsList from "./ProductsList"


export default function Main({ products }) {

  // logic here

  // template here 
  return (

    <main>
      <ProductsList products={products} />
      {/* Demo button click */}

      <div className="container" style={{ backgroundColor: "white", padding: "20px", marginBottom: "20px" }}>
        FAQs
        <AccordionList />
      </div>


    </main>
  )
}



function AccordionList() {

  // logic
  const [isOpen, setIsOpen] = useState(1)

  const accordions = [
    { id: 1, title: 'Accordion 1', content: 'Content for Accordion 1' },
    { id: 2, title: 'Accordion 2', content: 'Content for Accordion 2' },
    { id: 3, title: 'Accordion 3', content: 'Content for Accordion 3' },
    { id: 4, title: 'Accordion 4', content: 'Content for Accordion 4' },
  ]
  // template
  return (

    <div className="accordion" id="accordionExample">

      {/* <Accordion title={'Accordion 1'} content={'Content for Accordion 1'} /> */}
      {accordions.map((accordion, index) => (
        <Accordion
          key={`accordion-${accordion.id}`} title={accordion.title}
          isOpen={isOpen === accordion.id}
          handleOpen={() => setIsOpen(accordion.id)}
        >
          {accordion.content}
        </Accordion>
      ))}

    </div>

  )
}

/* isOpen */
function Accordion({ title, isOpen, handleOpen, children }) {

  // template
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" onClick={handleOpen}>
          {title}
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {isOpen && children}
        </div>
      </div>
    </div>
  )
}