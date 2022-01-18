import { sleep } from '../utils';

export interface SometimesSuspendProps {}

export const SometimesSuspend =
  ({}: SometimesSuspendProps): JSX.Element | null => {
    if (Math.random() < 0.5) {
      throw sleep(1000);
    }
    return <p>Hello, world!</p>;
  };
