import { useState } from 'react'
import Accordion from './Accordion'

const Tabs = ({ categoriesData }) => {
  const [activeTab, setActiveTab] = useState(
    categoriesData.categories[0].products[0].id
  )

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div>
      <ul className="tabs flex gap-4">
        {categoriesData.categories.map((category) => (
          <li
            key={category.id}
            className={activeTab === category.products[0].id ? 'active' : ''}
          >
            <a onClick={() => handleTabClick(category.products[0].id)}>
              {category.title} <br />
              {category.description}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {/* Render tab content conditionally based on activeTab */}
        {categoriesData.categories.map((category) =>
          category.products.map((product) => (
            <div
              key={product.id}
              style={{ display: activeTab === product.id ? 'block' : 'none' }}
            >
              <div className="flex">
                <div className="left">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
                <div className="right">
                  {product.features.map((feature, index) => (
                    <Accordion key={index} {...feature} />
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Tabs

// import { useState } from 'react'

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState('tab1')

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId)
//   }

//   const tabs = [
//     { id: 'tab1', title: 'Tab 1' },
//     { id: 'tab2', title: 'Tab 2' },
//     { id: 'tab3', title: 'Tab 3' },
//   ]
//   return (
//     <div>
//       <ul className="tabs">
//         {tabs.map((tab) => (
//           <li key={tab.id} className={activeTab === tab.id ? 'active' : ''}>
//             <a onClick={() => handleTabClick(tab.id)}>{tab.title}</a>
//           </li>
//         ))}
//       </ul>
//       <div className="tab-content">
//         {/* Render tab content conditionally based on activeTab */}
//         {activeTab === 'tab1' && <p>Tab 1 content</p>}
//         {activeTab === 'tab2' && <p>Tab 2 content</p>}
//         {activeTab === 'tab3' && <p>Tab 3 content</p>}
//       </div>
//     </div>
//   )
// }

// export default Tabs
