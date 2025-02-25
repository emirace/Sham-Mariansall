export default function Hero() {
  return (
    <div className="relative w-full h-[65vh] bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/assets/imgs/header/b8.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <div className="relative z-10 flex justify-between items-center px-10 py-4 text-white">
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300">
            Images
          </a>
          <a href="#" className="hover:text-gray-300">
            Icons
          </a>
          <a href="#" className="hover:text-gray-300">
            Videos
          </a>
          <a href="#" className="hover:text-gray-300">
            Templates
          </a>
          <a href="#" className="hover:text-gray-300">
            More
          </a>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white mt-16">
        <h1 className="text-4xl font-bold">
          Smarter creativity, faster designs
        </h1>
        <p className="text-lg mt-2 mb-8">
          Everything you need, from stock images and videos to AI-powered design
          tools.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-white text-black w-[50%] rounded-lg mt-6 shadow-md">
          <input
            type="text"
            placeholder="Search all assets"
            className="flex-1 p-3 rounded-l-lg outline-none"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
