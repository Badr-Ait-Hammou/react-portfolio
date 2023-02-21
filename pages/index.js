import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillMail,
  AiFillAlert,
  AiFillFacebook,
  
} from "react-icons/ai";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { BsMoonFill } from "react-icons/bs";

import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/products.png";
import web4 from "../public/bienv.png";
import web5 from "../public/gestiost.png";
import web6 from "../public/nanolog.jpg";
import badr from "../public/badrengeneering.png";
import inv from "../public/inve.jpg";
import spring from "../public/spring.png";
import dash from "../public/badrbadrbadr.png";
import angular from "../public/angular.png";
import bootst from "../public/bootst.png";
import csh from "../public/csh.png";
import django from "../public/django.png";
import dotnet from "../public/dotnet.png";
import react from "../public/react.png";
import tailwind from "../public/tailwind.png";
import uca from "../public/fst.png";
import emsi from "../public/Sans titre (1).png";
import payment from "../public/payment.jpg";
import logo from "../public/metallic_golden_logo_on_wall_mockup.png";
import ben from "../public/benh.png"
import enter from "../public/ahenter.png"
import dev from "../public/devanddes.jpg"
import bah from "../public/bah.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
    const email = 'badr.ibnbrahim@gmail.com';
    const subject = 'Portfolio Inquiry';
    const body = 'Hello Mr_Badr, I am interested in your work.';
  
    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ait_Hammou</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-1 flex justify-between dark:text-white">

            <ul className="flex items-center">
              <li>
                <BsMoonFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl "
                />
              </li>
            </ul>
            <ul className="flex items-center">

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-400 text- to-blue-500 text-white px-4 py-2 border-none rounded-md ml-8" href="Ait_Hammou.pdf" download
                >
                  Resume
                </a>
              </li>

            </ul>
          </nav>
          <h2 className="text-5xl  text-center mx-auto p-10 py-2 text-blue-400 font-burtons dark:text-blue-400 md:text-5xl">
            Badr Ait Hammou
          </h2>
          <h3 className="text-2xl  text-center mx-auto p-10 py-1 dark:text-white md:text-1xl">
            Software Engineering Student.
          </h3>
          <div className=" mx-auto bg-gradient-to-b from-blue-500-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
            <Image src={badr} layout="fill"  objectFit="cover" />
          </div>


          <div className="text-center mx-auto p-10 py-1">

            <div className="text-5xl flex justify-center gap-16 py-5 dark:text-gray-400">
             
              <a href={mailToLink}>
               <AiFillMail className="text-red-600  hover:text-red-400" />
                </a>
              <a href="https://www.linkedin.com/in/badr-ait-hammou-24357b233/"  target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-blue-500 hover:text-blue-400"/>
              </a>
              <a href="https://github.com/Badr-Ait-Hammou"  target="_blank" rel="noopener noreferrer">

              <AiOutlineGithub className="text-black hover:text-gray-500"/>
              </a>
            </div>
            <p className="text-md py-2  leading-8 text-center text-gray-800 dark:text-gray-200">
            I am highly interested in software development and learning new technologies. I have strong skills in programming and problem-solving, and I have participated in numerous software development projects as a part of a team. 
            </p>
          </div>
        </section>
        <section >
          <div>
            <h3 className="text-4xl py-2  text-center dark:text-white font-burtons">Services I offer</h3>
            <p className="text-md py-2  leading-8 text-center text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a software engineer and a designer,
              I have done remote work for a lot of 
              <span className="text-teal-500"> enterprises </span>
              ,and collaborated with talanted people to develop performant applications.
              I offer a wide range of services, including brand design and programming.
            </p>
            
            <h3 className="text-4xl  py-2 text-center dark:text-white font-burtons ">Frameworks And Languages I Use:</h3>
           
          </div>
          <div className="lg:flex gap-6  ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={csh} width={100} height={100} />
              
              <p className="py-2 text-blue-400 font-bold text-1xl ">
                C#
              </p>
              <h4 className="py-4 text-black  dark:text-white">Desktop Applications</h4>
             
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={angular} width={100} height={100} />
             
              <p className="py-2 text-blue-400 font-bold text-1xl">
                Angular
              </p>
              <h4 className="py-4 text-black  dark:text-white">Consistent UI designe</h4>
             
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={dotnet} width={100} height={100} />
             
              <p className="py-2 text-blue-400 font-bold text-1xl">
                .Net
              </p>
              <h4 className="py-4 text-black  dark:text-white">Performant Applications </h4>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={react} width={100} height={100} />
             
              <p className="py-2 text-blue-400 font-bold text-1xl">
                React
              </p>
              <h4 className="py-4 text-black  dark:text-white">Easy integration</h4>
             
            </div>
          </div>

          <div className="lg:flex gap-6 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={tailwind} width={100} height={100} />
              
              <p className="py-2 text-blue-400 font-bold text-1xl">
                Tailwindcss
              </p>
              <h4 className="py-4  text-black  dark:text-white">Responsive Design</h4>
             
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={bootst} width={100} height={100} />
             
              <p className="py-2 text-blue-400 font-bold text-1xl">
                Bootstrap
              </p>
              <h4 className="py-4  text-black  dark:text-white">Customizable</h4>
             
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={django} width={100} height={100} />
             
              <p className="py-2 text-blue-400 font-bold text-1xl">
                Django
              </p>
              <h4 className="py-4  text-black  dark:text-white"> Scalability</h4>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={spring} width={100} height={100} />
             
              <p className="py-2 text-blue-400 font-bold text-1xl">
                Springboot
              </p>
              <h4 className="py-4  text-black  dark:text-white">Enhanced Security</h4>
              <FloatingWhatsApp phoneNumber="+212666580677" accountName="Ait_Hammou" avatar="badrengeneering.png" darkMode="true" chatMessage="Hello there! 🤝 What can i do for you?" allowClickAway="true" notificationSound="true"/>
            </div>
          </div>


        </section>
        <section className="py-10">
        <div>
            <h3 className="text-4xl py-1  text-center dark:text-white font-burtons ">Education:</h3>
            <p className="text-md py-2  text-center leading-8 text-gray-800 dark:text-gray-200">
              Thanks to self education and those two establishment, I have a strong educational background in computer science.
            </p>
            
          </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={uca} width={100} height={100} />
              
              <p className="py-2 text-center dark:text-white">
                I obtained my bachelor s  degree in Computer Science from the <span className="text-teal-500"> FST </span> University,
                where I gained a solid foundation in programming languages, and algorithms.
              </p>

             
            </div>
            <div className="text-center shadow-lg  p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={emsi} width={100} height={100} />

              <p className="py-2 text-center dark:text-white">
                I completed my engineering education at <span className="text-teal-500"> EMSI </span> School,
                where I deepened my understanding of computer architecture,
                operating systems, and databases.
              </p>

             
            </div>
          <div>
            <p className="py-2 text-center dark:text-white" >Through both of these educational experiences,
              I developed a strong analytical and problem-solving skills,
              which have been essential to my success in this field.</p>
            <h3 className="text-4xl py-6  text-center dark:text-white font-burtons ">Some Of My Projects:</h3>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/*
            <div className="basis-1/3 flex-1 ">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"

                layout="responsive"
                src={web4}
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"

                layout="responsive"
                src={web6}
              />
            </div>
            */}
            <div className="basis-1/3 flex-1">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"

                layout="responsive"
                src={web6}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"

                layout="responsive"
                src={payment}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"
               layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"
                layout="responsive"
                src={dash}
              />
            </div>
          </div>
          <h3 className="text-4xl py-6  text-center dark:text-white font-burtons ">My Recent Designs:</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

            <div className="basis-1/3 flex-1 ">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"

                  layout="responsive"
                  src={ben}
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"

                  layout="responsive"
                  src={bah}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"

                  layout="responsive"
                  src={enter}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                  className="rounded-lg object-cover object-fill object-center h-full w-full"

                  layout="responsive"
                  src={dev}
              />
            </div>
          </div>


        </section>
      </main>
    </div>
  );
}
