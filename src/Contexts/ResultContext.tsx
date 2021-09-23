import { createContext, useContext, useState } from 'react';

export type ResultData = {
	id: number;
	img: string;
	name: string;
	averageSize: string;
	play: string;
	description: string;
};

export type ResultContextProps = {
	result: ResultData[];
	setResult?: (data: ResultData[]) => void;
};

export const ResultContext = createContext<ResultContextProps>({ result: [] });

export function ResultContextProvider({ children }: { children: React.ReactNode }) {
	const [result, setResult] = useState<ResultData[]>([]);

	return <ResultContext.Provider value={{ result, setResult }}>{children}</ResultContext.Provider>;
}

export function useResultContext(): ResultContextProps {
	return useContext(ResultContext);
}
