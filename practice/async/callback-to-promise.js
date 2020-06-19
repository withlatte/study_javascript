// callback 지옥 예제 : 엉망인 코드를 고쳐나가는 식으로 알려줄 것

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error(`${id} is not found`));
      }
    }, 1000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "엘리", role: "관리자" });
      } else {
        onError(new Error(`access denied`));
      }
    }, 2000);
  }
}

const userStorage = new UserStorage();
const id = prompt("username : ");
const password = prompt("password : ");

// const UserStorage = new Promise((resolve, reject) => {});

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        console.log(userWithRole.name, userWithRole.role);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
