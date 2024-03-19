import { createRef } from 'react';
import './App.css';
import { FaGithub, FaGitlab } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import DrawerComp from './ui/components/drawer.comp';
function App() {
	const refDrawer = createRef<HTMLDivElement>();
	const onDrawer = () => {
		// console.log(refDrawer.current);
		// refDrawer.current?.classList.toggle('scale-0');
	};
	return (
		<div className="min-h-screen w-screen  bg-background">
			{/* <div
				ref={refDrawer}
				className="absolute transition-all duration-500 delay-75 ease-in-out min-h-screen w-screen scale-0
				flex justify-center items-center
				"
			>
				<div className=" grid gap-3">
					<p className="text-2xl font-semibold text-white text-center">Home</p>
					<p className="text-2xl font-semibold text-white text-center">
						Proyects
					</p>
					<p className="text-2xl font-semibold text-white text-center">
						Contact
					</p>
					<p className="text-2xl font-semibold text-white text-center">About</p>
				</div>
			</div> */}

			<div id="navbar" className="absolute text-2xl top-3 left-3 flex gap-x-4">
				<div className="text-white"></div>
				<div className="text-white">
					<FaGithub />
				</div>
				<div className="text-white">
					<FaGitlab />
				</div>
			</div>
			{/* <div
				id="footer"
				className="absolute bottom-0 border-t border-gray-400 w-screen px-2 py-3 flex justify-around bg-black"
			>
				<div className="w-min">
					<IoHome className="text-white text-xl m-auto mb-1" />
					<p className="text-white text-md">Home</p>
				</div>
				<div className="w-min">
					<MdWebAsset className="text-white text-xl m-auto mb-1" />
					<p className="text-white text-md">Web</p>
				</div>
				<div className="w-min">
					<FaMobileAlt className="text-white text-xl m-auto mb-1" />
					<p className="text-white text-md">Mobile</p>
				</div>
				<div className="w-min  focus:transition-all ease-out focus:duration-75">
					<MdOutlineWorkHistory className="text-white text-xl m-auto mb-1" />
					<p className="text-white text-md">Experience</p>
				</div>
			</div> */}
			{/* <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Joel Alexander Sosaya Quispe - Desarrollador Full Stack",
        ]}
        wrapper="span"
        speed={50}
        className="text-white "
        style={{ fontSize: "2em", display: "inline-block" }}
        cursor={false}
        repeat={Infinity}
      /> */}
		</div>
	);
}

export default App;
