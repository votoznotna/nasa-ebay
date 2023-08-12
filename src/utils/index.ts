export const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const parseDateInput = (date: string): string | undefined => {
  const dateArray = date.split("/");
  if (!dateArray || !(dateArray instanceof Array) || dateArray.length !== 3) {
    return undefined;
  }
  const year = Number(dateArray[2]);
  const day = Number(dateArray[1]);
  const month = Number(dateArray[0]);

  return `${year}-${month}-${day}`;
};

export const sequantialNumbers = (n: number) =>
  Array.from(Array(n), (_, index) => index + 1);
