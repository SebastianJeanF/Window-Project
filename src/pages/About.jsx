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
						<div class='w-1/2 mx-auto'>
							<img src={img3} alt='' class='img-fluid' />
						</div>
						<div class='md:w-1/2 p-5'>
							<div className='text-3xl text-slate-800'>How we started</div>
							<div class='pt-4 font-semibold'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic, nemo
								accusantium natus nulla necessitatibus cumque ipsa illum magnam eveniet neque omnis
								ex, eaque vel, molestias voluptatum obcaecati soluta sapiente.
							</div>
							<p class='lead'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium
								architecto doloremque, ratione odio laboriosam temporibus quas at! Blanditiis
								suscipit odit officia impedit porro quaerat vel, cupiditate voluptate fugit ut!
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
						<div class='md:w-1/2 p-5'>
							<div className='text-3xl text-center md:text-right mr-8 text-slate-800'>
								Where we are
							</div>
							<div class='pt-4 font-semibold'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic, nemo
								accusantium natus nulla necessitatibus cumque ipsa illum magnam eveniet neque omnis
								ex, eaque vel, molestias voluptatum obcaecati soluta sapiente.
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium
								architecto doloremque, ratione odio laboriosam temporibus quas at! Blanditiis
								suscipit odit officia impedit porro quaerat vel, cupiditate voluptate fugit ut!
							</p>
							<a href='#' class='btn btn-light mt-3 my-auto'>
								<i class='bi bi-chevron-right pr-5'></i>Learn more
							</a>
						</div>

						<div class='md:w-1/2 text-center'>
							<img src={img1} alt='' class='img-fluid' />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
