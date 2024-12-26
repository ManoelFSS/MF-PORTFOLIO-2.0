"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {

    const pathname = usePathname();
    const slug = pathname.split('/').pop();

    console.log(slug);

    return (
        <nav className='w-full justify-center  pl-5 hidden '>
            <ul className='flex  gap-[3vh] font-bold text-[3vh] text-[var(--text)]  '>
                <Link className={` ${pathname === "/" ? "active" : ""} hover:text-[var(--text-color-primary)] transition-colors `} href="/"><li>Portfólio</li></Link>
                <Link className={` ${pathname === "/views/Projects" || pathname === `/views/Projects/${slug}`  ? "active" : ""}  hover:text-[var(--text-color-primary)]  transition-colors`} href="/views/Projects"><li>Projetos</li></Link>
                <Link className={` ${pathname === "/views/Formations" ? "active" : ""}  hover:text-[var(--text-color-primary)]  transition-colors`} href="/views/Formations"><li>Formações</li></Link>
            </ul>
        </nav>
    );
}

export default Navigation