import './index.css'

const UserProfile = props => {
  const {userD} = props
  const {imageUrl, name, role} = userD
  console.log(props)
  return (
    <li className="user-card-container">
      <img className="avatar" src={imageUrl} alt="pic" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
