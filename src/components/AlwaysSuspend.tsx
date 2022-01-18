import { sleep } from '../utils';

export interface AlwaysSuspendProps {}

export const AlwaysSuspend = ({}: AlwaysSuspendProps): JSX.Element | null => {
  throw sleep(1000);
};
