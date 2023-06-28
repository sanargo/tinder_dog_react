import nopeIcon from "../assets/nope-icon.png";
import likeIcon from "../assets/like-icon.png";

function Buttons({ like, dislike }) {
  return (
    <section className="bg-gray-100 flex justify-center gap-5 pb-5">
      <button
        onClick={dislike}
        className="bg-white shadow-lg w-16 h-16 rounded-full flex justify-center items-center hover:bg-red-100"
      >
        <img src={nopeIcon} alt="" className="h-7" />
      </button>
      <button
        onClick={like}
        className="bg-white shadow-lg w-16 h-16 rounded-full flex justify-center items-center hover:bg-green-100"
      >
        <img src={likeIcon} alt="" className="h-7" />
      </button>
    </section>
  );
}

export default Buttons;
