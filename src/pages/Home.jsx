//import './App.css'
import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';
import Carousel from '../components/SwiperCarousel';

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

			<section className='p-5'>
				<div className='container'>
					<div className='g-3 md:flex  text-center'>
						<div className=''>
							<div className='card animate bg-dark text-light'>
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
						</div>
						<div className='col-md'>
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
						</div>
						<div className='col-md'>
							<div className='card animate bg-dark text-light'>
								<div className='card-body text-center'>
									<div className='h1 mb-3'>
										<i className='bi bi-house'></i>
									</div>
									<h3 className='card-title mb-3'>Contact Us </h3>
									<p className='card-text'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis
										accusantium tempore quasi aliquid, soluta porro pariatur eveniet vitae suscipit
										corrupti perspiciatis aperiam sunt ullam amet dolore numquam fugiat voluptas?
									</p>
									<a href='/contact' className='btn btn-warning'>
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
