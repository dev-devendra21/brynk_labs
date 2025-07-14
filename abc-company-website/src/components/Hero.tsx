import HeroRightImg from "../assets/img/hero_right.png";
import HeroLeftImg from "../assets/img/hero_left.png";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
const Hero = () => {
  const [title, setTitle] = useState("Main Heading");

  const socket = io("http://localhost:4000/");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });

    socket.on("content", (data) => {
      setTitle(data.title);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }, [socket]);

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`${baseUrl}/api/v1/content`);
        const { data } = await response.json();
        setTitle(data.title);
      } catch (error) {
        console.error("Error fetching title:", error);
      }
    };

    fetchTitle();
  }, []);

  return (
    <div className="bg-[linear-gradient(to_right,#ffffff,#FFF7EC)] flex h-screen">
      <section className="w-2/3 flex  relative">
        <div>
          <img
            src={HeroLeftImg}
            alt=""
            className="w-[110px] object-cover absolute left-0 top-0"
          />
        </div>
        <div className="absolute left-[13%] top-[10%]">
          <h1 className=" text-2xl md:text-5xl font-semibold font-['Inter'] ">
            {title}
          </h1>
          <p className="text-sm md:text-lg font-['Inter'] my-5  text-[#425366]">
            Powerful AI solutions that go beyond mere data sorting and
            exploration. Use our array of AI enabled solutions that understand
            your business and recommend the optimal way forward.
          </p>
          <button className="bg-[#FFBD59] font-semibold text-sm py-2 px-4 rounded shadow-[1px_14px_0px_rgba(0, 0, 0, 0.12)]">
            Get Started
          </button>
        </div>
      </section>
      <section
        className={`flex items-center justify-center h-full w-1/3 md:bg-cover md:bg-center`}
        style={{
          backgroundImage: `url(${HeroRightImg})`,
          backgroundRepeat: "no-repeat",
        }}
      ></section>
    </div>
  );
};

export default Hero;
