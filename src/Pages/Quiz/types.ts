export interface QA {
	id: number;
	question: string;
	selections: [
		{
			id: number;
			option: string;
		}
	];
}
