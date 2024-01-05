const Card = ({ title, description, icon, children }) => {
  return (
    <div className="card p-5 rounded-md">
      <div className="cardheading flex">
        <div className="flex-1 text-lg font-semibold mb-3">{title}</div>
        <div className="icon ml-3 mt-1">{icon}</div>
      </div>
      <div className="cardContent">
        <p>{description}</p>
      </div>
      {children}
    </div>
  )
}

export default Card
