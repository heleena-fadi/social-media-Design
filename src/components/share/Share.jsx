import "./share.css";
import PermMediaSharpIcon from '@mui/icons-material/PermMediaSharp';
import LabelSharpIcon from '@mui/icons-material/LabelSharp';
import MoodSharpIcon from '@mui/icons-material/MoodSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="./assets/person/9.jpeg"
            alt="img-pro"
          />
          <input
            placeholder="What's in your mind Heleena?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
                <PermMediaSharpIcon  htmlColor= "tomato" className="shareIcon"/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
                <LabelSharpIcon   htmlColor= "blue" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
                <LocationOnSharpIcon  htmlColor= "green" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
                <MoodSharpIcon   htmlColor= "goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
