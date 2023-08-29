import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {
  
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Fadi omar</b> and <b>3 other friends </b> have a birthday Today!{" "}
          </span>
        </div>
        <img className="rightbarAd" src="./assets/ad.png" alt="" />
        <h4 className="rightbarTitle"> Online Friends </h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="RightBarTitlle"> User Information </h4>
        <div className="RightBarInfo">
          <div className="RightBarInfoItem">
            <span className="RightBarInfoKey"> city: </span>
            <span className="RightBarInfoValue">Gaza </span>
          </div>
          <div className="RightBarInfoItem">
            <span className="RightBarInfoKey"> From: </span>
            <span className="RightBarInfoValue">Germany </span>
          </div>
          <div className="RightBarInfoItem">
            <span className="RightBarInfoKey">Relationship </span>
            <span className="RightBarInfoValue">Married </span>
          </div>
        </div>

        <h4 className="RightBarTitlle"> User Friend </h4>

        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImg"
              src="assets/person/8.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Eman Fadi</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImg"
              src="assets/person/9.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Eman Fadi</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImg"
              src="assets/person/6.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Eman Fadi</span>
          </div>
          <div className="rightBarFollowing">
            <img
              className="rightBarFollowingImg"
              src="assets/person/7.jpeg"
              alt=""
            />
            <span className="rightBarFollowingName">Eman Fadi</span>
          </div>
          
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightBar /> : <HomeRightBar/>}
      </div>
    </div>
  );
}

export default Rightbar;
