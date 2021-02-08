import { createContext, useContext, useState } from 'react';

export type ResultData = {
	id: number;
	img: string;
	name: string;
	averageSize: string;
	play: string;
	description: string;
};

// export type ResultState = {
// 	result: [];
// 	setResult: React.Dispatch<React.SetStateAction<[]>>;
// };

export const ResultContext = createContext<ResultData | undefined>(undefined);

export function ResultContextProvider({ children }: { children: React.ReactNode }) {
	const [result, setResult] = useState([]);

	const value: any = {
		result,
		setResult,
	};

	return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
}

export function useResultContext() {
	return useContext(ResultContext);
}
