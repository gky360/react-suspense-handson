export interface RenderingNotifierProps {
  name: string;
}

export const RenderingNotifier = ({
  name,
}: RenderingNotifierProps): JSX.Element | null => {
  console.log(`${name} is rendered`);
  return null;
};
