function switchView(viewId) {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.classList.add("hidden");

    section.classList.remove("active");
  });

  const target = document.getElementById(viewId);

  target.classList.remove("hidden");

  target.classList.add("active");
}

function showError(elementId, message) {
  const element = document.getElementById(elementId);

  element.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });
}

function updateDashboardUI() {
  if (!currentUser) return;

  document.getElementById("display-name").textContent = currentUser.name;

  document.getElementById("display-email").textContent = currentUser.email;

  document.getElementById("display-account-id").textContent =
    currentUser.accountId;

  document.getElementById("display-balance").textContent = currentUser.balance;
}

function renderTransactions() {
  const container = document.getElementById("transactions-list");

  container.innerHTML = "";

  if (!currentUser) return;

  const userTransactions = allTransactions.filter(
    (transaction) => transaction.accountId === currentUser.accountId,
  );

  userTransactions.forEach((transaction) => {
    const div = document.createElement("div");

    div.className = "transaction";

    const date = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(transaction.date));

    div.innerHTML = `


        <div>

            <p>
            ${transaction.type}
            </p>

            <small>
            ${date}
            </small>

        </div>



        <strong class="${transaction.type}">

        ${transaction.type === "deposit" ? "+" : "-"}
        ₹${transaction.amount}

        </strong>



        `;

    container.appendChild(div);
  });
}

function calculateSummaries() {
  if (!currentUser) return;

  const transactions = allTransactions.filter(
    (t) => t.accountId === currentUser.accountId,
  );

  const summary = transactions.reduce(
    (acc, item) => {
      if (item.type === "deposit") {
        acc.deposit += item.amount;
      } else {
        acc.withdraw += item.amount;
      }

      return acc;
    },

    {
      deposit: 0,
      withdraw: 0,
    },
  );

  document.getElementById("summary-total-deposited").textContent =
    summary.deposit;

  document.getElementById("summary-total-withdrawn").textContent =
    summary.withdraw;
}
