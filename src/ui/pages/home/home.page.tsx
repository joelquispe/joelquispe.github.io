import { MdEmail, MdWhatsapp } from 'react-icons/md';

import TechnologiesComp from '../../components/technologies.comp';

const HomePage = () => {
	return (
		<div className="grid  2xl:grid-cols-[42%_1fr] items-center gap-x-8 mx-auto 2xl:mx-0  justify-center  w-10/12  sm:w-full md:px-20 lg:px-40">
			<div className="">
				<img
					src={'/img/profile.jpg'}
					alt=""
					className="object-cover flex items-center rounded-full h-36 w-36 lg:h-60 lg:w-60 object-top mx-auto 2xl:mx-0 mb-8"
				/>

				<h1 className="text-white text-3xl sm:text-4xl lg:text-5xl text-center lg:text-start mb-3 lg:my-5">
					Developer Full-Stack
				</h1>
				<p className="text-gray-300 text-base sm:text-base lg:text-lg text-center lg:text-start  ">
					Nací el 22 de noviembre del año 2000, me gusta hacer deporte pero me
					apasionar crear software ya que disfruto de esto y me encanta aprender
					nuevas tecnologías de forma autodidacta así como también de los que
					saber porque nunca se termina de aprender todo.
				</p>
				<div className='w-full h-[2px] bg-gray-200 opacity-20 my-4 md:my-6'></div>
				<div className="">
					<p className="text-gray-200 text-2xl lg:text-3xl mb-2">Contact</p>
					<div className="cursor-pointer group hover:scale-105 flex hover:border-b items-center gap-x-3 py-1 transition-all  duration-100 ease-in">
						<MdEmail className="text-white text-2xl" />
						<a href='mailto:joelsosayaquispe@gmail.com?subject=ConsultaAsunto del correo&body=' className="text-lg  text-white">joelsosayaquispe@gmail.com</a>
					</div>
					<div className="cursor-pointer group hover:scale-105 flex  hover:border-b items-center gap-x-3 py-1 transition-all  duration-100 ease-in">
						<MdWhatsapp className="text-white text-2xl" />
						<a href='https://wa.link/mk36b9' className="text-lg text-white ">+51 999 999 999</a>
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
