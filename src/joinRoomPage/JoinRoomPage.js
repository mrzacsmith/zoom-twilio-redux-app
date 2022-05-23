import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setIsRoomHost } from '../store/actions'
import './join-room-page.css'

const JoinRoomPage = (props) => {
  const { setIsRoomHostAction, isRoomHost } = props

  let location = useLocation()
  useEffect(() => {
    const isRoomHost = location.search
    // console.log(isRoomHost)
    if (isRoomHost.includes('host=true')) {
      setIsRoomHostAction(true)
    }
  }, [])

  return <div>JoinRoomPage</div>
}

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomPage)
