import { ITec } from "./tec.interface";

export interface IProject {
	title: string;
	description: string;
	projectUrl?: string;
	githubUrl?: string;
	webUrl?: string;
	playStoreUrl?: string;
	appStoreUrl?: string;
	technologies: ITec[];
}
