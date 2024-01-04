import { useState } from 'react'

const NestedAccordion = ({ categoriesData }) => {
  // Reusable AccordionItem component with accessibility considerations
  function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
      <div className="accordion-item" role="region">
        <div
          className="accordion-header"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title}`}
        >
          <h3>{title}</h3>
        </div>
        <div
          className="accordion-content"
          id={`accordion-content-${title}`}
          role="region"
          aria-labelledby={`accordion-header-${title}`}
        >
          {isOpen && children}
        </div>
      </div>
    )
  }

  return (
    <div className="accordion">
      {categoriesData.categories.map((item) => (
        <AccordionItem key={item.id} title={item.title}>
          {
            <>
              {item.products.map((child) => (
                <AccordionItem key={child.id} title={child.title}>
                  {child.description}
                </AccordionItem>
              ))}
            </>
          }
        </AccordionItem>
      ))}
    </div>
  )
}

export default NestedAccordion
