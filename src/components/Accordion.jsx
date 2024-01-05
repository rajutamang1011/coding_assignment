import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Accordion = ({ title, description }) => {
  // Reusable AccordionItem component with accessibility considerations
  function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
      <div className="accordion-item" role="region">
        <h3
          className="accordion-header border-b border-black py-2 font-semibold text-md cursor-pointer flex justify-between"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title}`}
        >
          {title}
          <IoIosArrowDown
            className={`mt-1 transition-transform transform duration-300 ease-in-out ${
              isOpen ? 'rotate-180 font-extrabold' : 'rotate-0'
            }`}
          />
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
      <AccordionItem title={title}>
        <p className="text-md py-2 px-3">{description}</p>
      </AccordionItem>
    </div>
  )
}

export default Accordion
