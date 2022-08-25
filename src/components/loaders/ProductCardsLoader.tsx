import ContentLoader from "react-content-loader";

const ProductCardLoader = (props: any) => (
	<ContentLoader
		speed={3}
		viewBox='0 0 1360 450'
		height={450}
		width={1360}
		className='mx-auto py-10'
		backgroundColor='#393E46'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='30' y='20' rx='8' ry='8' width='200' height='200' />
		<rect x='30' y='250' rx='0' ry='0' width='200' height='18' />
		<rect x='30' y='275' rx='0' ry='0' width='120' height='20' />
		<rect x='250' y='20' rx='8' ry='8' width='200' height='200' />
		<rect x='250' y='250' rx='0' ry='0' width='200' height='18' />
		<rect x='250' y='275' rx='0' ry='0' width='120' height='20' />
		<rect x='470' y='20' rx='8' ry='8' width='200' height='200' />
		<rect x='470' y='250' rx='0' ry='0' width='200' height='18' />
		<rect x='470' y='275' rx='0' ry='0' width='120' height='20' />
		<rect x='690' y='20' rx='8' ry='8' width='200' height='200' />
		<rect x='690' y='250' rx='0' ry='0' width='200' height='18' />
		<rect x='690' y='275' rx='0' ry='0' width='120' height='20' />
		<rect x='910' y='20' rx='8' ry='8' width='200' height='200' />
		<rect x='910' y='250' rx='0' ry='0' width='200' height='18' />
		<rect x='910' y='275' rx='0' ry='0' width='120' height='20' />
		<rect x='1130' y='20' rx='8' ry='8' width='200' height='200' />
		<rect x='1130' y='250' rx='0' ry='0' width='200' height='18' />
		<rect x='1130' y='275' rx='0' ry='0' width='120' height='20' />
	</ContentLoader>
);

export default ProductCardLoader;
