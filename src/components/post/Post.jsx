import "./post.css";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";

function Post() {
  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src="./assets/person/9.jpeg"
            alt=""
          />
          <span className="postUsername">heleena jawad
          </span>
          <span className="postDate">5 mins ago</span>
        </div>
        <div className="postTopRight">
          <MoreVertSharpIcon />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText"> Hey It's my first post </span>
        <img className="postImg" src="./assets/post/1 (1).jpeg" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img className="likeIcon" src="assets/like.png"  alt="" />
          <img className="likeIcon" src="assets/heart.png" alt="" />
          <span className="postLikeCounter"> people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText"> comments</span>
        </div>
      </div>
    </div>
  </div>
);
}

export default Post;
