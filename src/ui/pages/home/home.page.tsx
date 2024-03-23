import {
	BiLogoAngular,
	BiLogoFlutter,
	BiLogoJavascript,
	BiLogoPhp,
	BiLogoPostgresql,
	BiLogoReact,
	BiLogoTypescript,
} from 'react-icons/bi';
import { FaAws, FaPhp, FaSwift } from 'react-icons/fa';
import { MdEmail, MdWhatsapp } from 'react-icons/md';
import { SiDart, SiDocker, SiFigma, SiFirebase, SiKotlin, SiMysql, SiNestjs, SiPhp, SiSupabase, SiTailwindcss } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import TechnologiesComp from '../../components/technologies.comp';

const HomePage = () => {
	return (
		<div className="grid  2xl:grid-cols-[42%_1fr] items-center gap-x-8 mx-auto 2xl:mx-0  justify-center  w-10/12  sm:w-full lg:px-40">
			<div className="">
				<img
					src={'/img/profile.jpg'}
					alt=""
					className="object-cover flex items-center rounded-full h-36 w-36 lg:h-60 lg:w-60 object-top mx-auto 2xl:mx-0 mb-8"
				/>

				<h1 className="text-white text-4xl sm:text-4xl lg:text-5xl text-center lg:text-start mb-3 lg:my-5">
					Developer Full-Stack
				</h1>
				<p className="text-gray-300 text-base sm:text-base lg:text-lg text-center lg:text-start  mb-5">
					Nací el 22 de noviembre del año 2000, me gusta hacer deporte pero me
					apasionar crear software ya que disfruto de esto y me encanta aprender
					nuevas tecnologías de forma autodidacta así como también de los que
					saber porque nunca se termina de aprender todo.
				</p>
				<div className="mt-3">
					<p className="text-gray-200 text-2xl lg:text-3xl mb-2">Contact</p>
					<div className="cursor-pointer group hover:scale-105 flex hover:border-b items-center gap-x-3 py-1 transition-all  duration-100 ease-in">
						<MdEmail className="text-white text-2xl" />
						<p className="text-lg font-medium">joelsosayaquispe@gmail.com</p>
					</div>
					<div className="cursor-pointer group hover:scale-105 flex  hover:border-b items-center gap-x-3 py-1 transition-all  duration-100 ease-in">
						<MdWhatsapp className="text-white text-2xl" />
						<p className="text-lg font-medium">+51 999 999 999</p>
					</div>
				</div>
			</div>
			<div className="hidden xl:flex lg:flex-wrap gap-5   w-full h-full  items-center justify-center relative">
			
					<TechnologiesComp />
					
					
				
			</div>
		</div>
	);
};
export default HomePage;
