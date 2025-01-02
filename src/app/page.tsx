import Image from 'next/image';
// components
import Btn from "../components/Btn/Btn";
// icons
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub   } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import TextAnimation from '@/components/textAnimation/TextAnimation';

const Home = () => {

  return (
    <search className=" min-h-[calc(100svh-11svh)] pt-4 pb-4 bg-[var(--background)] flex items-center  flex-wrap-reverse justify-center tracking-[0.1rem] gap-[2vw] pl-2 pr-2 " >
      <div className=' flex flex-col  items-center  p-5 rounded  1xl:w-full 4xl:w-[40vw]'>
        <TextAnimation  />
        <div className=' flex flex-col 1xl:w-full  4xl:w-[40vw] items-center  p-5 rounded'>
          <div className=' flex  gap-[1vh] '>
            <Btn text="DOWLOAD CV" />
            <Btn text="CONTATO" icon={<IoLogoWhatsapp className="text-[3vh]" />} />
          </div>
          <div className=' flex  justify-center  gap-[2vh] pt-4'>
            <FaInstagram className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaFacebook className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaLinkedin className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaGithub className='text-[5vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer'/>
          </div>
        </div>
      </div>

      <figure className='
          1xl:w-[35vh] 1xl:h-[35vh]
          4xl:w-[50vh] 4xl:h-[50vh]
          border-[1.4vh] 
          border-[var(--text-color-primary)] 
          rounded-full 
        '>
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
