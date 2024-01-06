import { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const Modal = ({ isOpen, onClose, children, title, description }) => {
  const [modalOpen, setModalOpen] = useState(isOpen)
  const closeModal = () => {
    setModalOpen(false)
    onClose()
  }

  useEffect(() => {
    setModalOpen(isOpen)

    // Add this to disable body scrolling when the cart is open:
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      // Reset the overflow to enable scrolling again
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      {modalOpen && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black  bg-opacity-60">
          <div className="modal-content sm:max-w-lg m-8 relative bg-white p-8 rounded-lg shadow-lg">
            <button
              className="absolute -top-4 -right-6 text-white hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              <RxCross2 />
            </button>
            <div className="innerContent">
              {children}
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
