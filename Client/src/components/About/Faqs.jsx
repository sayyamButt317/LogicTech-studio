
const Faqs = () => {
  return (
    <div className="container w-full h-full py-16">
      <h1 className="font-serif text-lg text-red-600 text-center">
        FAQs
      </h1>
      <h2 className="font-serif text-3xl text-center mb-10 justify-between">
        Answers To Your Common Questions
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-4">
          <h1 
          className="font-lg text-xl">
          
            What Services does LogicTech Offer?
          </h1>
          <p className="mt-4 font-thin">
            LogicTech Studio Offers comprehensive software including
            development, design, and marketing services to meet all your
            digital needs.
          </p>

          <h1 className="font-lg text-xl">
            Why Choose LogicTech for Software Development?
          </h1>
          <p className="mt-4 font-thin">
            LogicTech excels in software development with a team of skilled
            professionals dedicated to delivering innovative and high-quality
            solutions tailored to your requirements.
          </p>

          <h1 className="font-lg text-xl">
            How does LogicTech ensure design excellence?
          </h1>
          <p className="mt-4 font-thin">
            LogicTech Studio's design team combines creativity and expertise to
            craft visually stunning and user-friendly interfaces that elevate
            your brand & captivate your audience.
          </p>

          <h1 className="font-lg text-xl">
            What marketing strategies does LogicTech employ?
          </h1>
          <p className="mt-4 font-thin">
            LogicTech employs data-driven marketing strategies to enhance your
            online presence, drive traffic, & maximize your ROI through targeted
            campaigns and analytics-driven insights.
          </p>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h1 className="font-lg text-xl">
            What's LogicTech Studio's app development expertise?
          </h1>
          <p className="mt-4 font-thin">
            LogicTech specializes in mobile app development, creating intuitive,
            feature-rich applications for seamless user experiences across
            platforms.
          </p>

          <h1 className="font-lg text-xl">
            How does LogicTech Studio develop websites?
          </h1>
          <p className="mt-4 font-thin">
            LogicTech prioritizes user experience and scalability, ensuring our
            websites effectively communicate your brand and achieve your goals.
          </p>

          <h1 className="font-lg text-xl">
            How does LogicTech ensure ongoing support and maintenance?
          </h1>
          <p className="mt-4 font-thin">
            LogicTech provides continuous support and maintenance services to
            ensure your digital products remain up-to-date and fully functional.
          </p>

          <h1 className="font-lg text-xl">
            Can LogicTech handle complex enterprise solutions?
          </h1>
          <p className="mt-4 font-thin">
            Yes, LogicTech has extensive experience in developing complex
            enterprise solutions tailored to meet the unique needs of large
            organizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
