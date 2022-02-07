import API from "../backend";

export const updatePeople = (id, people) => {
  return fetch(`${API}/update/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
