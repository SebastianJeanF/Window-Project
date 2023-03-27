import Masthead from '../components/Masthead';
import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';

function Products() {
	return (
		<div>
			<Masthead img={img2} title={'Products'}></Masthead>
			<div style={{ minHeight: '40vh' }} className='container my-10 p-4 mx-auto'>
				With unique windows we offer high-quality window installation services for both residential
				and commercial properties. We specialize in providing custom-fit windows that perfectly suit
				your building's design and architecture, while also meeting your energy-efficiency needs.
				Our team of experienced professionals is dedicated to providing excellent customer service,
				ensuring that every project is completed on time and within budget. Whether you're building
				a new home or upgrading your existing windows, we have the expertise to help you achieve
				your goals.
			</div>
		</div>
	);
}

export default Products;
