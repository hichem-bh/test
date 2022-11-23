import API from "../tools/API";

export interface UserInterface {
  email: string;
  password: string;
}

class User {
  async getUser(): Promise<UserInterface[]> {
    try {
      const response: any = await API.get("user/", null);
      return response.data;
    } catch (e: any) {
      console.log(e);
      return e.response;
    }
  }
  async createUser(user: UserInterface) {
    try {
      const response = await API.add("auth/register", user);
      return response;
    } catch (e: any) {
      console.log(e);
      return e.response;
    }
  }

  updateUser(User: UserInterface) {}
  deleteUser(id: string) {}
}

export default new User();
