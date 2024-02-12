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
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const ordersCells = userOrders?.map((itm) => {
		return (
			<tr className="cartItem" id={itm.id}>
				<td
					className="cartItem__removeItem"
					onClick={() => {
						dispatch(removeItemFromCart(cartId));
					}}
				>
					{itm.id}
				</td>
				<td className="cartItem__price">
					<p>$</p>
				</td>
				<td className="cartItem__price">
					<p>{itm.updatedAt.slice(0, 10)}</p>
				</td>
				<td>
					<p>{itm.orderStatus}</p>
				</td>
			</tr>
		);
	});

	console.log(userOrders);
	return (
		<div className="order">
			{!userOrders ? (
				<p>The user has no orders</p>
			) : (
				<>
					<table cellSpacing="0" className="order__table">
						<thead>
							<tr>
								<th className="cartPager__prdouct">Order</th>
								<th className="cartPager__price">Price</th>
								<th className="cartPager__ammount">Data</th>
								<th className="cartPager__total">Status</th>
							</tr>
						</thead>
						{ordersCells}
					</table>
					<table className="tableMobile">
						<thead></thead>
					</table>
				</>
			)}
		</div>
	);
}
