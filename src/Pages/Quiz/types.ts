export interface QAData {
	lastQId: number;
	number: number;
	setNumber: React.Dispatch<React.SetStateAction<number>>;
	id: number;
	question: string;
	symbol: string;
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

export interface UserAnswerData {
	[key: string]: number;
}

export interface ResultData {
	name: string;
}