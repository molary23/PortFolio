export const pullInfo = async () => {
  const URL = `${process.env.REACT_APP_SECURE_URL}info.php`;

  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: process.env.REACT_APP_SECURE_INFO_KEY,
      }),
    };
    const response = await fetch(URL, requestOptions);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
