import { FaUserCircle } from "react-icons/fa";
import { RiRefreshLine, RiMessage2Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./vip.css";
export default function Navtop() {
  return (
    <div className="navtop">
      <div className="navtopcontent">
        <div className="navtopprofile reacticon reacticonprofile">
          <FaUserCircle />
        </div>
        <div className="navtopright">
          <div className="navtoprefresh reacticon">
            <RiRefreshLine />
          </div>
          <div className="navtopmessage reacticon ">
            <RiMessage2Fill />
          </div>
          <div className="navtopmore reactico">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
