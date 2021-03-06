function getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: id, gitHubUsername: "Mwiz" });
        // reject(new Error("Promise failed"));
      }, 2000);
    });
  }
  function getRepositories(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: username, repos: [1, 2, 3] });
      }, 2000);
    });
  }
  function getCommits(repo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          repo: repo,
          commits: ["commit1", "commit2", "commit3"],
        });
      }, 1000);
    });
  }
  
  getUser(1)
    .then((user) => getRepositories(user.gitHubUsername))
    .then((repos) => getCommits(repos.repos[1]))
    .then((commits) => {
      console.log(commits);
    })
    .catch((error) => console.log(error));