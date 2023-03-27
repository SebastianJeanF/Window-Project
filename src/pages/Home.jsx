//import './App.css'
import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';
import Carousel from '../components/SwiperCarousel';
import { GrContactInfo } from 'react-icons/gr';
import { MdWindow } from 'react-icons/md';

function Home() {
	return (
		<div>
			{/* <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center">
      <Container>
        <div className="d-sm-flex text-center text-sm-start justify-content-between">
      <div className="m-2">
          <h1>My house <span className="text-warning">website</span>!</h1>
          <p className="lead my-4">Sebastian!</p>
          <button className="btn btn-primary btn-lg">Click to begin</button>
          </div>
        <Image className="img-fluid w-50" src={img2}  height={50} width={50} alt="image" /> 
        </div>
      </Container>
     </section> */}

			<Carousel></Carousel>

			<section id='cta' class='bg-red-500'>
				<div class='container flex flex-col items-center justify-between px-6 py-10 mx-auto space-y-12 md:py-8 md:flex-row md:space-y-0'>
					<h2 class='text-2xl font-bold text-center text-white md:text-2xl md:max-w-xl md:text-left'>
						Need pricing? Get an <b>instant</b> quote on the exact window you want!
					</h2>
					<div>
						<a
							href='#'
							class='p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900'>
							Get Started
						</a>
					</div>
				</div>
			</section>

			<section className='p-5 '>
				<div className='container mx-auto'>
					<div className='gap-3 md:flex justify-center text-center'>
						{/* <div className=''>
							<div className='animate bg-black text-gray-50'>
								<div className='card-body text-center'>
									<div className='h1 mb-3'>
										<i className='bi bi-laptop'></i>
									</div>
									<h3 className='card-title mb-3'>Our Products</h3>
									<p className='card-text'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis
										accusantium tempore quasi aliquid, soluta porro pariatur eveniet vitae suscipit
										corrupti perspiciatis aperiam sunt ullam amet dolore numquam fugiat voluptas?
									</p>
									<a href='/products' className='btn btn-primary'>
										Learn More
									</a>
								</div>
							</div>
						</div> */}
						{/* <div className='col-md'>
							<div className='card animate bg-secondary text-light'>
								<div className='card-body text-center'>
									<div className='h1 mb-3'>
										<i className='bi bi-person'></i>
									</div>
									<h3 className='card-title mb-3'>Payment </h3>
									<p className='card-text'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis
										accusantium tempore quasi aliquid, soluta porro pariatur eveniet vitae suscipit
										corrupti perspiciatis aperiam sunt ullam amet dolore numquam fugiat voluptas?
									</p>
									<a href='/payment' className='btn btn-dark'>
										Learn More
									</a>
								</div>
							</div>
						</div> */}

						<div class=' py-16 rounded  bg-stone-300'>
							<div class='container  m-auto md:flex px-6 text-gray-600 md:px-12 xl:px-6'>
								<div class='space-y-6 md:space-y-0 md:flex md:gap-6  lg:gap-12'>
									<div class=''>
										<GrContactInfo className='h-10 w-10 mx-auto'></GrContactInfo>

										<h2 class='text-2xl text-gray-900 font-bold md:text-4xl'>Contact Us</h2>
										<p class='mt-6 text-gray-800'>
											If you have any questions or would like to learn more about our window
											installation services, we are always happy to hear from you. You can easily
											contact us by visiting the "Contact Us" section of our website. Here, you'll
											find our phone number, and email address. so you can choose the method of
											communication that works best for you.
										</p>
										<p class='mt-4 text-gray-800'>
											Our team is always available to answer your questions and provide you with any
											information you need about our products and services. We're committed to
											providing exceptional customer service and look forward to hearing from you
											soon.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class='mt-4 md:m-0 py-16 rounded bg-gray-200'>
							<div class='container md:flex m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
								<div class='space-y-6 md:space-y-0 md:flex md:gap-6  lg:gap-12'>
									<div class=''>
										<MdWindow className='text-gray-900 h-10 w-10 mx-auto'></MdWindow>
										<h2 class='text-2xl text-gray-900 font-bold md:text-4xl'>Our Products</h2>
										<p class='mt-6 text-gray-600'>
											With unique windows we offer high-quality window installation services for
											both residential and commercial properties. We specialize in providing
											custom-fit windows that perfectly suit your building's design and
											architecture, while also meeting your energy-efficiency needs.
										</p>
										<p class='mt-4 text-gray-600'>
											Our team of experienced professionals is dedicated to providing excellent
											customer service, ensuring that every project is completed on time and within
											budget. Whether you're building a new home or upgrading your existing windows,
											we have the expertise to help you achieve your goals.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* <div class='py-16 bg-white'>
							<div class='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
								<div class='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
									<div class='md:5/12 lg:w-5/12'>
										<img
											src='https://tailus.io/sources/blocks/left-image/preview/images/startup.png'
											alt='image'
											loading='lazy'
											width=''
											height=''
										/>
									</div>
									<div class='md:7/12 lg:w-6/12'>
										<h2 class='text-2xl text-gray-900 font-bold md:text-4xl'>Our Products</h2>
										<p class='mt-6 text-gray-600'>
										
										</p>
										<p class='mt-4 text-gray-600'>
									
										</p>
									</div>
								</div>
							</div>
						</div> */}
						{/* <div className='card animate bg-dark text-light'>
							<div className='card-body text-center'>
								<div className='h1 mb-3'>
									<i className='bi bi-house'></i>
								</div>
								<h3 className='card-title mb-3'>Contact Us </h3>
								<p className='card-text'></p>
								<a href='/contact' className='btn btn-warning'>
									Learn More
								</a>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
