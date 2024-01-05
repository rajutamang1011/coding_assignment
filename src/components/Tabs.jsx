import { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { icons } from '../data/icons'
import Accordion from './Accordion'
import Card from './Card'
import ProductBox from './ProductBox'

const Tabs = ({ categoriesData, openModal }) => {
  const [activeTab, setActiveTab] = useState(
    categoriesData.categories[0].product[0].id
  )

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div>
      {/* tabs  */}
      <ul className="tabs flex gap-4">
        {categoriesData.categories.map((category) => {
          const categoryIcon =
            icons.find((icon) => icon.id === category.id)?.icon || null

          // Add the 'icon' property to the category object
          const categoryWithIcon = { ...category, icon: categoryIcon }

          return (
            <li
              key={categoryWithIcon.id}
              className={
                'min-h-[200px] flex-1 relative rounded-lg border-solid border-2 border-slate-300 cursor-pointer overflow-hidden ' +
                (activeTab === category.product[0].id
                  ? 'active bg-orange-50'
                  : 'group bg-white hover:bg-orange-50')
              }
            >
              <a onClick={() => handleTabClick(category.product[0].id)}>
                <Card
                  title={categoryWithIcon.title}
                  description={categoryWithIcon.description}
                  icon={categoryWithIcon.icon}
                >
                  <button
                    className={
                      'absolute bottom-0 left-0 py-3 px-5 rounded-tr-3xl font-semibold flex justify-center align-middle   ' +
                      (activeTab === category.product[0].id
                        ? 'bg-supportive'
                        : 'bg-slate-300 group-hover:bg-supportive')
                    }
                  >
                    Discover <FaArrowDown className="mt-1 ml-3" />
                  </button>
                </Card>
              </a>
            </li>
          )
        })}
      </ul>
      {/* tabs_content */}
      <div className="tab-content mt-7">
        {/* Render tab content conditionally based on activeTab */}
        {categoriesData.categories.map((category) =>
          category.product.map((product) => (
            <div
              key={product.id}
              style={{ display: activeTab === product.id ? 'block' : 'none' }}
            >
              <ProductBox
                title={product.title}
                description={product.description}
                openModal={openModal} // Pass openModal to ProductBox
              >
                {product.features.map((feature, index) => (
                  <Accordion key={index} {...feature} />
                ))}
              </ProductBox>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Tabs
