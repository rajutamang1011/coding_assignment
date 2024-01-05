const ProductBox = ({ children, title, description, openModal }) => {
  return (
    <div className="flex bg-secondary rounded-2xl p-12 max-sm:p-8 sm:gap-20 max-sm:gap-8 flex-wrap">
      <div className="left sm:flex-1 flex justify-center flex-col">
        <h1 className="max-sm:text-3xl text-4xl font-bold mb-5">{title}</h1>
        <p className="text-lg mb-6">{description}</p>
        <div className="buttonWrap">
          <button
            className=" bg-primary py-3 px-8 rounded-3xl border-2 border-solid border-black font-bold"
            onClick={() => openModal(title, description)}
          >
            Discover product
          </button>
        </div>
      </div>
      <div className="right sm:flex-1 w-full">{children}</div>
    </div>
  )
}

export default ProductBox
