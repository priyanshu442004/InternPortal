import React from "react";
import home from "../assets/Home-SideImg.png";
import divider from "../assets/Divider.png";
import NavigateLeftImg from '../assets/Navigate-LeftImg.png'
import MobImg from '../assets/Mob_Icon.png'
import CardsSection from "./CardSection";
import divider2 from '../assets/divider2.png';
import nurseImg from '../assets/nurseImg.png'
import ReviewsSection from "./ReviewSection";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-w-screen flex-col overflow-x-hidden">
      {/* {Top portion} */}

      <div className="overflow-x-hidden">
        <div className="flex flex-col md:flex-row mt-[10%]">
          <div className="flex flex-col gap-[7vw] md:gap-[10%] ml-[5%] md:w-[50%]">
            <div className=" text-4xl md:text-5xl font-bold text-gray-800">
              <h1>
                Welcome to DOC-Q <br />
                Intern Portal
              </h1>
            </div>
            <div>
              <p className="w-[80%] text-xl text-gray-600 font-semibold">
                Discover the DOC-Q Intern Portal, a comprehensive online
                platform designed to empower and support interns through their
                journey
              </p>
            </div>
            <div>
              <button className="bg-blue-600 text-white p-2 md:w-[13vw] rounded-md">
                Get started
              </button>
            </div>
          </div>

          <div className="flex flex-end">
            <img src={home} alt="" className=" w-[70vw] md:w-[40vw] ml-[12%]" />
          </div>
        </div>
      </div>

      {/* {Divider img} */}
      <div className="mt-[8%]">
        <img src={divider} alt="" className="w-screen" />
      </div>

      {/* {Navigate portal secton} */}
      <div className="mt-[4%]">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 w-screen flex items-center justify-center">
          Navigate The Portal
        </h1>

        <div className="flex flex-col md:flex-row mt-[5%] gap-[15%]">
          <div>
              <img src={NavigateLeftImg} alt="" />
          </div>

          <div className="flex flex-col items-center md:items-start md:gap-4 md:w-[35%] mt-[4%]">
              <h2 className="text-4xl font-semibold text-gray-800">
                About the portal
              </h2>
              <p className="text-md p-6 md:p-0 text-gray-600 font-semibold">
              Discover the key features and <br />
              functionalities of the DOC-Q Intern Portal 
              </p>
              <p className="text-md p-6 md:p-0 text-gray-600 font-semibold">
              From managing your  schedule and task to <br />
              accessing learning materials and communicating
              </p>

              <div className="text-xl text-gray-600 mt-[3%]">
                <p>
                  Explore now
                </p>
              </div>
              <div className="flex flex-row items-center justify-center p-3 gap-2 border border-gray-500 rounded-3xl w-[60%] mt-[2%] ml-[2%]">
                <img src={MobImg} alt="" className="h-[7vw] md:h-[2.3vw] ml-[2%]"/>
                <p className="text-sm text-gray-600 ml-[4%]">
                Stay up-to-date with the
                latest news
                </p>
                
              </div>
              <p className="text-sm text-gray-600 ml-[4%]">
              And many more...
              </p>
          </div>
        </div>
      </div>

      {/* {Discover section} */}
      <div className="flex flex-col mt-[10%] md:mt-[7%]">
        <div className="min-w-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 w-[90%] md:w-[50%] text-center">
          Discover DOC-Q’s
          Innovative
          </h1>
          <p className="mt-[3%] md:mt-[1%] w-[80%] text-center text-lg font-semibold text-gray-600">
          Explore the cutting-edge healthcare technology developed by DOC-Q and learn how you can contribute to
          the company’s mission of revolutionizing the industry 
          </p>
        </div>

        <div className="mt-5 w-screen flex flex-row justify-center items-center">
          <CardsSection/>
        </div>
      </div>

      {/* {Divider 2} */}
      <div className="mt-[3%]">
        <img src={divider2} alt="" className="w-screen h-[2.5vw] md:h-[1.6vw]" />
      </div>

      {/* {unlock full potential section} */}
      <div className="overflow-y-hidden overflow-x-hidden border border-b-[#BFD1E4] border-[0.2vw] h-[195vw] md:h-[43vw]">
        <div className="flex flex-col md:flex-row mt-[10%]">
          <div className="flex flex-col gap-[10%] ml-[5%] md:w-[50%]">
            <div className="text-5xl font-bold text-gray-800">
              <h1>
              Unlock The Full
              Potential Of Your
              </h1>
            </div>
            <div>
              <p className="w-[90%] md:w-[110%] text-xl text-gray-600 font-semibold">
              The DOC-Q Intern Portal offers a comprehensive suite of resources, 
tools, and opportunities to help you make the most of your internship.
From  personalized career guidance to collaborative learning 
experiences
              </p>
            </div>
            <div>
              <button className="mt-4 md:mt-0 bg-blue-600 text-white p-2 md:w-[13vw] rounded-md">
              Start Exploring
              </button>
            </div>
          </div>

          <div className="flex flex-end">
            <img src={nurseImg} alt="" className="md:w-[40vw] md:ml-[12%]" />
          </div>
        </div>
      </div>

      

      {/* {inspiring stories} */}
      <div className="mt-[5%]">
      <div className="min-w-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 w-[90%] md:w-[70%] text-center">
          Meet the DOC-Q Interns: Inspiring 
Stories Of Growth and Innovation
          </h1>
          <p className="mt-[3%] md:mt-[4%] md:w-[56%] text-center text-lg font-semibold text-gray-600">
          Discover the unique journeys of our interns as they share their experiences
 of personal and professional growth at DOC-Q. From overcoming challenges 
to driving innovative projects, get inspired by their stories of 
transformation and success.
          </p>
        </div>

        <div className="flex flex-col pr-[4%] pt-[4%] pl-[4%]">
          <ReviewsSection/>

        </div>

      </div>
    </div>
  );
};

export default Home;
