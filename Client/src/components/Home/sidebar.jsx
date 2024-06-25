import React from 'react';
import CountUp from 'react-countup';

function Sidebar() {
  return (
    <div className="md:basis-1/5 flex flex-row items-center justify-center text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
      <div className="mb-10">
        <h2 className="text-white font-[700] text-[32px]">
          <CountUp start={0} end={384} duration={2} suffix=" +"></CountUp>
        </h2>
        <h4 className="text-white font-[600] text-[18px]">
          Successful Projects
        </h4>
      </div>
      <div className="mb-10">
        <h2 className="text-white font-[700] text-[32px]">
          <CountUp start={0} end={100} duration={2} suffix="%"></CountUp>
        </h2>
        <h4 className="text-white font-[600] text-[18px]">
          Success Rate
        </h4>
      </div>
      <div className="mb-10">
        <h2 className="text-white font-[700] text-[32px]">
          <CountUp start={0} end={230} duration={2} suffix=" +"></CountUp>
        </h2>
        <h4 className="text-white font-[600] text-[18px]">
          Trusted Company
        </h4>
      </div>
      <div className="mb-10">
        <h2 className="text-white font-[700] text-[32px]">
          <CountUp
            start={0}
            end={4000}
            duration={2}
            suffix=" +"
          ></CountUp>
        </h2>
        <h4 className="text-white font-[600] text-[18px]">
          Hours Worked
        </h4>
      </div>
      {/* <div className="mb-10">
        <h2 className="text-white font-[700] text-[32px]">
          <CountUp
            start={0}
            end={100}
            duration={2}
            prefix="$"
            suffix="M+"
          ></CountUp>
        </h2>
        <h4 className="text-white font-[600] text-[18px]">
          Transaction
        </h4>
      </div> */}
    </div>
  );
}

export default Sidebar;
