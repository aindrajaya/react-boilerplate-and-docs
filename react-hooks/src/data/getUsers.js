const API = "http://jsonplaceholder.typicode.com/users"

//export function
export const getUsers = () => {
  //fetch data untuk mengambil atau membaca data dari API
  //ada beberapa proses untuk komunikasi dgn data (GET, POST, UPDATE, DELETE) CRUD
  return fetch(API)
    .then(response => {
      if(!response.ok) throw Error(response.statusText);
      return response.json()
    })
    .then(json => json)
}

// export default getUsers()