import { IProject } from '../interfaces/project.interface';
import {
	FaAws,
	FaBootstrap,
	FaJava,
	FaLaravel,
	FaNodeJs,
	FaSwift,
} from 'react-icons/fa';
import {
	SiAndroidstudio,
	SiDart,
	SiDocker,
	SiFigma,
	SiFirebase,
	SiKotlin,
	SiMysql,
	SiNestjs,
	SiPhp,
	SiSupabase,
	SiTailwindcss,
	SiXcode,
} from 'react-icons/si';
import {
	BiLogoAngular,
	BiLogoFlutter,
	BiLogoJavascript,
	BiLogoPostgresql,
	BiLogoReact,
	BiLogoSpringBoot,
	BiLogoTypescript,
} from 'react-icons/bi';
import { TbBrandReactNative } from 'react-icons/tb';
import { ITec } from '../interfaces/tec.interface';

export enum ETecs {
	flutter,
	dart,
	js,
	swift,
	angular,
	react,
	ts,
	postgresql,
	firebase,
	supabase,
	docker,
	figma,
	aws,
	reactNative,
	kotlin,
	mysql,
	nestjs,
	php,
	tailwind,
	bootstrap,
	java,
	springBoot,
	nodeJs,
	laravel,
	xcode,
	androidStudio,
}

export const dataTecs: Record<ETecs, ITec> = {
	[ETecs.xcode]: {
		icon: <SiXcode />,
		title: 'XCode',
	},
	[ETecs.androidStudio]: {
		icon: <SiAndroidstudio />,
		title: 'Android Studio',
	},
	[ETecs.js]: {
		icon: <BiLogoJavascript />,
		title: 'Javascript',
	},
	[ETecs.ts]: {
		icon: <BiLogoTypescript />,
		title: 'Typescript',
	},
	[ETecs.flutter]: {
		icon: <BiLogoFlutter />,
		title: 'Flutter',
	},
	[ETecs.swift]: {
		icon: <FaSwift />,
		title: 'Swift',
	},
	[ETecs.angular]: {
		icon: <BiLogoAngular />,
		title: 'Angular',
	},
	[ETecs.react]: {
		icon: <BiLogoReact />,
		title: 'React',
	},
	[ETecs.dart]: {
		icon: <SiDart />,
		title: 'Dart',
	},
	[ETecs.php]: {
		icon: <SiPhp />,
		title: 'PHP',
	},
	[ETecs.nestjs]: {
		icon: <SiNestjs />,
		title: 'NestJS',
	},
	[ETecs.firebase]: {
		icon: <SiFirebase />,
		title: 'Firebase',
	},
	[ETecs.supabase]: {
		icon: <SiSupabase />,
		title: 'Supabase',
	},
	[ETecs.mysql]: {
		icon: <SiMysql />,
		title: 'MySQL',
	},
	[ETecs.postgresql]: {
		icon: <BiLogoPostgresql />,
		title: 'PostgreSQL',
	},
	[ETecs.figma]: {
		icon: <SiFigma />,
		title: 'Figma',
	},
	[ETecs.kotlin]: {
		icon: <SiKotlin />,
		title: 'Kotlin',
	},
	[ETecs.reactNative]: {
		icon: <TbBrandReactNative />,
		title: 'React Native',
	},
	[ETecs.aws]: {
		icon: <FaAws />,
		title: 'AWS',
	},
	[ETecs.docker]: {
		icon: <SiDocker />,
		title: 'Docker',
	},
	[ETecs.tailwind]: {
		icon: <SiTailwindcss />,
		title: 'Tailwind',
	},
	[ETecs.java]: {
		icon: <FaJava />,
		title: 'Java',
	},
	[ETecs.springBoot]: {
		icon: <BiLogoSpringBoot />,
		title: 'Spring boot',
	},
	[ETecs.nodeJs]: {
		icon: <FaNodeJs />,
		title: 'NodeJS',
	},
	[ETecs.laravel]: {
		icon: <FaLaravel />,
		title: 'Laravel',
	},
	[ETecs.bootstrap]: {
		icon: <FaBootstrap />,
		title: 'Bootstrap',
	},
};

