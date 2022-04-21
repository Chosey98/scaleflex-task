import Image from './Image';
import styled from 'styled-components';

const Grid = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 20px;
	margin: 20px;
`;

function ImageGrid({ images, setShowCarousel, setCurrentImageId }) {
	return (
		<Grid>
			{images &&
				images.map((image, index) => (
					<Image
						key={image.uuid}
						imageUrl={image.url}
						imageName={image.name}
						imgId={index}
						setShowCarousel={setShowCarousel}
						setCurrentImageId={setCurrentImageId}
					/>
				))}
		</Grid>
	);
}

export default ImageGrid;
