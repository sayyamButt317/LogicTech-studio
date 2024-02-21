import React from "react";
import instagram from "../../assets/insta.png";
import facebook from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";

const icons = [
  { image: facebook, href: "https://www.facebook.com" },
  { image: linkedin, href: "https://www.linkedin.com" },
  { image: instagram, href: "https://www.instagram.com" },
];

const socialicons = () => {
  return (
    <div className="flex items-center gap-4 mt-14">
      <span className="text-smallTextColor text-[1nppx] font-[500]">
        Get connected with us on social networks:
      </span>

      {icons.map((icon, index) => (
        <span>
          <a
            key={index}
            href={icon.href}
            className="text-smallTextColor text-[18px] font-[600]"
          >
            <img src={icon.image} height="40" width="40" alt="" />
          </a>
        </span>
      ))}
    </div>
  );
};

export default socialicons;
