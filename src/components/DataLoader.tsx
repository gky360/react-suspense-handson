import { useState } from 'react';
import { fetchData1 } from '../utils';

export interface DataLoaderProps {}

export const DataLoader = ({}: DataLoaderProps): JSX.Element | null => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  // dataがまだ無ければローディングを開始する
  if (loading && data === null) {
    throw fetchData1().then(setData);
  }
  // データがあればそれを表示
  return (
    <div>
      <div>Data is {data}</div>
      <button className="border p-1" onClick={() => setLoading(true)}>
        load
      </button>
    </div>
  );
};
