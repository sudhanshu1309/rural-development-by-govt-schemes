import API from "../backend";

export const updatePeople = (token, aadhar, people) => {
  return fetch(`${API}/update/${aadhar}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(people),
  })
    .then((respone) => {
      return respone.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
