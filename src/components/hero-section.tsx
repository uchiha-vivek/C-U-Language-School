import { FC } from 'react';
import Hero from '../assets/hero.jpeg'; // Import the image from the assets folder
import { Button } from './ui/button';

const HeroSection: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Hero.src})` }} // Use .src to reference the image path
      >
        <div className="hero-content flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlock a World of <br /> Languages
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Learn English and Spanish with our immersive <br /> and engaging language learning platform.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>

      {/* Personalized Learning Section */}
      <div className="flex flex-col items-center justify-center bg-pink-500 h-12 text-black text-center py-10 px-4">
        <p className="text-xl md:text-2xl font-semibold">
          With our personalized learning program, there's always a class for you!
        </p>
      </div>
    </>
  );
};

export default HeroSection;
