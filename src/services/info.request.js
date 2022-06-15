export const pullInfo = async () => {
  const URL = "https://www.hassanadeola.com/outbox/info.php";
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      /*body: JSON.stringify({
        key: process.env.REACT_APP_SECURE_INFO_KEY,
      }),*/
    };
    const response = await fetch("info.json", requestOptions);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
