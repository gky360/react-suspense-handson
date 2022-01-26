import { Loadable } from '../utils';

export interface DataLoaderProps {
  data: Loadable<string>;
}

export const DataLoader = ({ data }: DataLoaderProps): JSX.Element | null => {
  const value = data.getOrThrow();
  return (
    <div>
      <div>Data is {value}</div>
    </div>
  );
};
