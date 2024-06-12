import { useEffect } from "react"
import { useState } from 'react';;
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const OurMoment = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
  
    const playSong = (song) => {
        setCurrentSong(song);
        setIsPlaying(true);
        console.log("Song played:", song); // Tambahkan console.log di sini
    };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll('.moment-image');
      elements.forEach(element => {
        element.classList.add('animate-fade-in');
      });
    }
  }, [inView]);

  return (
    <div id="our-moment" ref={ref} className="our-moment-container mt-2 px-4">
      <h2 className="text-2xl font-bold mb-2">Our Moment</h2>
      <hr className="w-full border-t-2 border-black mb-4" />
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div 
            className="w-full h-40 relative shadow-lg rounded-lg overflow-hidden bg-white moment-image" 
            key={index}
            onClick={() => playSong(`/audio/song${index + 1}.mp3`)}
          >
            <Image
              src={`/images/bm${index + 1}.jpg`}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="0bject-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMoment;
