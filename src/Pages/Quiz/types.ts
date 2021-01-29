export interface QA {
	number: number;
	setNumber: React.Dispatch<React.SetStateAction<number>>;
	id: number;
	question: string;
	selections: [
		{
			id: number;
			option: string;
		}
	];
}

export interface ProgressBarProps {
	left: number;
}
