import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
	return <>
		<Header />
		<Outlet />
	</>
}
export default Main;