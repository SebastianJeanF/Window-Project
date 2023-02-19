function Masthead({ img, title }) {
	const styles = {
		masthead: {
			// background: `url(../assets/${imgName})`,
			background: `url(${img})`,
			textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2);',
			minHeight: '40vh',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		},
		overlay: {
			background: 'rgba(0,0,0,.2)',
		},
	};

	return (
		<div className='transition text-white relative bg-cover bg-center' style={styles.masthead}>
			<div
				style={styles.overlay}
				className='absolute h-full w-full flex justify-center items-center'>
				<div className='font-bold text-5xl'>{title}</div>
			</div>
		</div>
	);
}

export default Masthead;
