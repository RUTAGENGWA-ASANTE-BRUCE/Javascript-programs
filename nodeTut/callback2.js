console.log("Before");
// let sum = add(1, 3);
// console.log(sum);
// function add(a, b) {
//   return a + b;
// }

getUser(1, (user) => {
  console.log(user);
  getRepositories(user.gitHubUsername, (repos) => {
    console.log(repos);
  });
});

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, gitHubUsername: "Mwiz" });
  }, 2000);
}
function getRepositories(username, callback) {
  setTimeout(() => {
    callback({ id: username, repos: [1, 2, 3] });
  }, 2000);
}
console.log("After");
function makeCouple(name1,name2,callback) {
  setTimeout(() => {
    callback(console.log(`couple is ${name1} and ${name2}`));
  },2000);
}