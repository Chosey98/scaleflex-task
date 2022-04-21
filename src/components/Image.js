import styled from 'styled-components';
import magnifier from '../images/magnifier.png';
const ImageCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-in-out;
	border-radius: 10px;
	&:hover {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		transform: scale(1.1);
		cursor: pointer;
	}
	&:hover::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.5);
		background-image: url(${magnifier});
		background-repeat: no-repeat;
		background-position: center;
		fill: white;
		background-size: 30%;
	}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
function Image({
	imageUrl,
	imgId,
	imageName,
	setShowCarousel,
	setCurrentImageId,
}) {
	function openCarousel() {
		setShowCarousel(true);
		setCurrentImageId(imgId);
	}
	return (
		<ImageCard onClick={openCarousel}>
			{' '}
			<Img src={imageUrl} alt={imageName} />{' '}
		</ImageCard>
	);
}

export default Image;
