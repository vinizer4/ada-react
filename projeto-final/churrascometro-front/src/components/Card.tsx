// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Card = ({
	person,
	state,
	sumOne,
	minorOne,
}: {
	person: string;
	state: number | undefined;
	sumOne: () => void;
	minorOne: () => void;
}) => {
	return (
		<div className="input-group">
			<label htmlFor={person}>{person}</label>
			<div
				className="input-valid"
				id={person}
			>
				{state}
			</div>
			<div className="button-group">
				<button
					className="input-group__button--small"
					onClick={() => minorOne()}
				>
					-
				</button>
				<button
					className="input-group__button--small"
					onClick={() => sumOne()}
				>
					+
				</button>
			</div>
		</div>
	);
};
