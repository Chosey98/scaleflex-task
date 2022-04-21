import { useEffect } from 'react';
import styled from 'styled-components';
const CarouselDiv = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	top: 0;
	right: 0;
	left: 0;
	img {
		opacity: 1;
	}
	@media (max-width: 768px) {
		img {
			width: 100%;
		}
		.counter {
			bottom: 50px;
		}
		.left {
			left: 30px;
		}
		.right {
			right: 30px;
		}
	}
`;
const Image = styled.img`
	width: 50vw;
	max-width: auto;
	height: auto;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
const Background = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: black;
	top: 0;
	left: 0;
	z-index: -1;
	transition: all 0.3s ease-in-out;
	opacity: 0.7;
`;
const LeftCarousel = styled.div`
	position: absolute;
	top: 50%;
	left: 50px;
	font-size: 2em;
	color: white;
	transform: translate(-50%, -50%);
	cursor: pointer;
`;
const RightCarousel = styled.div`
	position: absolute;
	top: 50%;
	right: 50px;
	font-size: 2em;
	color: white;
	transform: translate(50%, -50%);
	cursor: pointer;
	z-index: 1;
`;
const CloseCarousel = styled.div`
	position: absolute;
	top: 10px;
	font-family: 'Roboto', sans-serif;
	font-size: 2em;
	font-weight: bold;
	color: white;
	top: 30px;
	right: 50px;
	cursor: pointer;
	z-index: 1;
`;

const ImageCounter = styled.div`
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 150px;
	color: white;
	font-family: 'Roboto', sans-serif;
	font-size: 1.3rem;
	text-align: center;
	background-color: black;
	opacity: 0.7;
`;
function Carousel({
	currentImageId,
	setCurrentImageId,
	images,
	setShowCarousel,
}) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);
	const ImageName = styled.div`
		&::before {
			content: '${images[currentImageId].name}';
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			bottom: 3px;
			text-align: center;
			width: 100%;
			height: 30px;
			background-color: black;
			font-family: 'Roboto', sans-serif;
			font-size: 18px;
			opacity: 0.7;
			color: white;
		}
		position: relative;
		color: white;
	`;
	function handleCarousel(addOne) {
		if (addOne) {
			if (currentImageId < images.length - 1) {
				setCurrentImageId(currentImageId + 1);
			} else {
				setCurrentImageId(0);
			}
		} else {
			if (currentImageId > 0) {
				setCurrentImageId(currentImageId - 1);
			} else {
				setCurrentImageId(images.length - 1);
			}
		}
	}
	return (
		<CarouselDiv>
			<Background onClick={() => setShowCarousel(false)} />
			<LeftCarousel
				className="left"
				onClick={() => handleCarousel(false)}
			>
				←
			</LeftCarousel>
			<div>
				<Image
					src={images[currentImageId].url}
					alt={images[currentImageId].name}
				/>
				<ImageName></ImageName>
			</div>
			<ImageCounter className="counter">
				Images {currentImageId + 1}/{images.length}
			</ImageCounter>
			<RightCarousel
				className="right"
				onClick={() => handleCarousel(true)}
			>
				→
			</RightCarousel>
			<CloseCarousel
				className="right"
				onClick={() => setShowCarousel(false)}
			>
				X
			</CloseCarousel>
		</CarouselDiv>
	);
}

export default Carousel;
