import {
	BiLogoAngular,
	BiLogoFlutter,
	BiLogoJavascript,
	BiLogoReact,
	BiLogoTypescript,
} from 'react-icons/bi';
import { FaSwift } from 'react-icons/fa';
import { MdEmail, MdWhatsapp } from 'react-icons/md';

const HomePage = () => {
	return (
		<div className="grid lg:grid-cols-[60%_1fr] 2xl:grid-cols-[42%_1fr] items-center gap-3 mx-auto lg:mx-0  justify-center  w-10/12  sm:w-full lg:px-40">
			<div className="">
				<img
					src={'/img/profile.jpg'}
					alt=""
					className="object-cover flex items-center rounded-full h-28 w-28 lg:h-60 lg:w-60 object-top mx-auto lg:mx-0 mb-8"
				/>

				<h1 className="text-white text-3xl sm:text-4xl lg:text-5xl text-center lg:text-start mb-2 lg:my-5">
					Developer Full-Stack
				</h1>
				<p className="text-gray-300 text-sm sm:text-base lg:text-lg text-center lg:text-start ">
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
			<div className="hidden lg:flex lg:flex-wrap gap-5   w-full h-full  items-center justify-center">
				<div className="flex flex-wrap gap-4 justify-center">
					<div className='p-5 bg-slate-900 rounded-xl'>
						<p className="text-xl font-semibold mb-3">Languages programming</p>
						<div className="flex flex-wrap gap-x-4">
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoJavascript className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Javascript</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoTypescript className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Typescript</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoFlutter className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Flutter</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<FaSwift className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Swift</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoAngular className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Angular</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoReact className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">React</p>
							</div>
						</div>
					</div>
					<div className='p-5 bg-slate-900 rounded-xl'>
						<p className="text-xl font-semibold mb-3">Languages programming</p>
						<div className="flex flex-wrap gap-x-4">
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoJavascript className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Javascript</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoTypescript className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Typescript</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoFlutter className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Flutter</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<FaSwift className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Swift</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoAngular className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Angular</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoReact className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">React</p>
							</div>
						</div>
					</div>
					<div className='p-5 bg-slate-900 rounded-xl'>
						<p className="text-xl font-semibold mb-3">Languages programming</p>
						<div className="flex flex-wrap gap-x-4">
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoJavascript className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Javascript</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoTypescript className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Typescript</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoFlutter className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Flutter</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<FaSwift className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Swift</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoAngular className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">Angular</p>
							</div>
							<div className="py-2 px-3.5 bg-primary rounded-lg flex items-center gap-x-3">
								<BiLogoReact className="text-cyan-400 text-2xl" />
								<p className="font-semibold text-text_cyan">React</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
