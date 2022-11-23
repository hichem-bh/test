import API from "../tools/API";

export interface LoginInterface {
  email: string;
  password: string;
}

class Auth {
  async login(user: LoginInterface) {
    try {
      const response = await API.add("auth/login", user);
      localStorage.setItem("profile", response.data.accessMessage);
      window.location.reload();
      return response;
    } catch (e: any) {
      console.log(e);
      return e.response;
    }
  }

  logout() {}

  isLogin() {
    return !!localStorage.getItem("profile");
  }
}

export default new Auth();
