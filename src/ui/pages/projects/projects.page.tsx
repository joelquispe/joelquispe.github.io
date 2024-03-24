import { dataApps, dataWebs } from '../../../common/data/data';
import CardProjectComp from './card-project.comp';

import {
	ChakraProvider,
	Tab,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
	components: {
		Tabs: {
			baseStyle: {
				tab: {
					color: 'cyan.500',
					// bg: 'cyan.900',
					_selected: {
						color: 'cyan',
						// _hover: {
						//   bg: "cyan",
						// },
						// _active: {
						//   bg: "transparent",
						// },
					},
				},
			},
		},
	},
});

const ProjectsPage = () => {
	return (
		<ChakraProvider theme={theme}>
			<div className=" flex flex-col  h-full w-full gap-y-4 pt-5 lg:px-16 2xl:px-28">
				<Tabs size={'md'} variant="customColor" align="center">
					<TabList>
						<Tab>Mobile</Tab>
						<Tab>Web</Tab>
						<Tab>Desktop</Tab>
					</TabList>
					<TabIndicator borderBottom={'1px solid cyan'}></TabIndicator>
					<TabPanels>
						<TabPanel className="grid xl:grid-cols-2 gap-y-4 xl:gap-x-5 text-start">
							{dataApps.map((item) => (
								<CardProjectComp
									key={item.title}
									title={item.title}
									description={item.description}
									githubUrl={item.githubUrl}
									webUrl={item.webUrl}
									appStoreUrl={item.appStoreUrl}
									playStoreUrl={item.playStoreUrl}
									technologies={item.technologies}
								/>
							))}
						</TabPanel>
						<TabPanel className="grid xl:grid-cols-2 gap-y-4 xl:gap-x-5 text-start">
						{dataWebs.map((item) => (
								<CardProjectComp
									key={item.title}
									title={item.title}
									description={item.description}
									githubUrl={item.githubUrl}
									webUrl={item.webUrl}
									appStoreUrl={item.appStoreUrl}
									playStoreUrl={item.playStoreUrl}
									technologies={item.technologies}
								/>
							))}
						</TabPanel>
						<TabPanel className="grid  gap-y-4 xl:gap-x-5 text-start">
							<p className='text-2xl text-center animate-pulse '>En camino</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		</ChakraProvider>
	);
};
export default ProjectsPage;
