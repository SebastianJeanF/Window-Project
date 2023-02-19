import FormModal from '../modals/FormModal';
import Form from '../modals/Modal';
import openModal from '../modals/Modal';
import Masthead from '../components/Masthead';

import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';
import React from 'react';
import { useRef, useState } from 'react';

function Contact() {
	const [open, setOpen] = useState(false);

	//   console.log("reloading");
	function openModal() {
		console.log('happened');
	}

	// const [, updateState] = React.useState();
	//  const forceUpdate = React.useCallback(() => updateState({}), []);

	return (
		<>
			<Masthead img={img1} title={'Contact Us'}></Masthead>
			<section className='py-5'>
				<div className='container pb-5 mb-5 flex justify-around'>
					<div>
						<h1 className='text-4xl font-medium text-center mb-4'>Contact Info</h1>
						<ul className='list-group list-group-flush lead'>
							<li className='text-2xl mb-2 list-group-item'>
								<span className='font-medium'>Email: </span>xxxx@gmail.com
							</li>
							<hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
							<li className='text-2xl mb-2 list-group-item'>
								<span className='font-medium'>Phone Number: </span>XXX-XXX-XXXX
							</li>
						</ul>
					</div>

					<div className=''>
						<div className='text-4xl font-medium text-center mb-4'>Contact Us</div>
						<button
							type='submit'
							class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							onClick={() => setOpen(true)}>
							Fill out Form
						</button>
					</div>
				</div>
			</section>

			<Form open={open} setOpen={setOpen}></Form>
		</>
	);
}

export default Contact;
