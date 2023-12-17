export const InputFood = ({ food, formatWeight }: { food: string; formatWeight: string }) => {
	return (
		<li>
			<strong>{food}</strong>
			<span>{formatWeight}</span>
		</li>
	);
};
