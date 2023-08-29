import './online.css';

function Online({user}) {
  return (
         <li className="rightbarFriend">
      <div className="rightProfileImgContainer">
        <img src={user.profilePicture} alt='' className='rightProfileImg'/>
        <span className='rightbarOnliner'></span>
      </div>
      <span className='rightbarUsername'> {user.username}</span>
    </li>
  )
}

export default Online