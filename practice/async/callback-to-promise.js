// callback 지옥 예제 : 엉망인 코드를 고쳐나가는 식으로 알려줄 것

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy") ||
          (id === "by" && password === "by")
        ) {
          resolve(id);
        } else {
          reject(new Error(`${id} is not found`));
        }
      }, 1000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "엘리", role: "관리자" });
        }
        if (user === "coder") {
          resolve({ name: "코더", role: "사용자" });
        } else {
          reject(new Error(`access denied`));
        }
      }, 2000);
    });
  }
}

const userStorage = new UserStorage();

const id = prompt("username : ");
const password = prompt("password : ");

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`${user.name} logged in as ${user.role}`))
  .catch(alert);
