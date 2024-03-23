import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './ui/pages/home/home.page.tsx';
import ProjectsPage from './ui/pages/projects/projects.page.tsx';
import ContactPage from './ui/pages/contact/contact.page.tsx';
import MainLayout from './ui/layouts/main.layout.tsx';
import TechnologiesPage from './ui/pages/technologies/technologies.page.tsx';

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/projects',
				element: <ProjectsPage />,
			},
			{
				path: '/Technologies',
				element: <TechnologiesPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
