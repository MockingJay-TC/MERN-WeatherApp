import axios from "axios";
import {production} from "../config/config";

class AuthService {
  baseUrl = "http://www.backend.com";
  async login({ email, password }) {
    console.log(email, password);
    let response;
    if (production) {
      let loginUrl = this.baseUrl + "/login";
      response = await axios.post(loginUrl, { email, password });
    } else {
      response = await axios.get("login.json");
      let user = response.data.user;
      if (user.email === email && user.password === password) {
        response = { token: response.data.user.token };
      } else {
        response = { error: "Wrong Credentials" };
      }
    }
    return response;
  }
}

export default AuthService;