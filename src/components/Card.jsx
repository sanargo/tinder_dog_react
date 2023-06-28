import likeImage from "../assets/like-image.png";
import nopeImage from "../assets/nope-image.png";

function Card({ dog }) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-5">
      <div className="relative flex justify-center">
        <img src={dog.avatar} alt="" className="w-11/12 rounded-lg" />
        {!dog.hasBeenSwiped ? (
          ""
        ) : dog.hasBeenLiked ? (
          <img
            src={likeImage}
            alt=""
            className="absolute w-32 rotate-30 top-8 left-6"
          />
        ) : (
          <img
            src={nopeImage}
            alt=""
            className="absolute w-32 rotate-30 top-8 left-6"
          />
        )}
        <div className="absolute left-7 bottom-5">
          <h3 className="text-white font-bold text-xl">
            {dog.name}, {dog.age}
          </h3>
          <p className="text-gray-300 font-thin text-sm">{dog.bio}</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