export const dataApps: IProject[] = [
	{
		title: 'Developers',
		description:
			'Aplicación móvil donde muestro los cursos y contenido que subo en youtube sobre programación u otros temas',
		playStoreUrl:
			'https://play.google.com/store/apps/details?id=com.joel.appdevelopers',

		githubUrl: 'https://github.com/joelquispe/Developers-App-Flutter.git',
		technologies: [dataTecs[ETecs.flutter], dataTecs[ETecs.dart]],
	},
	{
		title: 'Delivery box',
		description:
			'Calculo de paquete según su peso, altura etc. Consume un servicio donde te dan las paqueterías disponible para realizar el envío y la información de le da al dueño de la app.',
		playStoreUrl:
			'https://play.google.com/store/apps/details?id=com.paqueterias.deliverybox',

		technologies: [dataTecs[ETecs.flutter], dataTecs[ETecs.dart]],
		images: [
			'img/deliverybox/deliverybox-phone-1.png',
			'img/deliverybox/deliverybox-phone-2.png',
		],
	},
	{
		title: 'Shapp Rides',
		description:
			'Aplicación de delivery para los riders que reciben pedidos incluyendo las notificaciones que reciben y cuando cambia el estado del pedido así como también la actualización de sus datos personales.',
		playStoreUrl:
			'https://play.google.com/store/apps/details?id=com.shap.riders',

		technologies: [
			dataTecs[ETecs.flutter],
			dataTecs[ETecs.dart],
			dataTecs[ETecs.firebase],
		],
	},
	{
		title: 'Mi bodega',
		description:
			'Administra los productos de tu bodega o tienda el cual puedes guardarlo mediante su código de barras como identificador y realizar la búsqueda con eso mismo, puede ingresar y registrarse con una cuenta y recuperar sus contraseña en caso de olvidarla.',
		githubUrl: 'https://github.com/joelquispe/Store-Management-App-Flutter',

		technologies: [
			dataTecs[ETecs.flutter],
			dataTecs[ETecs.dart],
			dataTecs[ETecs.firebase],
		],
	},
	{
		title: 'To-Do List - Flutter ',
		description:
			'Administra tus tareas en una lista de tareas  que puedes agregar, borrar y editar. Incluso puede asignar la tarea a una usuario previamente registrado.',
		githubUrl: 'https://github.com/joelquispe/TodoList-App-Flutter.git',

		technologies: [dataTecs[ETecs.flutter], dataTecs[ETecs.dart]],
	},
	{
		title: 'To-Do List - React native ',
		description:
			'Administra tus tareas en una lista de tareas  que puedes agregar, borrar y editar.',
		githubUrl: 'https://github.com/joelquispe/TodoList-App-ReactNative.git',

		technologies: [dataTecs[ETecs.reactNative], dataTecs[ETecs.ts]],
	},
	{
		title: 'To-Do List - Swift ',
		description:
			'Administra tus tareas en una lista de tareas  que puedes agregar, borrar y editar.',
		githubUrl: 'https://github.com/joelquispe/TodoList-App-Swift',

		technologies: [dataTecs[ETecs.xcode], dataTecs[ETecs.swift]],
	},
	{
		title: 'Administración de usuarios- Compose',
		description:
			'Administra tus tareas en una lista de tareas  que puedes agregar, borrar y editar.',
		githubUrl: 'https://github.com/joelquispe/Users-Management-App-Kotlin.git',

		technologies: [dataTecs[ETecs.kotlin], dataTecs[ETecs.androidStudio]],
	},
	{
		title: 'GeoCerca - Flutter',
		description:
			'La aplicación detecta si el usuario se encuentra en el rango de 5km de la geocerca para administrar esa información como por ejemplo si puede marcar su asistencia solo cuando esta en el centro de trabajo.',
		githubUrl: 'https://github.com/joelquispe/Geocerca-App-Flutter.git',

		technologies: [dataTecs[ETecs.flutter], dataTecs[ETecs.dart]],
	},
	{
		title: 'Ecommerce Local',
		description:
			'Una aplicación con el flujo de un ecommerce local que puede seleccionar productos y agregarlo al carrito de comprar para realizar los pagos mediante yape, plin, transferencia el cual tiene que registrar una foto y se le envía al administrador de la tienda si en caso ya ha realizado el pago.',
		githubUrl:
			'https://github.com/joelquispe/Ecommerce-Directo-app-Flutter.git',

		technologies: [dataTecs[ETecs.flutter], dataTecs[ETecs.dart]],
	},
];

