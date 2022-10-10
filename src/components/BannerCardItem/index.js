import './index.css'

const BannerCardItem = props => {
  const {headerText, description, className} = props

  return (
    <li className={`${className} banner-car-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="show-more-btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
