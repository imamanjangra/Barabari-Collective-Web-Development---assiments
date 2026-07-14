document.getElementById("deposit-btn").onclick = () => {
  clearErrors();

  const amount = Number(document.getElementById("deposit-amount").value);

  if (amount <= 0) {
    showError("deposit-error", "Enter valid amount");

    return;
  }

  currentUser.balance += amount;

  allTransactions.push({
    transactionId: "TXN-" + Date.now(),

    accountId: currentUser.accountId,

    type: "deposit",

    amount,

    date: new Date().toISOString(),
  });

  updateUser();
};

document.getElementById("withdraw-btn").onclick = () => {
  clearErrors();

  const amount = Number(document.getElementById("withdraw-amount").value);

  if (amount <= 0) {
    showError("withdraw-error", "Enter valid amount");

    return;
  }

  if (amount > currentUser.balance) {
    showError("withdraw-error", "Insufficient funds");

    return;
  }

  currentUser.balance -= amount;

  allTransactions.push({
    transactionId: "TXN-" + Date.now(),

    accountId: currentUser.accountId,

    type: "withdrawal",

    amount,

    date: new Date().toISOString(),
  });

  updateUser();
};

function updateUser() {
  const index = allUsers.findIndex(
    (u) => u.accountId === currentUser.accountId,
  );

  allUsers[index] = currentUser;

  saveData();

  updateDashboardUI();

  renderTransactions();

  calculateSummaries();
}
