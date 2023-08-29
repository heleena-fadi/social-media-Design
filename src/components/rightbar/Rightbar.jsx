import './rightbar.css'

function Rightbar() {
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
    <li className="rightbarFriend">
      <div className="rightProfileImgContainer">
        <img src='./assets/person/3.jpeg' alt='' className='rightProfileImg'/>
        <span className='rightbarOnliner'></span>
      </div>
      <span className='rightbarUsername'> Neamaa Abu Ghali</span>
    </li>
    <li className="rightbarFriend">
      <div className="rightProfileImgContainer">
        <img src='./assets/person/2.jpeg' alt='' className='rightProfileImg'/>
        <span className='rightbarOnliner'></span>
      </div>
      <span className='rightbarUsername'> Fadi Omar</span>
    </li>
    <li className="rightbarFriend">
      <div className="rightProfileImgContainer">
        <img src='./assets/person/7.jpeg' alt='' className='rightProfileImg'/>
        <span className='rightbarOnliner'></span>
      </div>
      <span className='rightbarUsername'>Hala Darwish</span>
    </li>
    <li className="rightbarFriend">
      <div className="rightProfileImgContainer">
        <img src='./assets/person/9.jpeg' alt='' className='rightProfileImg'/>
        <span className='rightbarOnliner'></span>
      </div>
      <span className='rightbarUsername'> Saja Abu Ghali</span>
    </li>
    <li className="rightbarFriend">
      <div className="rightProfileImgContainer">
        <img src='./assets/person/8.jpeg' alt='' className='rightProfileImg'/>
        <span className='rightbarOnliner'></span>
      </div>
      <span className='rightbarUsername'>Hanadi Darwish</span>
    </li>
    <li className="rightbarFriend">
      <div className="rightProfileImgContainer">
        <img src='./assets/person/3.jpeg' alt='' className='rightProfileImg'/>
        <span className='rightbarOnliner'></span>
      </div>
      <span className='rightbarUsername'>Heba Jawad</span>
    </li>
  </ul>
</div>
 </div>
  )
}
// I stopped at 1:24:17 mintus

export default Rightbar;