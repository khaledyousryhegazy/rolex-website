function Subscribe() {
  return (
    <div className="container bg-firstColor my-20">
      <div className="flex max-[768px]:flex-col max-[768px]:gap-10 p-14 max-[1024px]:p-5 max-[576px]:p-0">
        <div className="p-10 flex  max-[1024px]:p-3 flex-col gap-10  w-full">
          <h1 className="text-3xl text-bodyColor text-balance font-bold">
            Subscribe Our Newsletter
          </h1>
          <p className="text-balance text-bodyColor">
            Don't miss out on your discounts. Subscribe to our email newsletter
            to get the best offers, discounts, coupons, gifts and much more.
          </p>
        </div>

        <div className="flex items-center justify-center p-10 max-[1024px]:p-3 w-full">
          <div className="flex">
            <input
              type="text"
              className=" w-full bg-bodyColor text-textColor p-3 text-sm outline-none"
              placeholder="Enter Your Email"
            />
            <button className="bg-buttonColor p-4 text-textColor hover:bg-actionColor transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
