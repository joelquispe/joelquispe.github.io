import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface IProps{
	title:string;
}
const CardProjectComp = (props:IProps) => {
	return (
		<div className="group cursor-pointer relative w-full flex-1 p-5 hover:bg-gray-900 transition-all duration-500  ease-in-out">
			<div className="absolute bottom-0 left-0 h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-sky-950 z-40"></div>
			<div className="absolute bottom-0 left-0 h-20 w-0.5 bg-gradient-to-b from-sky-950 to-cyan-400 "></div>
			<div className="  grid grid-cols-2 grid-flow-dense   gap-x-3 items-center justify-items-start w-fit mb-3 hover:scale-x-[1.05] transition-all duration-500 delay-75 ease-in-out">
				<p className="group-hover:text-text_cyan text-xl font-semibold transition-all duration-500  ease-in-out  ">{props.title}</p>
				<FaArrowUpRightFromSquare className="text-white text-start group-hover:scale-110 group-hover:text-text_cyan transition-all duration-500  ease-in-out" />
			</div>

			<p className="text-sm mb-2 text-gray-300">
				My app is best app developer flutter in nestjs in backent with 6 months
				of time in lives of tiktok, youtube, etc
			</p>
			<div className="flex flex-wrap gap-2">
				<div className=" px-2.5 py-1.5 flex justify-center items-center bg-sky-950  rounded-lg">
					<p className="text-xs font-semibold text-text_cyan">Javascript</p>
				</div>
				<div className=" px-2.5 py-1.5 flex justify-center items-center bg-sky-950  rounded-lg">
					<p className="text-xs font-semibold text-text_cyan">C#</p>
				</div>
				<div className=" px-2.5 py-1.5 flex justify-center items-center bg-sky-950  rounded-lg">
					<p className="text-xs font-semibold text-text_cyan">Flutter</p>
				</div>
			</div>
		</div>
	);
};

export default CardProjectComp;
