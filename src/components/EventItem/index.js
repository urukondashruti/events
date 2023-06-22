// Write your code here
import './index.css'

const Items = props => {
  const {Item, clickBut1, isActiveValue} = props
  const {id, imageUrl, name, location, registrationStatus} = Item
  const onClickButton = () => {
    clickBut1(id)
  }
  const className1 = isActiveValue ? 'con' : ''
  return (
    <li>
      <button type="button" onClick={onClickButton} className="but9">
        <div className={`${className1}`}>
          <img src={imageUrl} className="size" alt="event" />
        </div>
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default Items
