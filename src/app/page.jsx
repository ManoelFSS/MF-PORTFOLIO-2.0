"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
// components
import Btn from "../components/Btn/Btn";
// icons
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub   } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {

  const [displayText, setDisplayText] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayDev, setDisplayDev] = useState(""); 
  const speed = 100; // Velocidade em milissegundos

  useEffect(() => {

    let text01 = "OLÁ, SOU O";
    let text02 = "MANOEL FERNANDO :)";
    let text03 = "DESENVOLVEDOR FRONT-END";

    const textcurrent = (name, setDisplay) => {
      let index = 0;

      const interval = setInterval(() => {
        if (index <= name.length) {
          setDisplay((prev) => name.slice(0, index + 1)); // Usa `slice` para evitar erros de estado
          index++;
        } else {
          clearInterval(interval);
          index = 0;
        }
      }, speed);
  
      return () => clearInterval(interval);
    }

    setTimeout(() => {
      textcurrent(text01, setDisplayText);
    }, 500);
    

    setTimeout(() => {
      textcurrent(text02, setDisplayName);
    }, 2300);

    setTimeout(() => {
      textcurrent(text03, setDisplayDev);
    }, 5000);
    
  

  },[]);



  return (
    <search className=" h-[calc(100svh-11svh)] bg-[var(--background)] flex items-center  flex-wrap-reverse justify-around   tracking-[0.1rem] gap-[2vh]  " >
      <div className='w-[65vh] sm:w-[60vh] md:w-[65vh]'>
        <div className='h-[20vh]  md:h-[28vh] pl-5 sm:pl-0 md:pl-4 '>
          <p className="text-[var(--text) font-extrabold] text-[3vh] sm:text-[3.5vh] md:text-[5vh] ">{displayText}</p>
          <h2 className="text-[var(--text) font-extrabold] text-[3.4vh] sm:text-[4.2vh] md:text-[5.2vh] text-[var(--text-color-primary)] font-extrabold   ">{displayName}</h2>
          <p className="text-[var(--text) font-extrabold] text-[2.5vh] sm:text-[3.5vh] md:text-[4vh] ">{displayDev}</p>
        </div>
        <div>
          <div className=' flex justify-center gap-[2vh] pt-5'>
            <Btn text="DOWLOAD CV" />
            <Btn text="CONTATO" icon={<IoLogoWhatsapp className="text-[3vh]" />} />
          </div>
          <div className=' flex justify-center gap-[2vh] pt-4'>
            <FaInstagram className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaFacebook className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaLinkedin className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaGithub className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer'/>
          </div>
        </div>
      </div>
      <figure className='w-[35vh] sm:w-[40vh] md:w-[38vh]  h-[35vh] sm:h-[40vh] md:h-[38vh]  border-[2vh] border-[var(--text-color-primary)] rounded-full '>
        <Image 
          src="/manoel.jpg" 
          alt="Manoel Fernando" 
          width={800} 
          height={800} 
          style={{ borderRadius: '50%', objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </figure>
    </search>
  );
};

export default Home;