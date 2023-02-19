import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div>
			<footer class='bg-slate-800'>
				<div class='container flex flex-col-reverse  px-6 py-10 mx-auto space-y-8 md:flex-row justify-center md:space-y-0'>
					{/* <div class='flex flex-col-reverse items-center justify-between space-y-12 md:flex-row md:space-y-0 md:items-start'>
						<div class='mx-auto my-6 text-center text-white md:hidden'>
							Copyright &copy; 2022, All Rights Reserved
						</div>

						<div>
							<img src='img/logo-white.svg' class='h-8' alt='' />
						</div>

						<div class='flex justify-center space-x-4'>
							<a href='#'>
								<img src='img/icon-facebook.svg' alt='' class='h-8' />
							</a>
							<a href='#'>
								<img src='img/icon-youtube.svg' alt='' class='h-8' />
							</a>
							<a href='#'>
								<img src='img/icon-twitter.svg' alt='' class='h-8' />
							</a>
							<a href='#'>
								<img src='img/icon-pinterest.svg' alt='' class='h-8' />
							</a>
							<a href='#'>
								<img src='img/icon-instagram.svg' alt='' class='h-8' />
							</a>
						</div>
					</div> */}

					<div class='flex justify-center md:justify-around space-x-32'>
						<div class='flex flex-col space-y-3 text-white'>
							<a href='#' class='hover:text-primary transition'>
								Home
							</a>
							<a href='#' class='hover:text-primary transition'>
								About Us
							</a>
							<a href='#' class='hover:text-primary transition'>
								Our Products
							</a>
						</div>
						<div class='flex flex-col space-y-3 text-white'>
							<a href='#' class='hover:text-primary transition'>
								Payment
							</a>
							<a href='#' class='hover:text-primary transition'>
								Contact Us
							</a>
							<a href='#' class='hover:text-primary transition'>
								Get Quote
							</a>
							{/* <a href='#' class='hover:text-primary transition'>
								Privacy Policy
							</a> */}
						</div>
					</div>

					{/* <div class='flex flex-col justify-between'>
						<form>
							<div class='flex space-x-3'>
								<input
									type='text'
									class='flex-1 px-4 rounded-full focus:outline-none'
									placeholder='Updated in your inbox'
								/>
								<button class='px-6 py-2 text-white rounded-full bg-primary transition hover:bg-primary transitionLight focus:outline-none'>
									Go
								</button>
							</div>
						</form>
						<div class='hidden text-white md:block'>Copyright &copy; 2022, All Rights Reserved</div>
					</div> */}
				</div>
			</footer>

			<div className='w-full py-2 flex flex-col  bg-black text-center text-xsm text-gray-300'>
				<span>Copyright &copy; 2022, All Rights Reserved</span>
				<Link
					className='text-primary transition transition hover:text-white'
					to='Window-Project/terms'>
					Terms and Conditions
				</Link>
			</div>
		</div>
	);
}

export default Footer;
