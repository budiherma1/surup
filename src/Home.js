import './Home.css'
import { useState } from 'react';
import Button from '@mui/material/Button';

function Home (props) {
	// let judul = 'Skripsi sidang tahunan';
	// const[nama, judul] = ['budih', 'judull sesuatu']
	const [count, setCount] = useState(0);
	const addCount = () => {
		setCount(count + 1)
	}
	const minCount = () => {
		setCount(count - 1)
	}
	return (
		<div>
			<Button variant="outlined">Hello World</Button>
			<h4>{count}</h4>
			<button onClick={addCount}>klikkkk</button>
			<button onClick={minCount}>MIN</button>
			{/* <h1> ini {judul}</h1> */}
			<h1> ini adalah props {props.nama} {props.message}</h1>
			{props.children}
		</div>
	)
}

export default Home;