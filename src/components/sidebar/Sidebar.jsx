import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpIcon from '@mui/icons-material/Help';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


function Sidebar() {
  return (
    <div className='sidebar'>
    <div className="sidebarWrapper">
      <ul className="sidebarList">
<li className="sidebarListItem">
<RssFeedIcon className='sidebarIcon'/>
<span className='sidebarListItemText'> Feed</span>
</li>

<li className="sidebarListItem">
<ChatIcon className='sidebarIcon'/>
<span className='sidebarListItemText'> Chats</span>
</li>

<li className="sidebarListItem">
<PlayCircleIcon className='sidebarIcon'/>
<span className='sidebarListItemText'> Videos</span>
</li>
<li className="sidebarListItem">
<GroupsIcon className='sidebarIcon'/>
<span className='sidebarListItemText'> Groupes</span>
</li>
<li className="sidebarListItem">
<BookmarksIcon className='sidebarIcon'/>
<span className='sidebarListItemText'> Bookmarks</span>
</li>
<li className="sidebarListItem">
<HelpIcon className='sidebarIcon'/>
<span className='sidebarListItemText'> Questions</span>
</li>
<li className="sidebarListItem">
<WorkIcon className='sidebarIcon'/>
<span className='sidebarListItemText'> Jobs</span>
</li>
<li className="sidebarListItem">
<EventIcon className='sidebarIcon'/>
<span className='sidebarListItemText'>Events</span>
</li>
<li className="sidebarListItem">
<SchoolIcon className='sidebarIcon'/>
<span className='sidebarListItemText'> Courses</span>
</li>
      </ul>
<button className='sidebarButton'> Show More </button>
<hr className='sidebarHr'/>
<ul className="sidebarFriendList">
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/8.jpeg' alt='profile-pic1'/>
    <span className='sidebarFriendName'>Heleeea Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/2.jpeg' alt='profile-pic2'/>
    <span className='sidebarFriendName'>Fadi Omar</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/3.jpeg' alt='profile-pic3'/>
    <span className='sidebarFriendName'>Neamaa Abu Ghali</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/7.jpeg' alt='profile-pic3'/>
    <span className='sidebarFriendName'>Eman Fadi</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/9.jpeg' alt='profile-pic4'/>
    <span className='sidebarFriendName'>Omar Fadi</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/4.jpeg' alt='profile-pic5'/>
    <span className='sidebarFriendName'> Hiam Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/7.jpeg' alt='profile-pic8'/>
    <span className='sidebarFriendName'>Haifaa Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/6.jpeg' alt='profile-pic6'/>
    <span className='sidebarFriendName'>Hala Darwish</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/5.jpeg' alt='profile-pic7'/>
    <span className='sidebarFriendName'>Hanadi Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/6.jpeg' alt='profile-pic'/>
    <span className='sidebarFriendName'>Heba Darwish</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/4.jpeg' alt='profile-pic10'/>
    <span className='sidebarFriendName'>Saja Abu Ghali</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/3.jpeg' alt='profile-pic3'/>
    <span className='sidebarFriendName'>Mohammed </span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/3.jpeg' alt='profile-pic3'/>
    <span className='sidebarFriendName'>Khattab</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/7.jpeg' alt='profile-pic8'/>
    <span className='sidebarFriendName'>Haifaa Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/6.jpeg' alt='profile-pic6'/>
    <span className='sidebarFriendName'>Hala Darwish</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/5.jpeg' alt='profile-pic7'/>
    <span className='sidebarFriendName'>Hanadi Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/6.jpeg' alt='profile-pic'/>
    <span className='sidebarFriendName'>Heba Darwish</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/4.jpeg' alt='profile-pic10'/>
    <span className='sidebarFriendName'>Saja Abu Ghali</span>
  </li>
</ul>
<li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/7.jpeg' alt='profile-pic8'/>
    <span className='sidebarFriendName'>Haifaa Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/6.jpeg' alt='profile-pic6'/>
    <span className='sidebarFriendName'>Hala Darwish</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/5.jpeg' alt='profile-pic7'/>
    <span className='sidebarFriendName'>Hanadi Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/6.jpeg' alt='profile-pic'/>
    <span className='sidebarFriendName'>Heba Darwish</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/4.jpeg' alt='profile-pic10'/>
    <span className='sidebarFriendName'>Saja Abu Ghali</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/7.jpeg' alt='profile-pic8'/>
    <span className='sidebarFriendName'>Haifaa Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/6.jpeg' alt='profile-pic6'/>
    <span className='sidebarFriendName'>Hala Darwish</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/5.jpeg' alt='profile-pic7'/>
    <span className='sidebarFriendName'>Hanadi Jawad</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/6.jpeg' alt='profile-pic'/>
    <span className='sidebarFriendName'>Heba Darwish</span>
  </li>
  <li className="sidebarFriend">
    <img  className='sidebarFriendImg' src='./assets/person/4.jpeg' alt='profile-pic10'/>
    <span className='sidebarFriendName'>Saja Abu Ghali</span>
  </li>
    </div>
    </div>
  )
}

export default Sidebar