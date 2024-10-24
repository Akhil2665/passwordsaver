import './index.css'

const PasswordItem = props => {
  const {eachSiteDetails, isShowPasswordActive, deletePasswordData} = props
  const {id, siteUrl, userName, password} = eachSiteDetails
  const showpassword = <p className="password">{password}</p>
  const hidePassword = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  const onDeleteData = () => deletePasswordData(id)
  return (
    <li className="list-container">
      <h1 className="profile-image">{siteUrl[0].toUpperCase()}</h1>
      <div className="card-content-container">
        <a href={`https://${siteUrl}`} target="_blank" rel="noreferrer">
          <p className="site-url">{siteUrl}</p>
        </a>
        <div className="user-name-container">
          <p className="userName">{userName}</p>
          <button
            type="button"
            className="delete-button"
            onClick={onDeleteData}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
              className="input-icon"
            />
          </button>
        </div>

        {isShowPasswordActive && showpassword}
        {!isShowPasswordActive && hidePassword}
      </div>
    </li>
  )
}

export default PasswordItem
