import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./orders.scss";

export default function Orders() {
	const user = useSelector((state) => state.user.user);
	const [userOrders, setUserOrders] = useState([]);
	console.log(user);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get(
					`${import.meta.env.VITE_API_URL}/api/users/${
						user.id
					}?populate=*`
				);
				setUserOrders(data.data.orders);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	});
	return (
		<div className="order">
			{!userOrders ? <p>The user has no orders</p> : <div></div>}
		</div>
	);
}
