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

function Frameworks() {
  return (
    <div className='md:container md:mx-auto'>
      <div className='flex flex-wrap justify-center items-center gap-16 m-12'>
        <img src={Flutter} className='max-w-[100px] h-auto' alt='' />
        <img src={Kotlin} className='max-w-[100px] h-auto' alt='' />
        <img src={Angular} className='max-w-[100px] h-auto' alt='' />
        <img src={Vue} className='max-w-[50px] h-auto' alt='' />
        <img src={Next} className='max-w-[100px] h-auto' alt='' />
        <img src={react} className='max-w-[100px] h-auto' alt='' />
        <img src={Node} className='max-w-[100px] h-auto' alt='' />
        <img src={Dotnet} className='max-w-[50px] h-auto' alt='' />
        <img src={Django} className='max-w-[50px] h-auto' alt='' />
        <img src={Mongodb} className='max-w-[100px] h-auto' alt='' />
        <img src={Docker} className='max-w-[100px] h-auto' alt='' />
        <img src={AWS} className='max-w-[100px] h-auto' alt='' />
        <img src={Nginx} className='max-w-[100px] h-auto' alt='' />
        <img src={SQL} className='max-w-[100px] h-auto' alt='' />
        <img src={Php} className='max-w-[100px] h-auto' alt='' />
        <img src={Graph} className='max-w-[100px] h-auto' alt='' />
      </div>
    </div>
  );
}

export default Frameworks;
