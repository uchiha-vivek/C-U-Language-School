import { FC } from "react";
import person from '../assets/person.jpeg'; // Import the image from the assets folder

const SubHeroSection: FC = () => {
  return (
    <div className="flex h-[1000px]"> {/* Set a fixed height or adjust as needed */}
      
      {/* Left Section - Background Image */}
      <div
        className="w-1/2 mt-20  bg-cover bg-center"
        style={{ backgroundImage: `url(${person.src})` }} // Use .src to reference the image path
      ></div>

      {/* Right Section - Text Content */}
      <div className="w-1/2 mt-20 flex flex-col justify-center items-center bg-white p-10">
        <h2 className="text-3xl font-bold mb-4"> Learn English and <br/> Spanish with Ease </h2>
        <h3 className="text-xl " > Conversational Fluency </h3>
        <p className="text-lg text-gray-700 mb-6">
          Discover a tailored learning approach that adapts to your unique pace and style. Our program
          ensures that every lesson is designed with you in mind, helping you reach your goals faster.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>

    </div>
  );
};

export default SubHeroSection;
