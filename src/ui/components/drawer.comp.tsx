import { ForwardedRef, forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ChildProps {
	onCloseDrawer: () => void;
}

const DrawerComp = forwardRef(
	(props: ChildProps, ref: ForwardedRef<HTMLDivElement>) => {
		const location = useLocation();
		const { pathname } = location;
		return (
			<div
				ref={ref}
				onClick={() => props.onCloseDrawer()}
				className="fixed transition-all duration-500 delay-75  ease-in-out  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   scale-0
				flex justify-center items-center m-auto z-50
				"
			>
				<div className=" grid gap-3">
					<Link
						to={'/'}
						style={{ fontFamily: 'Raleway_Regular' }}
						className={`text-2xl xl:text-3xl font-semibold text-white text-center cursor-pointer p-2 ${
							pathname === '/' ? 'border-b ' : ''
						} `}
					>
						Home
					</Link>
					<Link
						to={'/projects'}
						style={{ fontFamily: 'Raleway_Regular' }}
						className={`text-2xl  xl:text-3xl font-semibold text-white text-center cursor-pointer p-2 ${
							pathname === '/projects' ? 'border-b ' : ''
						}`}
					>
						Projects
					</Link>
					<Link
						to={'/technologies'}
						style={{ fontFamily: 'Raleway_Regular' }}
						className={`xl:hidden text-2xl xl:text-3xl font-semibold text-white text-center cursor-pointer p-2 ${
							pathname === '/technologies' ? 'border-b ' : ''
						}`}
					>
						Technologies
					</Link>
				</div>
			</div>
		);
	}
);

export default DrawerComp;
