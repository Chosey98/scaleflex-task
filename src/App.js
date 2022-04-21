import './App.css';
import { useEffect, useState } from 'react';
import Carousel from './components/Carousel';
import ImageGrid from './components/ImageGrid';
import axios from 'axios';
function App() {
	const [showCarousel, setShowCarousel] = useState(false);
	const [currentImageId, setCurrentImageId] = useState(0);
	const [images, setImages] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(
				'https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy'
			);
			setImages(res.data);
		}
		fetchData();
		console.log(images);
	}, []);
	return (
		<div className="App">
			{showCarousel && (
				<Carousel
					images={images}
					currentImageId={currentImageId}
					setCurrentImageId={setCurrentImageId}
					setShowCarousel={setShowCarousel}
				/>
			)}
			<ImageGrid
				images={images}
				setCurrentImageId={setCurrentImageId}
				setShowCarousel={setShowCarousel}
			/>
		</div>
	);
}

export default App;
