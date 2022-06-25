export const pullInfo = async () => {
  let URL, requestOptions;
  if (process.env.NODE_ENV !== "production") {
    URL = `info.json`;
    requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
  } else {
    URL = `${process.env.REACT_APP_SECURE_URL}info.php`;
    requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: process.env.REACT_APP_SECURE_INFO_KEY,
      }),
    };
  }
  try {
    const response = await fetch(URL, requestOptions);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
