import { fetchData1 } from '../utils';

let data: string | undefined;

export interface DataLoaderProps {}

export const DataLoader = ({}: DataLoaderProps): JSX.Element | null => {
  // dataがまだ無ければローディングを開始する
  if (data === undefined) {
    throw fetchData1().then((d) => (data = d));
  }
  // データがあればそれを表示
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  );
};
