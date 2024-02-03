import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { increment } from "@/store/features/counter/counterSlice";

export const MyComponent = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector((state) => state.counter.value);
	return (
		<div>
			<p>{count}</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
		</div>
	);
};
