//import './App.css'
import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';
import Carousel from '../components/Carousel';
import Masthead from '../components/Masthead';

function About() {
	console.log(window.location);
	return (
		<div className='App'>
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
			<Masthead img={img2} title={'About Us'}></Masthead>
			<section id='learn' className=' p-5'>
				<div class='container'>
					<div class='md:flex items-center justify-between'>
						<div class='w-1/5 mx-auto'>
							<img src={img3} alt='' class='img-fluid' />
						</div>
						<div class='md:w-4/5 p-5'>
							<div className='text-3xl text-slate-800'>How we started</div>
							<div class='pt-4 font-semibold'>
								We are a family-owned and operated window installation company based in Georgia. At
								Unique Windows, we are committed to providing top-quality installation services to
								our customers, and we take great pride in our workmanship and attention to detail.
							</div>
							<p class=''>
								Our team of skilled professionals has years of experience in the industry, and we
								have worked with some of the biggest names in the business, including Home Depot,
								Lowes, Pella, Renewal By Andersen, and Marvin. Our experience and expertise have
								allowed us to develop a deep understanding of the industry and a keen eye for
								quality workmanship.
							</p>
							<p class=''>
								As a family-owned business, we understand the importance of building strong
								relationships with our customers. That's why we strive to provide personalized
								service and attention to every customer, no matter the size or scope of the project.
								We believe that our customers are more than just clients; they are part of our
								extended family, and we treat them with the same care and respect that we would want
								for our own family members.
							</p>
							<p class=''>
								At Unique Windows, we are committed to using only the highest-quality materials and
								the latest installation techniques to ensure that your windows are installed
								correctly and efficiently. We offer a wide range of window styles and materials to
								suit your needs and preferences, and we are always happy to provide recommendations
								based on our expertise.
							</p>
							<p class=''>
								Thank you for choosing Unique Window for your window installation needs. We are
								proud to be a family-owned business and are dedicated to providing you with the best
								possible service and experience. We look forward to working with you and helping you
								achieve the look and functionality you desire for your home or business.
							</p>
							<a href='#' class='btn btn-light mt-3'>
								<i class='bi bi-chevron-right pr-5'></i>Learn more
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id='present' class='bg-gray-100 p-5'>
				<div class='container'>
					<div class='md:flex items-center  justify-between'>
						<div class='md:w-4/5 p-5'>
							<div className='text-3xl text-center md:text-right mr-8 text-slate-800'>
								Our Goals
							</div>
							<div class='pt-4 font-semibold'>
								At Unique Windows , we are committed to making the window installation process as
								simple and straightforward as possible. That's why we are proud to be the only
								window installation company to offer instant quotes.
							</div>
							<p>
								With our instant quote system, you can get an accurate estimate for your window
								installation project in just a few clicks. Simply visit our website and provide some
								basic information about your project, including the type of windows you want, the
								size of the project, and any additional requirements or preferences. Our system will
								then generate an instant quote based on your specifications, allowing you to make an
								informed decision about your window installation project.
							</p>
							<p>
								We understand that getting an accurate quote is essential to planning and budgeting
								for your project. That's why we have invested in the latest technology to provide
								instant quotes to our customers. Our system takes into account all the factors that
								can impact the cost of your project, including materials, labor, and any additional
								services you may need.
							</p>
							<p>
								At Unique Windows, we believe that transparency and honesty are essential to
								building strong relationships with our customers. By offering instant quotes, we aim
								to provide our customers with the information they need to make informed decisions
								about their window installation projects. We are committed to providing you with the
								best possible service and experience, and we believe that our instant quote system
								is just one way we can achieve that goal.
							</p>
							<a href='#' class='btn btn-light mt-3 my-auto'>
								<i class='bi bi-chevron-right pr-5'></i>Learn more
							</a>
						</div>

						<div class='md:w-1/5 text-center'>
							<img src={img1} alt='' class='img-fluid' />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
