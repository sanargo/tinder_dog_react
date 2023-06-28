import profileIcon from "../assets/Vector.png";
import pawLogo from "../assets/logo.png";
import chatIcon from "../assets/chat-icon.png";
// import pawIcon from "../assets/paw-icon.png";
function Header() {
  return (
    <header className="w-full flex justify-between p-3">
      <img src={profileIcon} alt="" className="w-7 cursor-pointer" />
      <img src={pawLogo} alt="" className="h-7 cursor-pointer" />
      <img src={chatIcon} alt="" className="w-7 cursor-pointer" />
    </header>
  );
}

export default Header;
