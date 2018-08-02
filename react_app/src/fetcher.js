import axios from 'axios';

const rawShots = 'http://142.93.86.195:4700/api/popular_shots';
function fetchRawShotsOfDribbble() {
	let L = axios.get(rawShots);
	return L;
}

export default fetchRawShotsOfDribbble;
