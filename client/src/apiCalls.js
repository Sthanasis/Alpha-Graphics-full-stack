import axios from "axios";

const url = "api/router/";

class ApiCalls {
  static getProjects() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //Create Post
  static async insertProject(data) {
    try {
      const res = await axios({
        method: "POST",
        url: `${url}`,
        data,
      });
      if (res.data.status === "success") {
        return res;
      }
    } catch (err) {
      alert(err);
    }
  }

  //Delete Post
  static deleteProject(id) {
    return axios.delete(`${url}${id}`);
  }

  static async login(user) {
    try {
      const res = await axios({
        method: "POST",
        url: `${url}/login`,
        data: user,
      });
      if (res.data.status === "success") {
        localStorage.setItem("token", res.data.token);

        return res;
      }
    } catch (err) {
      alert(err);
    }
  }

  static async logout() {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/logout`,
      });
      if (res.data.status === "success") {
        localStorage.removeItem("token");
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default ApiCalls;
