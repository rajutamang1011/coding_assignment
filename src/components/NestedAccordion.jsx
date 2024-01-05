import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Accordion from './Accordion'
import ProductBox from './ProductBox'

const NestedAccordion = ({ categoriesData, icons, openModal }) => {
  const [openAccordionItem, setOpenAccordionItem] = useState(
    categoriesData.categories[0].title || null
  )

  // Reusable AccordionItem component with accessibility considerations
  function AccordionItem({ icon, title, children }) {
    const isOpen = openAccordionItem === title

    const toggle = () => {
      setOpenAccordionItem(isOpen ? null : title)
    }

    return (
      <div className="accordion-item mb-4" role="region">
        <div
          className="accordion-header bg-white p-4 rounded-2xl flex justify-between"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title}`}
        >
          <div className="heading flex">
            <div className="icon flex justify-center flex-col mr-4">{icon}</div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <div className="iconBox flex justify-center flex-col">
            {isOpen ? <FaMinus /> : <FaPlus />}
          </div>
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
      {categoriesData.categories.map((item) => {
        const categoryIcon =
          icons.find((icon) => icon.id === item.id)?.icon || null
        const categoryWithIcon = { ...item, icon: categoryIcon }

        return (
          <AccordionItem
            key={categoryWithIcon.id}
            title={categoryWithIcon.title}
            icon={categoryWithIcon.icon}
          >
            <>
              {categoryWithIcon.product.map((child) => (
                <ProductBox
                  key={child.id}
                  title={child.title}
                  description={child.description}
                  openModal={openModal}
                >
                  {child.features.map((feature, index) => (
                    <Accordion key={index} {...feature} />
                  ))}
                </ProductBox>
              ))}
            </>
          </AccordionItem>
        )
      })}
    </div>
  )
}

export default NestedAccordion
