import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <div className="relative w-full h-[900px] bg-cover">
      {/* Left Text */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-20">
        <div className="mx-auto max-w-md ml-14">
          <h1 className="text-4xl font-bold mb-4">Welcome to LogicTech</h1>
          <p className="text-lg">
            At SoftTech Solutions, we're dedicated to transforming your digital
            aspirations into reality. With our innovative software solutions and
            cutting-edge technology expertise, we empower businesses to thrive in
            the digital age
          </p>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white z-20 text-center">
        <h1 className="text-4xl font-bold mb-4 mt-8">TURN YOUR VISION INTO REALITY</h1>
        <p className="text-lg">Let's Start Building Together</p>
      </div>
      
      {/* Additional Text - Right */}
      <div className="absolute bottom-4 right-4 text-white z-20">
        <p className="text-lg">Discover what we can do for you</p>
        <a href="#" className="text-lg font-bold ">Explore Our Services Below</a>
      </div>
      
      {/* Spline Scene */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <Spline scene="https://prod.spline.design/6Ynr7fNnLGCUoA-U/scene.splinecode" />
      </div>
    </div>
  );
}

export default Hero;
