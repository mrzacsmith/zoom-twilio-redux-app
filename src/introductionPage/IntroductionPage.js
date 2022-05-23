import './introduction-page.css'
import logo from '../resources/images/logo.png'
import ConnectingButtons from './ConnectingButtons'
import { connect } from 'react-redux'
import { setIsRoomHost } from '../store/actions'
import { useEffect } from 'react'

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false)
  }, [])
  return (
    <div className='introduction_page_container'>
      <div className='introduction_page_panel'>
        <img src={logo} className='introduction_page_image' alt='logo' />
        <ConnectingButtons />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  }
}

export default connect(null, mapDispatchToProps)(IntroductionPage)
