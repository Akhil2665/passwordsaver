import PasswordManager from './Components/PasswordManager'
import './App.css'

const iconsList = [
  {
    id: 0,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png',
    altIconText: 'website',
  },
  {
    id: 1,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png',
    altIconText: 'username',
  },
  {
    id: 0,
    iconUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png',
    altIconText: 'password',
  },
]
const App = () => <PasswordManager iconsList={iconsList} />

export default App
