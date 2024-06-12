const BestVideo = () => {
    return (
      <div className="best-video-container mt-2 px-4">
        <h2 className="text-2xl font-bold mb-2">Best Video</h2>
        <hr className="w-full border-t-2 border-black mb-4" />
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div 
              className="w-full relative shadow-lg rounded-lg overflow-hidden bg-white" 
              key={index}
            >
              <video 
                controls
                className="hidden md:block w-full h-auto object-cover rounded-t-lg"
              >
                <source src={`/videos/video${index + 1}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="hidden md:block px-4 py-2">
               </div>
              <div className="md:hidden flex justify-center items-center">
                <video 
                  controls
                  className="w-full h-40 object-cover rounded-lg"
                >
                  <source src={`/videos/video${index + 1}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BestVideo;