let allUsers = [];

let allTransactions = [];

let currentUser = null;

const STORAGE_KEYS = {
  users: "bank_users",

  transactions: "bank_transactions",

  activeUser: "bank_active_user",
};

function saveData() {
  localStorage.setItem(
    STORAGE_KEYS.users,

    JSON.stringify(allUsers),
  );

  localStorage.setItem(
    STORAGE_KEYS.transactions,

    JSON.stringify(allTransactions),
  );
}

function loadData() {
  const users = localStorage.getItem(STORAGE_KEYS.users);

  const transactions = localStorage.getItem(STORAGE_KEYS.transactions);

  if (users) {
    allUsers = JSON.parse(users);
  }

  if (transactions) {
    allTransactions = JSON.parse(transactions);
  }
}

function loadSession() {
  const accountId = localStorage.getItem(STORAGE_KEYS.activeUser);

  if (accountId) {
    currentUser = allUsers.find((user) => user.accountId === accountId);

    if (currentUser) {
      updateDashboardUI();

      renderTransactions();

      calculateSummaries();

      switchView("dashboard");
    }
  }
}

function logout() {
  currentUser = null;

  localStorage.removeItem(STORAGE_KEYS.activeUser);

  switchView("login-page");
}

document.addEventListener(
  "DOMContentLoaded",

  () => {
    loadData();

    loadSession();

    if (!currentUser) {
      switchView("signup-page");
    }
  },
);
