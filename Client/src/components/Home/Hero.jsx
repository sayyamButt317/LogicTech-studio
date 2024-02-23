import React from "react";
import Socialicons from "./socialicons";
import Sidebar from "./sidebar";
import Personimage from "./personimage";
import team from '../../assets/team.png';
const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/*==========hero left content  ==========*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-slate-700 font-[300] text-[16px]"
            >
              Here Imagination Become true
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-serif text-[1.8rem] sm:text-[40px]"
            >
              Welcome to
            </h1>
            <h2 className="text-primaryColor font-sans md:font-serif text-[1.8rem] sm:text-[45px]">
              LogicTech Studio
            </h2>
            {/*==========Email ME Button ==========*/}
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#Contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i>Email us
                </button>
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Simplify your life with LogicTech Studio, We are providing
              cutting-edge solutions for businesses and individuals, from web
              development to mobile apps.your go-to solution for managing
              services seamlessly. Say goodbye to the hassle of juggling
              multiple due dates. Our user-friendly platform empowers you to
              take control of your expenses effortlessly.
            </p>
            <Socialicons />
          </div>
          <Personimage />
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
