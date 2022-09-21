import Navtop from "./component/navtop";
import Searchbar from "./component/searchbar";
import NavUser from "./component/user/navuser";
import Sendchat from "./component/user/sendchat";
import UserChatBox from "./component/user/userchatcontent";
import UserChat from "./component/userchat";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navtop />
      <Searchbar />
      <UserChat />
      <NavUser />
      <UserChatBox />
      <Sendchat />
    </div>
  );
}
