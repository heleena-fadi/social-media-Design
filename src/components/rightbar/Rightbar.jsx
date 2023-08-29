import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online';

function Rightbar({profile}) {
  return (
    <div className='rightbar'>
<div className="rightbarWrapper">
  <div className="birthdayContainer">
    <img  className= 'birthdayImg' src='./assets/gift.png' alt=''/>
    <span className='birthdayText'><b>Fadi omar</b> and <b>3 other friends </b> have a birthday Today! </span>
  </div>
  <img  className='rightbarAd' src='./assets/ad.png' alt=''/>
  <h4 className='rightbarTitle'> Online Friends </h4>
  <ul className="rightbarFriendList">
   {Users.map(u => (
    <Online key={u.id} user={u}/>
   ))}
  
  </ul>
</div>
 </div>
  )
}

export default Rightbar;