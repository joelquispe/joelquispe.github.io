import { MdEmail } from 'react-icons/md';

const ContactPage = () => {
	return (
		<div className='group:hover:blur-md'>
			
			<div className="cursor-pointer group hover:scale-105 flex  hover:border-b items-center gap-x-3 py-2 transition-all  duration-500 ease-in-out">
				<MdEmail className='text-white text-2xl'/>
        <p className='text-lg font-medium'>joelsosayaquispe@gmail.com</p>
			</div>
      <div className="group hover:scale-105 flex  hover:border-b items-center gap-x-3 py-2 transition-all  duration-500 ease-in-out">
				<MdEmail className='text-white text-2xl'/>
        <p className='text-lg font-medium'>+51 999 999 999</p>
			</div>
		</div>
	);
};
export default ContactPage;
