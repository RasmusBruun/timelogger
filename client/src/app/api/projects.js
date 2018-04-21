import axios from "axios";

//const client = axios.create({ baseURL: "http://localhost:3001/api" });
const server = axios.create({ baseURL: "http://localhost:5000/api" });
const context = server;

export function getEntry(id) {
  return context
    .get(`/projects/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error));
}

export function getAllEntries() {
  return context
    .get("/projects")
    .then(response => response.data)
    .catch(error => console.log(error));
}

export function addEntry(n, c) {
  var params = new URLSearchParams();
  params.append("name", n);
  params.append("comment", c);
  return context
    .post("/projects", params)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

export function updateEntry(id, name, time) {
  var params = new URLSearchParams();
  params.append("id", id);
  // params.append("name", name);
  params.append("time", time);
  return context
    .patch("/projects", params)
    .then(response => response.data)
    .catch(error => console.log(error));
}

export function deleteEntry(id) {
  return context
    .delete("/projects", { params: { id: id } })
    .then(response => response.data)
    .catch(error => console.log(error));
}

export default {
  getEntry,
  getAllEntries,
  addEntry,
  updateEntry,
  deleteEntry
};