export const dataWebs: IProject[] = [
	{
		title: 'LoyaltyPerú',
		description:
			'Página donde se ofrece los servicios de la empresa e información de sus clientes y trayectoria que han tenido.',
		webUrl: 'https://www.loyaltyperu.com/',
		technologies: [
			dataTecs[ETecs.ts],
			dataTecs[ETecs.react],
			dataTecs[ETecs.tailwind],
		],
	},
	{
		title: 'Club de ganadores Dino',
		description:
			'Ofrece el canje de productos por puntos ganados con la tarjeta bonus para los clientes registrado y un panel para la administración de los productos, categorías y más.',
		webUrl: 'https://clubdeganadoresdino.com/',
		technologies: [
			dataTecs[ETecs.ts],
			dataTecs[ETecs.angular],
			dataTecs[ETecs.bootstrap],
		],
	},

	{
		title: 'Panel web - Angular',
		description:
			'Un panel web con login el cual hay un usuario por defecto que se puede ingresar y diferentes opciones para realizar operaciones de agregar, editar, eliminar y listar.',
		githubUrl: 'https://github.com/joelquispe/Models-Panel-web-Angular.git',

		technologies: [
			dataTecs[ETecs.ts],
			dataTecs[ETecs.angular],
			dataTecs[ETecs.firebase],
		],
	},
	{
		title: 'Motric',
		description:
			'Página para la venta de repuestos de moto con panel de administración e implementando  firebase como base de datos, autenticación y almacenamiento de fotos .',
		webUrl: 'https://joelquispe.github.io/YoeCode/',
		githubUrl: 'https://github.com/joelquispe/YoeCode',
		technologies: [
			dataTecs[ETecs.ts],
			dataTecs[ETecs.react],
			dataTecs[ETecs.tailwind],
		],
		images: ['img/motric/motric-web-1.png'],
	},
	{
		title: 'YoeCode',
		description:
			'En esta página se muestra las redes sociales y plataformas de un creador de contenido y un apartado donde se puede enviar un mensaje privado de whatsApp.',
		webUrl: 'https://joelquispe.github.io/YoeCode/',
		githubUrl: 'https://github.com/joelquispe/YoeCode',
		technologies: [
			dataTecs[ETecs.ts],
			dataTecs[ETecs.react],
			dataTecs[ETecs.tailwind],
		],
	},
	{
		title: 'Crud de productos - Laravel',
		description:
			'Una pequeña aplicación donde se puede registrar, editar, eliminar y listar productos que incluye también el guardado de la imagen del producto en la base de datos.',
		githubUrl:
			'https://github.com/joelquispe/Crud-de-productos-con-mysql-laravel.git',

		technologies: [
			dataTecs[ETecs.php],
			dataTecs[ETecs.laravel],
			dataTecs[ETecs.mysql],
		],
	},
	{
		title: 'Juego de abecedario',
		description:
			'Juego de acertar la letra del abecedario, con música y efectos de sonido al perder o ganar',
		githubUrl: 'https://github.com/joelquispe/Alphabet-Game-Web',
		webUrl: 'https://joelquispe.github.io/Alphabet-Game-Web/',
		technologies: [dataTecs[ETecs.js]],
	},
];

export const dataDesktops: IProject[] = [];
