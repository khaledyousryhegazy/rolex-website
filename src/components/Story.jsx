import story from "../assets/story 1.png";

function Story() {
  return (
    <div className="container flex justify-center gap-10 max-[992px]:gap-32 py-20 max-[992px]:flex-col-reverse">
      <div className="story-before min-[992px]:ml-16 m-auto ">
        <img src={story} alt="rolex story" />
      </div>

      <div className="flex flex-col justify-evenly gap-5">
        <h3 className="border-t-[2px] py-2 font-semibold border-firstColor w-fit text-xl text-titleColor capitalize">
          our story
        </h3>

        <h1 className="font-semibold text-3xl capitalize text-balance text-titleColor">
          Inspirational Watch of this year
        </h1>

        <p className=" capitalize text-balance text-textColor">
          The latest and modern watches of this year, is available in various
          presentations in this store, discover them now.
        </p>

        <button className="capitalize w-fit px-4 py-2 bg-buttonColor hover:bg-actionColor text-textColor">
          discover
        </button>
      </div>
    </div>
  );
}

export default Story;
