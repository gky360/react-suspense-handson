export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchData1 = async (): Promise<string> => {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
};
