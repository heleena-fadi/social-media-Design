import './closeFriend.css';

function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src={user.profilePicture} alt='profile-pic1'/>
    <span className='sidebarFriendName'>{user.username}</span>
  </li>
  )
}

export default CloseFriend