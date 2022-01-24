import { fetchData1 } from '../utils';

const dataMap: Map<string, string> = new Map();

const useData1 = (cacheKey: string): string => {
  const cachedData = dataMap.get(cacheKey);
  if (cachedData === undefined) {
    throw fetchData1().then((d) => dataMap.set(cacheKey, d));
  }
  return cachedData;
};

export interface DataLoaderProps {}

export const DataLoader1 = ({}: DataLoaderProps): JSX.Element | null => {
  const data = useData1('DataLoader1');
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};

export const DataLoader2 = ({}: DataLoaderProps): JSX.Element | null => {
  const data = useData1('DataLoader2');
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};
