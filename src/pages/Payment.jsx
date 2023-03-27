import Masthead from '../components/Masthead';
import img1 from '../assets/house.jpg';
import img2 from '../assets/window.jpg';
import img3 from '../assets/bratislava.jpg';

function Payment() {
	return (
		<div>
			<Masthead img={img2} title={'Payment Methods'}></Masthead>
			<div style={{ minHeight: '40vh' }} className='container my-10 p-4 mx-auto'>
				At Unique Windows LLC , we want to make the payment process as easy and convenient as
				possible for our customers. We accept a variety of payment methods, including cash, check,
				and credit card. This allows you to choose the option that works best for you. In addition,
				we also offer financing options to help you afford the windows you need for your home or
				commercial building. Our financing options make it possible for you to make affordable
				monthly payments that fit your budget. Whether you prefer to pay with cash, check, credit
				card, or take advantage of our financing options, we're here to work with you and ensure
				your payment experience is hassle-free.
			</div>
		</div>
	);
}

export default Payment;
