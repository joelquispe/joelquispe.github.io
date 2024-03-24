import {
	BiLogoAngular,
	BiLogoFlutter,
	BiLogoJavascript,
	BiLogoPostgresql,
	BiLogoReact,
	BiLogoTypescript,
} from 'react-icons/bi';
import { FaAws, FaSwift } from 'react-icons/fa';
import {
	SiDart,
	SiDocker,
	SiFigma,
	SiFirebase,
	SiKotlin,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiPhp,
	SiSupabase,
	SiTailwindcss,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const TechnologiesComp = () => {
	return (
		<div className="p-8  rounded-xl flex flex-wrap gap-x-4 gap-y-8 lg:gap-10 justify-center  ">
			
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3 ">
				<BiLogoJavascript className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Javascript</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<BiLogoTypescript className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Typescript</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<BiLogoFlutter className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Flutter</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<FaSwift className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Swift</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<BiLogoAngular className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Angular</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<BiLogoReact className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">React</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiDart className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Dart</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiPhp className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Php</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiNestjs className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Nestjs</p>
			</div>

			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiFirebase className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Firebase</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiSupabase className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Supabase</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiMysql className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Mysql</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<BiLogoPostgresql className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">PostgreSql</p>
			</div>

			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiFigma className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Figma</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiKotlin className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Kotlin</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<TbBrandReactNative className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">React Native</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<FaAws className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">AWS</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiDocker className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Docker</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiTailwindcss className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">Tailwind</p>
			</div>
			<div className="py-3 px-4 bg-primary rounded-lg flex items-center gap-x-3">
				<SiMongodb className="text-cyan-400 text-3xl" />
				<p className="font-semibold text-text_cyan">MongoDB</p>
			</div>
		</div>
	);
};
export default TechnologiesComp;
