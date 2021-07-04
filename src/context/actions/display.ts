export const typeData = (payload: string) => ({
  type: "TYPE_DATA",
  payload,
});

export const clearData = () => ({
  type: "CLEAR_DATA",
});
