document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  clearErrors();

  const name = document.getElementById("signup-name").value.trim();

  const email = document.getElementById("signup-email").value.trim();

  const username = document.getElementById("signup-username").value.trim();

  const password = document.getElementById("signup-password").value;

  const confirmPassword = document.getElementById(
    "signup-confirm-password",
  ).value;

  if (password !== confirmPassword) {
    showError("signup-error", "Passwords do not match");

    return;
  }

  const exists = allUsers.find(
    (user) => user.email === email || user.username === username,
  );

  if (exists) {
    showError("signup-error", "User already exists");

    return;
  }

  const newUser = {
    accountId: "ACC-" + Math.floor(Math.random() * 10000),

    name,

    username,

    email,

    password,

    balance: 0,
  };

  allUsers.push(newUser);

  saveData();

  alert("Account created successfully");

  switchView("login-page");
});

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  clearErrors();

  const email = document.getElementById("login-email").value;

  const password = document.getElementById("login-password").value;

  const user = allUsers.find(
    (u) => u.email === email && u.password === password,
  );

  if (!user) {
    showError("login-error", "Invalid credentials");

    return;
  }

  currentUser = user;

  localStorage.setItem(
    "bank_active_user",

    currentUser.accountId,
  );

  updateDashboardUI();

  renderTransactions();

  calculateSummaries();

  switchView("dashboard");
});

document.getElementById("show-login").onclick = () => {
  switchView("login-page");
};

document.getElementById("show-signup").onclick = () => {
  switchView("signup-page");
};

document.getElementById("logout-btn").onclick = () => {
  logout();
};
