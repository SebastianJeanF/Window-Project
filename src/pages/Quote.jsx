//import './App.css'
import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';
import img from '../assets/OIP.jpg';
// import { ReactComponent as Arch } from '../assets/windows/arch.svg';

import Radio from '../components/Radio';
import Masthead from '../components/Masthead';
import Image from '../components/SVGPicker';
import Three from './3D';

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/20/solid';
import { MinusIcon } from '@heroicons/react/20/solid';
import { useState, useContext } from 'react';
import { PriceContext } from '../context/Context';

const transitionAttributes = {
	enter: 'transition duration-100 ease-out',
	enterFrom: 'transform scale-95 opacity-0',
	enterTo: 'transform scale-100 opacity-100',
	leave: 'transition duration-75 ease-out',
	leaveFrom: 'transform scale-100 opacity-100',
	leaveTo: 'transform scale-95 opacity-0',
};

const plans = [
	{
		name: 'Brown',
		type: 'color',
		cpus: '',
		disk: '',
		price: 50,
	},
	{
		name: 'White',
		type: 'color',
		cpus: '',
		disk: '',
		price: 100,
	},
	{
		name: 'Black',
		type: 'color',
		cpus: '',
		disk: '',
		price: 150,
	},
];

const sizes = [
	{
		name: 'Large',
		type: 'size',
		cpus: '',
		disk: '',
		price: 2550,
	},
	{
		name: 'Medium',
		type: 'size',
		cpus: '',
		disk: '',
		price: 2100,
	},
	{
		name: 'Small',
		type: 'size',
		cpus: '',
		disk: '',
		price: 1000,
	},
];
const types = [
	{
		name: 'Square',
		type: 'frame',
		cpus: '',
		disk: '',
		price: 10,
	},
	{
		name: 'Rectangular',
		type: 'frame',
		cpus: '',
		disk: '',
		price: 20,
	},
	{
		name: 'Arch',
		type: 'frame',
		cpus: '',
		disk: '',
		price: 30,
	},
];
function Form() {
	return (
		<div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center'>
			<div className='container max-w-screen-lg mx-auto'>
				<div>
					<h2 className='font-semibold text-xl text-gray-600'>Quote Form</h2>
					<p className='text-gray-500 mb-6'>
						After finding the right window for you, fill out this form to be contacted
					</p>

					<div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
						<div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
							<div className='text-gray-600'>
								<p className='font-medium text-lg'>Personal Details</p>
								<p>Please fill out all the fields.</p>
							</div>

							<div className='lg:col-span-2'>
								<form
									action='
        '
									className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
									<div className='md:col-span-5'>
										<label for='full_name'>Full Name</label>
										<input
											type='text'
											name='full_name'
											id='full_name'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
										/>
									</div>

									<div className='md:col-span-5'>
										<label for='email'>Email Address</label>
										<input
											type='text'
											name='email'
											id='email'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder='email@domain.com'
										/>
									</div>

									<div className='md:col-span-3'>
										<label for='address'>Address / Street</label>
										<input
											type='text'
											name='address'
											id='address'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									<div className='md:col-span-2'>
										<label for='city'>City</label>
										<input
											type='text'
											name='city'
											id='city'
											className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									{/* <div className='md:col-span-2'>
										<label for='country'>Country / region</label>
										<div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
											<input
												name='country'
												id='country'
												placeholder='Country'
												className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
											/>
											<button
												tabindex='-1'
												className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'>
												<svg
													className='w-4 h-4 mx-2 fill-current'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'>
													<line x1='18' y1='6' x2='6' y2='18'></line>
													<line x1='6' y1='6' x2='18' y2='18'></line>
												</svg>
											</button>
											<button
												tabindex='-1'
												for='show_more'
												className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'>
												<svg
													className='w-4 h-4 mx-2 fill-current'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'>
													<polyline points='18 15 12 9 6 15'></polyline>
												</svg>
											</button>
										</div>
									</div> */}

									{/* <div className='md:col-span-2'>
										<label for='state'>State / province</label>
										<div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
											<input
												name='state'
												id='state'
												placeholder='State'
												className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
											/>
											<button
												tabindex='-1'
												className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'>
												<svg
													className='w-4 h-4 mx-2 fill-current'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'>
													<line x1='18' y1='6' x2='6' y2='18'></line>
													<line x1='6' y1='6' x2='18' y2='18'></line>
												</svg>
											</button>
											<button
												tabindex='-1'
												for='show_more'
												className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'>
												<svg
													className='w-4 h-4 mx-2 fill-current'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													stroke='currentColor'
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'>
													<polyline points='18 15 12 9 6 15'></polyline>
												</svg>
											</button>
										</div>
									</div> */}

									<div className='md:col-span-1'>
										<label for='zipcode'>Zip Code</label>
										<input
											type='text'
											name='zipcode'
											id='zipcode'
											className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									<div className='md:col-span-5'>
										<label for='formFile' className='form-label inline-block mb-2 text-gray-700'>
											Pictures related to Project
										</label>
										<input
											className='form-control block w-ful px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
											type='file'
											id='formFile'
										/>
									</div>
									<div className='md:col-span-5'>
										<label for='comment'>Comments about Project</label>
										<input
											type='text'
											name='comment'
											id='comment'
											className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
											placeholder=''
										/>
									</div>

									{/* <div className='md:col-span-5'>
										<div className='inline-flex items-center'>
											<input
												type='checkbox'
												name='billing_same'
												id='billing_same'
												className='form-checkbox'
											/>
											<label for='billing_same' className='ml-2'>
												My billing address is different than above.
											</label>
										</div>
									</div> */}

									{/* <div className='md:col-span-2'>
										<label for='soda'>How many soda pops?</label>
										<div className='h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
											<button
												tabindex='-1'
												for='show_more'
												className='cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-4 w-4 mx-2'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>
											<input
												name='soda'
												id='soda'
												placeholder='0'
												className='px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent'
												value='0'
											/>
											<button
												tabindex='-1'
												for='show_more'
												className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-4 w-4 mx-2 fill-current'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>
										</div>
									</div> */}

									<div className='md:col-span-5 mt-2 text-right'>
										<div className='inline-flex items-end'>
											<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
												Submit
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function QuoteDisclosure({ setTotal }) {
	return (
		<>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
							<span>Color</span>
							<PlusIcon
								className={`${open ? 'hidden rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
							/>
							<MinusIcon
								className={`${open ? ' rotate-180 transform' : 'hidden'} h-5 w-5 text-purple-500`}
							/>
						</Disclosure.Button>
						<Transition {...transitionAttributes}>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
								<Radio category={plans} setTotal={setTotal}></Radio>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
			<Disclosure as='div' className='mt-5'>
				{({ open }) => (
					<>
						<Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
							<span>Size</span>
							<PlusIcon
								className={`${open ? 'hidden rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
							/>
							<MinusIcon
								className={`${open ? ' rotate-180 transform' : 'hidden'} h-5 w-5 text-purple-500`}
							/>
						</Disclosure.Button>
						<Transition {...transitionAttributes}>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
								<Radio category={sizes} setTotal={setTotal}></Radio>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
			<Disclosure as='div' className='mt-5'>
				{({ open }) => (
					<>
						<Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
							<span>Type</span>
							<PlusIcon
								className={`${open ? 'hidden rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
							/>
							<MinusIcon
								className={`${open ? ' rotate-180 transform' : 'hidden'} h-5 w-5 text-purple-500`}
							/>
						</Disclosure.Button>
						<Transition {...transitionAttributes}>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
								<Radio category={types} setTotal={setTotal}></Radio>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</>
	);
}

export default function Quote() {
	const [total, setTotal] = useState(0);
	const { price } = useContext(PriceContext);

	const addTotal = (value) => {
		setTotal(total + value);
		console.log('passed');
	};

	return (
		<div id='' className='relative'>
			<Masthead img={img1} title={'Get Quote'}></Masthead>
			{/* <div className='flex relative mb-20 justify-between align-center'> */}
			<div className=' flex relative overflow-auto flex-col md:flex-row mb-20 justify-around align-center'>
				<div className='rounded relative  w-full px-4 pt-16'>
					<div className=' mx-auto w-full max-w-md rounded-2xl bg-gray-100 p-2 drop-shadow-xl'>
						<div className='text-purple-900 text-center mb-4 text-4xl '>Quote</div>
						<div className='text-purple-900 text-center mb-4 text-lg '>
							Choose from a variety of options
						</div>

						<QuoteDisclosure setTotal={setTotal}></QuoteDisclosure>
						<div className='bg-yellow-50'>
							<div className='text-purple-900 text-center mt-4 text-2xl '>Total Price:</div>
							<div className='text-purple-900 font-bold text-center text-2xl '>${price}</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col  items-center w-full'>
					<div className=' w-full pb-10 px-4  mt-16 bg-slate-200 drop-shadow-xl  max-w-md  lg:max-w-2xl rounded-2xl p-2 '>
						<div className='text-purple-900 text-5xl mt-10 mb-2  text-center'>Window</div>
						<Image className=''></Image>
					</div>
				</div>
				{/*
		    <div className=" flex justify-center align-center bg-red-600 w-1/2">
		      <img className="max-h-40 md:max-h-60 " src={img2}></img>
		    </div> */}
				{/* <Three className=" bg-red-300 "></Three> */}
				{/* <Arch
					style={{ fill: 'orange', filter: 'blur' }}
					className='max-w-full w-2/5 bg-red-500 h-auto'></Arch> */}
				{/* <button onClick={} */}
			</div>
			<Form></Form>
		</div>
	);
}
