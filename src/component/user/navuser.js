import { FaUserCircle, FaSearch } from "react-icons/fa";

import { MdAttachFile } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../vip.css";
export default function NavUser() {
  return (
    <div className="Userchatbox">
      <div className="Userchatboxnav">
        <div className="Userchatboxnavcontent">
          <div className="Userchatboxnavleft">
            <div className="Userchatboxuserprofile reacticon reacticonprofile">
              <FaUserCircle onClick="function()" />
            </div>
            <div className="Userchatboxusername ">
              <div className="username">vipuser</div>
            </div>
          </div>
          <div className="Userchatboxnavright">
            <div className="Userchatboxnavsearch reacticon reacticonsearch">
              <FaSearch />
            </div>
            <div className="Userchatboxnavlinkfile reacticon reacticonfile">
              <MdAttachFile />
            </div>
            <div className="Userchatboxnavmore reacticon reacticondot">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
