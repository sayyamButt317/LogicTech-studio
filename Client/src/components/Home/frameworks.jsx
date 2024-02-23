import React from 'react';
import Angular from "../../assets/angular.png";
import AWS from "../../assets/aws.png";
import Django from "../../assets/django.png";
import Docker from "../../assets/docker.png";
import Flutter from "../../assets/flutter.png";
import Dotnet from "../../assets/dotnet.png";
import Kotlin from "../../assets/kotlin.png";
import Mongodb from "../../assets/mongodb.png";
import Next from "../../assets/nextjs.png";
import react from "../../assets/react.png";
import Nginx from "../../assets/nginx.png";
import Node from "../../assets/nodejs.png";
import SQL from "../../assets/sql.svg";
import Vue from "../../assets/vue.png";
import Php from "../../assets/php.png";
import Graph from "../../assets/graphql.png";
import Ios from "../../assets/ios.png"

const icons=[
  {Image:Flutter ,width:100},
  {Image:Kotlin ,width:100},
  {Image:Ios ,width:50},
  {Image:Angular,width:100},
  {Image:Vue,width:50},
  {Image:Next ,width:100},
  {Image:react,width:100},
  {Image:Node,width:100},
  {Image:Dotnet ,width:50},
  {Image:Django,width:50},
  {Image:Mongodb,width:100},
  {Image:Docker ,width:100},
  {Image:AWS ,width:100},
  {Image:Nginx ,width:100},
  {Image:SQL ,width:100},
  {Image:Php ,width:100},
  {Image:Graph ,width:100},
];

const Frameworks = () => {
  return (
    <div className='md:container md:mx-auto mt-10 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
'>
      <span className='mt-5 text-[2rem] font-serif font-semibold flex items-center justify-center '>
        We are Offering these Technologies 
      </span>
      <div 
      className='flex flex-wrap justify-center items-center gap-16 m-12'>
        {icons.map((icon,index) => (
          <div key={index}
          data-aos="fade-up"
          data-aos-duration="400">
            <img src={icon.Image} width={icon.width} className='h-auto' alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frameworks;
