export const pullInfo = async () => {
  try {
    const response = await fetch("info.json"),
      data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
