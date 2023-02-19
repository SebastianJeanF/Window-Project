import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo-instagram.svg';
import { ReactComponent as Facebook } from '../assets/logo-facebook.svg';

export default function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className='fixed top-0 flex flex-col z-20 w-full'>
			<div className='hidden relative h-5 w-full bg-primary justify-end align-center md:flex'>
				<Logo className='my-auto hover:bg-slate-600 h-full max-w-4 mr-5'></Logo>
				<Facebook className='my-auto hover:bg-slate-600 h-full max-w-4  mr-5'></Facebook>
				{/* <svg src={Facebook} /> */}
			</div>
			<nav className='drop-shadow-xl sticky text-white md:text-gray-700 md:dark:text-gray-400 bg-primary md:bg-white px-4 sm:px-4 py-2.5 md:py-0 md:dark:bg-gray-900 w-full  left-0  border-gray-200 dark:border-gray-600'>
				<div className='container flex flex-wrap items-center justify-between md:justify-center mx-auto'>
					<CustomLink to='Window-Project/' className='mr-10 flex items-center'>
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							Windows
						</span>
					</CustomLink>
					<div className='flex md:order-2'>
						<CustomLink
							className=' ml-10 hidden text-white transition items-center  bg-primary hover:bg-darkPrimary focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-gray-800 md:block'
							to='Window-Project/quote'>
							Get Quote
						</CustomLink>
						<button
							data-collapse-toggle='navbar-sticky'
							type='button'
							className=' bg-white inline-flex items-center p-2 transition text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='navbar-sticky'
							aria-expanded='false'
							onClick={() => setIsNavOpen((prev) => !prev)}>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='w-6 h-6'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clip-rule='evenodd'></path>
							</svg>
						</button>
					</div>
					<div
						className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
							isNavOpen ? '' : 'hidden'
						}`}
						id='navbar-sticky'>
						<ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							<li onClick={() => setIsNavOpen(false)}>
								<CustomLink to='Window-Project/' aria-current='page'>
									Home
								</CustomLink>
							</li>
							<li onClick={() => setIsNavOpen(false)}>
								<CustomLink to='Window-Project/about'> About Us</CustomLink>
							</li>
							<li onClick={() => setIsNavOpen(false)}>
								<CustomLink to='Window-Project/products'> Our Products</CustomLink>
							</li>
							<li onClick={() => setIsNavOpen(false)}>
								<CustomLink to='Window-Project/payment'>Payment</CustomLink>
							</li>
							<li onClick={() => setIsNavOpen(false)} className='md:hidden'>
								<CustomLink to='Window-Project/quote'>Quote</CustomLink>
							</li>
							<li onClick={() => setIsNavOpen(false)}>
								<CustomLink to='Window-Project/contact'>Contact Us</CustomLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

function CustomLink({ children, to, ...props }) {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<div>
			<Link
				className={`${
					match ? 'text-primary font-bold md:font-semibold' : 'text-gray-700 dark:text-gray-400'
				}  transition h-full block py-2 pl-3 pr-4 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
				to={to}
				{...props}>
				{children}
			</Link>
		</div>
	);
}
