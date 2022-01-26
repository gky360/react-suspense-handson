export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchData1 = async (): Promise<string> => {
  await sleep(Math.floor(Math.random() * 1000));
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
};

type LoadableState<T> =
  | {
      status: 'pending';
      promise: Promise<T>;
    }
  | {
      status: 'fulfilled';
      data: T;
    }
  | {
      status: 'rejected';
      error: unknown;
    };

export class Loadable<T> {
  #state: LoadableState<T>;
  constructor(promise: Promise<T>) {
    this.#state = {
      status: 'pending',
      promise: promise.then(
        (data) => {
          this.#state = {
            status: 'fulfilled',
            data,
          };
          return data;
        },
        (error) => {
          this.#state = {
            status: 'rejected',
            error,
          };
          throw error;
        }
      ),
    };
  }
  getOrThrow(): T {
    switch (this.#state.status) {
      case 'pending':
        throw this.#state.promise;
      case 'fulfilled':
        return this.#state.data;
      case 'rejected':
        throw this.#state.error;
    }
  }
}
