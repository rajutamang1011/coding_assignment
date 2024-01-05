import { useEffect, useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import NestedAccordion from './components/NestedAccordion'
import Tabs from './components/Tabs'
import { icons } from './data/icons'
import productsData from './data/productsData.json'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768) // Adjust breakpoint
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dataModal, setDataModal] = useState(null)

  const openModal = (title, description) => {
    setIsModalOpen(true)
    setDataModal({ title, description })
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  useEffect(() => {
    window.addEventListener('resize', () =>
      setIsMobile(window.innerWidth < 768)
    )
  }, [])
  return (
    <>
      <section id="productCategoriesWrap" className="secPad bg-slate-200">
        <div className="container">
          {isMobile ? (
            <NestedAccordion
              categoriesData={productsData}
              icons={icons}
              openModal={openModal}
            />
          ) : (
            <Tabs categoriesData={productsData} openModal={openModal} />
          )}
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} {...dataModal} />
    </>
  )
}

export default App
