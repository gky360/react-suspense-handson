import { fetchData1 } from '../utils';

let data: string | undefined;

const useData1 = (): string => {
  if (data === undefined) {
    throw fetchData1().then((d) => (data = d));
  }
  return data;
};

export interface DataLoaderProps {}

export const DataLoader = ({}: DataLoaderProps): JSX.Element | null => {
  const data = useData1();
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};
