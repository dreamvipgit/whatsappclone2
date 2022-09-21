import { BsEmojiSmile, BsMic } from "react-icons/bs";

import "../vip.css";

export default function Sendchat() {
  return (
    <div className="Userchatbox">
      <div className="sendchatbox">
        <div className="sendchatboxcontent">
          <div className="sendchatboxemoji">
            <BsEmojiSmile />
          </div>
          <div className="sendchattypebox">
            <div className="sendchattype">
              <input
                type="text"
                placeholder="type here to send message"
                className="chattext"
              />
            </div>
          </div>
          <div className="sendchatboxmic">
            <BsMic />
          </div>
        </div>
      </div>
    </div>
  );
}
