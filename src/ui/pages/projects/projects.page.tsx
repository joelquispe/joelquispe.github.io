import CardProjectComp from './card-project.comp';
import { MdWeb } from 'react-icons/md';
import { useState } from 'react';
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
	const [device, setDevice] = useState('Mobile');
	return (
		<ChakraProvider theme={theme}>
			<div className=" flex flex-col  h-full w-full gap-y-4 pt-5">
				<Tabs  size={'md'} variant="customColor" align="center">
					<TabList  > 
						<Tab >Mobile</Tab>
						<Tab>Web</Tab>
						<Tab>Desktop</Tab>
					</TabList>
				<TabIndicator
				borderBottom={"1px solid cyan"}
				></TabIndicator>
					<TabPanels>
						<TabPanel className="flex flex-col gap-y-3 text-start">
							<CardProjectComp title="My app" />
							<CardProjectComp title="My app" />
							<CardProjectComp title="My app" />
							<CardProjectComp title="My app" />
						</TabPanel>
						<TabPanel className="flex flex-col gap-y-3 text-start">
							<CardProjectComp title="Web" />
							<CardProjectComp title="Web app" />
							<CardProjectComp title="My app" />
							<CardProjectComp title="My app" />
						</TabPanel>
						<TabPanel>
							<p>three!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		</ChakraProvider>
	);
};
export default ProjectsPage;
