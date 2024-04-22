import { useUserStore } from "stores/user-store";

const userStore = useUserStore();

class AuthService {
  login(user) {
    console.log("user", user);
    if (user.login.value === "admin@localhost") {
      if (user.password.value === "1234567") {
        // localStorage.setItem("user", JSON.stringify(user));
        userStore.login();
        console.log("User is logged in!", user);

        return user;
      }
    }

    console.error("User is NOT logged in!");

    return null;

    // return axios
    //   .post(API_URL + "signin", {
    //     username: user.username,
    //     password: user.password,
    //   })
    //   .then((response) => {
    //     if (response.data.accessToken) {
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //     }
    //
    //     return response.data;
    //   });
  }

  logout() {
    userStore.logout();

    // localStorage.removeItem("user");
  }

  register(user) {
    console.log("Registration is under construction!");
    // return axios.post(API_URL + 'signup', {
    //   username: user.username,
    //   email: user.email,
    //   password: user.password
    // });
  }
}

export default new AuthService();
