const Card = () => {
  return (
    <div
      className="relative max-w-xs rounded-lg shadow-lg overflow-hidden"
      style={{ background: "white" }}
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src="/assets/imgs/blog/blog2.jpg"
          alt="Cute Young Woman in Straw Hat"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900">
          Cute Young Woman in Straw Hat and Lon...
        </h3>
        <p className="text-xs text-gray-500">By photo_oles</p>
      </div>
      <div className="absolute bottom-0 right-0 flex justify-end p-2 ">
        <button className="p-2 text-red-500">
          <span className="icon ti-bookmark"></span>
        </button>
        <button className="p-2 text-red-500">
          <span className="icon ti-download"></span>
        </button>
      </div>
    </div>
  );
};

export default Card;
