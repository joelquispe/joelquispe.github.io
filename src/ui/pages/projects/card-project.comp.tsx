import { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { ITec } from '../../../common/interfaces/tec.interface';

interface IProps {
	title: string;
	description: string;
	projectUrl?: string;
	githubUrl?: string;
	technologies: ITec[];
}
const CardProjectComp = (props: IProps) => {
	const [isBlur, setIsBlur] = useState(false);
	return (
		<div
			className={`group cursor-pointer relative w-full flex-1 p-6 transition-all duration-500  ease-in-out ${
				isBlur ? '' : 'hover:bg-gray-900 '
			}`}
		>
			<div className="absolute bottom-0 left-0 h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-sky-950 z-40"></div>
			<div className="absolute bottom-0 left-0 h-20 w-0.5 bg-gradient-to-b from-sky-950 to-cyan-400 "></div>

			<div
				className={`flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 ${
					isBlur ? 'z-50' : ''
				}`}
			>
				{props.githubUrl != null && (
					<a
						href={props.githubUrl}
						onClick={() => setIsBlur(!isBlur)}
						target="_blank"
						className={` flex transition-all duration-500 delay-75 ease-in-out items-center px-4 py-3   text-white bg-slate-900 rounded-md text-sm ${
							isBlur ? 'scale-105' : 'scale-0'
						}`}
					>
						<div>
							<FaGithub />
						</div>
						<p className="pl-3">Github</p>
					</a>
				)}
				{props.projectUrl != null && (
					<a
						href={props.projectUrl}
						onClick={() => setIsBlur(!isBlur)}
						className={` flex transition-all duration-500 delay-75 ease-in-out items-center px-4 py-3   text-white bg-slate-900 rounded-md text-sm ${
							isBlur ? 'scale-105' : 'scale-0 '
						}`}
					>
						<FaLink />
						<p className="pl-3">Ver proyecto</p>
					</a>
				)}
			</div>
			<div
				onClick={() => setIsBlur(!isBlur)}
				className={`transition-all duration-500  ease-in-out ${
					isBlur ? 'blur-lg' : 'blur-none'
				}`}
			>
				<div className=" flex flex-wrap  gap-y-3 gap-x-4  items-center   w-full  mb-3 hover:scale-x-[1.05] transition-all duration-500 delay-75 ease-in-out">
					<p className=" group-hover:text-text_cyan text-xl lg:text-2xl font-semibold transition-all duration-500  ease-in-out  ">
						{props.title}
					</p>
					<FaArrowUpRightFromSquare className=" text-white text-start group-hover:scale-110 group-hover:text-text_cyan transition-all duration-500  ease-in-out" />
				</div>

				<p className="text-sm lg:text-base mb-4 text-gray-400">
					My app is best app developer flutter in nestjs in backent with 6
					months of time in lives of tiktok, youtube, etc
				</p>
				<div className="flex flex-wrap gap-4 items-center">
					{/* {props.technologies.map((tech)=> 	<div key={tech.title} className=" px-2.5 py-1.5 flex justify-center items-center bg-sky-950  rounded-lg">
						<p className="text-xs lg:text-sm font-semibold text-text_cyan">
							{tech.title}
						</p>
					</div>)} */}
					{props.technologies.map((tech) => (
						<div
							key={tech.title}
							className="text-text_cyan text-lg xl:text-2xl"
						>
							{tech.icon}
						</div>
					))}
					{/* <FaSwift className='text-text_cyan text-2xl'/>
					<FaJava className='text-text_cyan text-2xl'/>
					<FaJs className='text-text_cyan text-2xl'/>
					<FaPython className='text-text_cyan text-2xl'/> */}
				</div>
			</div>
		</div>
	);
};

export default CardProjectComp;
