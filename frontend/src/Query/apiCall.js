import API from "../backend";

export const makeQuery = async (aadhar) => {
  try {
    const response = await fetch(`${API}/details/${aadhar}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
