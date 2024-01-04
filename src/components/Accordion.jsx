import { useState } from 'react'

const Accordion = ({ title, description }) => {
  // Reusable AccordionItem component with accessibility considerations
  function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
      <div className="accordion-item" role="region">
        <h3
          className="accordion-header"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title}`}
        >
          {title}
        </h3>
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
      <AccordionItem title={title}>{description}</AccordionItem>
    </div>
  )
}

export default Accordion
