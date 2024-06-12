import Image from "next/image";

const BestMoment = () => {
  return (
    <div className="best-moment-container bg-black px-4">
      <h2 className="text-white text-2xl font-bold">Best Moment</h2>
      <hr className="w-full border-t-2 border-white mb-4" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="square-image-wrapper">
            <Image
              src="/images/ourr1.jpg"
              alt="Image 4"
              width={150}
              height={150}
              className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="square-image-wrapper">
            <Image
              src="/images/our2.jpg"
              alt="Image 5"
              width={150}
              height={150}
              className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="square-image-wrapper mb-4">
            <Image
              src="/images/our4.jpg"
              alt="Image 6"
              width={150}
              height={150}
              className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="square-image-wrapper mb-4">
            <Image
              src="/images/our5.jpg"
              alt="Image 7"
              width={150}
              height={150}
              className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMoment;
