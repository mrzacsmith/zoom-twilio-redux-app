import ConnectingButton from './ConnectingButton'
import { useNavigate } from 'react-router-dom'
import './introduction-page.css'

const ConnectingButtons = () => {
  const history = useNavigate()

  const pushToJoinRoomPage = (e) => {
    e.preventDefault()
    history('/join-room')
  }
  const pushToJoinRoomPageAsHost = (e) => {
    e.preventDefault()
    history(`/join-room?host=true`)
  }

  return (
    <div className='connecting_buttons_container'>
      <ConnectingButton
        buttonText='join a meeting'
        onClickHandler={pushToJoinRoomPage}
      />
      <ConnectingButton
        buttonText='host a meeting'
        createRoomButton
        onClickHandler={pushToJoinRoomPageAsHost}
      />
    </div>
  )
}

export default ConnectingButtons
