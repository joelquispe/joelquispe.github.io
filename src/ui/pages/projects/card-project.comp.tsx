import { useState } from 'react';
import { FaAppStoreIos, FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { ITec } from '../../../common/interfaces/tec.interface';
import { MdWeb } from 'react-icons/md';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { GrGallery } from "react-icons/gr";
import { RiCloseCircleFill } from 'react-icons/ri';
interface IProps {
	title: string;
	description: string;
	projectUrl?: string;
	githubUrl?: string;
	playStoreUrl?: string;
	appStoreUrl?: string;
	webUrl?: string;
	technologies: ITec[];
	images?: string[];
}
const CardProjectComp = (props: IProps) => {
	const [isBlur, setIsBlur] = useState(false);
	const [isShowGallery, setIsShowGallery] = useState(false);
	return (
		<>
			<div
				className={` group cursor-pointer relative w-full flex-1 p-6 transition-all duration-500  ease-in-out ${
					isBlur ? '' : 'hover:bg-gray-900 '
				}`}
			>
				<div
					className={`z-50  absolute left-1/2 transform -translate-x-1/2 transition-all duration-200 ease-in-out delay-100 w-full ${
						isShowGallery ? 'scale-105' : 'scale-0'
					}`}
				>
					<RiCloseCircleFill
						onClick={() => {
							setIsShowGallery(false);
						}}
						className="text-4xl text-white  mx-auto mb-3 cursor-pointer"
					/>
					<div className="flex justify-center gap-x-2  ">
						{props.images != null &&
							props.images.map((item) => {
								return (
									<img
									key={item}
										className={` ${item.includes('web') ? 'h-[200px] lg:h-[250px] xl:h-[270px]' : 'h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]'}`}
										src={item}
										alt=""
									/>
								);
							})}
					</div>
				</div>
				<div className="absolute bottom-0 left-0 h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-sky-950 z-40"></div>
				<div className="absolute bottom-0 left-0 h-20 w-0.5 bg-gradient-to-b from-sky-950 to-cyan-400 "></div>

				<div
					className={`flex  flex-wrap w-full  justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2 lg:gap-4 ${
						isBlur ? 'z-40' : ''
					}`}
				>
					{props.githubUrl != null && (
						<a
							href={props.githubUrl}
							onClick={() => setIsBlur(!isBlur)}
							target="_blank"
							className={` flex transition-all duration-500 delay-75 ease-in-out items-center px-4 py-2 lg:py-3 h-8 text-white bg-slate-900 rounded-md text-sm ${
								isBlur ? 'scale-105' : 'scale-0'
							}`}
						>
							<div className="xl:text-xl">
								<FaGithub />
							</div>
							<p className="pl-3 xl:text-lg">Github</p>
						</a>
					)}
					{props.webUrl != null && (
						<a
							href={props.webUrl}
							onClick={() => setIsBlur(!isBlur)}
							target="_blank"
							className={` flex transition-all duration-500 delay-75 ease-in-out items-center px-4 py-2 lg:py-3  h-8 text-white bg-slate-900 rounded-md text-sm  ${
								isBlur ? 'scale-105' : 'scale-0 '
							}`}
						>
							<MdWeb className="xl:text-xl" />
							<p className="pl-3 xl:text-lg">Web</p>
						</a>
					)}
					{props.playStoreUrl != null && (
						<a
							href={props.playStoreUrl}
							target="_blank"
							onClick={() => setIsBlur(!isBlur)}
							className={` flex transition-all duration-500 delay-75 ease-in-out items-center px-4 py-2 lg:py-3 h-8 text-white bg-slate-900 rounded-md text-sm ${
								isBlur ? 'scale-105' : 'scale-0 '
							}`}
						>
							<IoLogoGooglePlaystore className="xl:text-xl" />
							<p className="pl-3 xl:text-lg">Play Store</p>
						</a>
					)}
					{props.appStoreUrl != null && (
						<a
							href={props.appStoreUrl}
							target="_blank"
							onClick={() => setIsBlur(!isBlur)}
							className={` flex transition-all duration-500 delay-75 ease-in-out items-center px-4 py-3 h-8  text-white bg-slate-900 rounded-md text-sm ${
								isBlur ? 'scale-105' : 'scale-0 '
							}`}
						>
							<FaAppStoreIos className="xl:text-xl" />
							<p className="pl-3 xl:text-lg">App Store</p>
						</a>
					)}
					{props.images != null && (
						<div
							onClick={() => setIsShowGallery(!isShowGallery)}
							className={` flex transition-all duration-500 delay-75 ease-in-out items-center px-4 py-3 h-8 text-white bg-slate-900 rounded-md text-sm ${
								isBlur ? 'scale-105' : 'scale-0 '
							}`}
						>
							<GrGallery className="xl:text-xl" />
							<p className="pl-3 xl:text-lg">Fotos</p>
						</div>
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
						{props.description}
					</p>
					<div className="flex flex-wrap gap-4 items-center">
						{props.technologies.map((tech) => (
							<div
								key={tech.title}
								className="text-text_cyan text-lg xl:text-2xl"
							>
								{tech.icon}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardProjectComp;
