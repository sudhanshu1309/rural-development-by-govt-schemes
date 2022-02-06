import API from "../backend";

export const getAllSchema = () => {
  return fetch(`${API}/schemes`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const savePeople = (token, people) => {
  return fetch(`${API}/submit`, {
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
