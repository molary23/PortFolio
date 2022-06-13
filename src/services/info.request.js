export const pullInfo = async () => {
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch("info.json", requestOptions);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
