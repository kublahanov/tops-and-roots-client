import { useUserStore } from "stores/userStore";

class AuthService {
  login(user) {
    const userStore = useUserStore();

    if (
      user.login.value === "admin@localhost" &&
      user.password.value === "1234567"
    ) {
      // localStorage.setItem("user", JSON.stringify(user));
      userStore.login();
      console.log("User is logged in!");

      return user;
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
    const userStore = useUserStore();

    userStore.logout();

    // localStorage.removeItem("user");
  }

  isAuthenticated() {
    const userStore = useUserStore();

    return userStore.isAuthenticated;
  }

  isGuest() {
    const userStore = useUserStore();

    return userStore.isGuest;
  }

  getUserName() {
    const userStore = useUserStore();

    if (userStore.isGuest) {
      return null;
    }

    const user = userStore.getUserData;

    return { name: user.name, surname: user.surname };
  }

  register(user) {
    console.log("Registration is under construction!");
    // return axios.post(API_URL + 'signup', {
    //   username: user.username,
    //   email: user.email,
    //   password: user.password
    // });
  }

  getUserData() {
    const userStore = useUserStore();

    if (userStore.isGuest) {
      return null;
    }

    const user = userStore.getUserData;

    return { id: user.id, name: user.name, surname: user.surname };
  }

  getUserFriends() {
    const userStore = useUserStore();

    if (userStore.isGuest) {
      return null;
    }

    return userStore.getUserFriends;
  }
}

export default new AuthService();
