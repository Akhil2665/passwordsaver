import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    siteDataList: [],
    isShowPasswordActive: false,

    searchInput: '',
    siteUrl: '',
    userName: '',
    password: '',
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({
      isShowPasswordActive: !prevState.isShowPasswordActive,
    }))
  }

  renderNoData = () => (
    <div className="no-data-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords"
      />

      <p className="no-data-msg">No Passwords</p>
    </div>
  )

  submitFormData = event => {
    event.preventDefault()

    const {siteUrl, userName, password} = this.state

    const newSiteData = {
      id: v4(),
      siteUrl,
      userName,
      password,
    }

    this.setState(prevState => ({
      siteDataList: [...prevState.siteDataList, newSiteData],
      siteUrl: '',
      userName: '',
      password: '',
    }))
  }

  deletePasswordData = id => {
    this.setState(prevState => ({
      siteDataList: prevState.siteDataList.filter(eachObj => eachObj.id !== id),
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({siteUrl: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      isShowPasswordActive,
      siteDataList,
      searchInput,
      siteUrl,
      userName,
      password,
    } = this.state

    const searchResultList = siteDataList.filter(
      eachObj =>
        eachObj.siteUrl.toLowerCase().includes(searchInput.toLowerCase()) ===
        true,
    )

    const searchResultCount =
      searchInput === '' ? siteDataList.length : searchResultList.length

    return (
      <div className="page-container">
        <div className="password-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
        </div>
        <div className="password-top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
            alt="password manager"
            className="password-manager-image"
          />
          <form
            className="password-enter-container"
            onSubmit={this.submitFormData}
          >
            <h1 className="password-enter-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
                className="input-icon"
              />
              <input
                className="input-element"
                placeholder="Enter website"
                type="text"
                onChange={this.onChangeWebsite}
                value={siteUrl}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
              <input
                className="input-element"
                placeholder="Enter Username"
                type="text"
                value={userName}
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="input-icon"
              />
              <input
                className="input-element"
                placeholder="Enter Password"
                type="password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="password-bottom-container">
          <div className="your-password-container">
            <div className="count-container">
              <h1>Your Passwords</h1>
              <p>{searchResultCount}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="search"
              />
            </div>
          </div>
          <div className="show-password-checkbox">
            <input
              type="checkbox"
              className="checkbox"
              id="showPassword"
              onClick={this.onClickCheckBox}
            />
            <label htmlFor="showPassword" className="label-checkbox">
              Show Passwords
            </label>
          </div>
          <ul className="saved-password-cards">
            {searchResultList.length === 0
              ? this.renderNoData()
              : searchResultList.map(eachSiteDetails => (
                  <PasswordItem
                    eachSiteDetails={eachSiteDetails}
                    deletePasswordData={this.deletePasswordData}
                    isShowPasswordActive={isShowPasswordActive}
                    key={eachSiteDetails.id}
                  />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
