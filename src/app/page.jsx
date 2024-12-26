
import Image from 'next/image';
// components
import Btn from "../components/Btn/Btn";
// icons
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub   } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  return (
    <search className=" h-[calc(100vh-11vh)] bg-[var(--background)] flex items-center  flex-wrap-reverse justify-around pl-4 pr-4 tracking-[0.1rem] gap-[2vh]  " >
      <div>
        <p className="text-[var(--text) font-extrabold] text-[2.5vh] sm:text-[3.5vh] md:text-[5vh] ">OLÁ, SOU O</p>
        <h2 className="text-[var(--text) font-extrabold] text-[4vh] sm:text-[4.5vh] md:text-[7vh] text-[var(--text-color-primary)] font-extrabold ">MANOEL FERNANDO :)</h2>
        <p className="text-[var(--text) font-extrabold] text-[2.2vh] sm:text-[3.5vh] md:text-[5vh] ">DESENVOLVEDOR FRONT-END</p>
        <div className=' flex justify-center gap-[2vh] pt-5'>
          <Btn text="DOWLOAD CV" />
          <Btn text="CONTATO" icon={<IoLogoWhatsapp className="text-[4vh]" />} />
        </div>
        <div className=' flex justify-center gap-[2vh] pt-4'>
          <FaInstagram className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
          <FaFacebook className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
          <FaLinkedin className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
          <FaGithub className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer'/>
        </div>
      </div>
      <figure className='w-[40vh] sm:w-[45vh] md:w-[50vh]  h-[40vh] sm:h-[45vh] md:h-[50vh]  border-[2vh] border-[var(--text-color-primary)] rounded-full '>
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