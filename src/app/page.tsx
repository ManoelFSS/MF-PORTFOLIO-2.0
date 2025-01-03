import Image from 'next/image';
// components
import Btn from "../components/Btn/Btn";
// icons
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub   } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import TextAnimation from '@/components/textAnimation/TextAnimation';

const Home = () => {

  return (
    <search className=" min-h-[calc(100svh-11svh)] p-3 bg-[var(--background)] flex items-center  flex-wrap-reverse justify-center  " >
      <div className=' flex-1 flex flex-col items-center   border-2 border-[var(--text-color-primary)] '>
        <TextAnimation  />
        <div className=' flex flex-col items-center border-2 border-[var(--text-color-primary)]'>
          <div className=' flex  gap-[4vh] pt-2  '>
            <Btn text="DOWLOAD CV" />
            <Btn text="CONTATO" icon={<IoLogoWhatsapp className=' text-[4vh]' />} />
          </div>
          <div className=' flex  justify-center  gap-[3vh] pt-2 border-2 border-[var(--text-color-primary)] '>
            <FaInstagram className='text-[6vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaFacebook className='text-[6vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaLinkedin className='text-[6vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer' />
            <FaGithub className='text-[6vh] hover:text-[var(--text-color-primary)] transition-colors cursor-pointer'/>
          </div>
        </div>
      </div>
      <div className='flex-1 flex items-center pl-2 pr-2 justify-center border-2 border-[var(--text-color-primary)]'>
        <figure className='
            w-[45vh]
            h-[45vh]
            max-xl:w-[40vh]
            max-xl:h-[40vh]
            max-4xl:w-[36vh]
            max-4xl:h-[36vh]
            landscape:w-[65vh]
            landscape:h-[65vh]
            border-[1.4vh] 
            border-[var(--text-color-primary)] 
            rounded-full 
          '>
          <Image 
            src="/manoel.jpg" 
            alt="Manoel Fernando" 
            width={500} 
            height={500} 
            style={{ borderRadius: '50%', objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </figure>
      </div>
    </search>
  );
};

export default Home;
