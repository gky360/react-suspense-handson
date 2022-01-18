import React, { useEffect, useReducer } from 'react';

export interface NoSSRProps {
  children: React.ReactNode;
}

export const NoSSR = ({ children }: NoSSRProps): JSX.Element | null => {
  const [canRender, setCanRender] = useReducer(() => true, false);
  useEffect(() => {
    setCanRender();
  }, []);
  return canRender ? <>{children}</> : null;
};
