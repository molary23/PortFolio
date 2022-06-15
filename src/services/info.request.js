export const pullInfo = async () => {
  const URL = "https://www.hassanadeola.com/outbox/info.json";
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: process.env.REACT_APP_SECURE_INFO_KEY,
    };
    const response = await fetch(URL, requestOptions);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
