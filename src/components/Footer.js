const Footer = () => {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-black">
			<p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>
			<a
				href="/"
				className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
			>
				<svg className="bi me-2" width={40} height={32}>
					<use xlinkHref="#bootstrap" />
				</svg>
			</a>
		</footer>
	);
};

export default Footer;
