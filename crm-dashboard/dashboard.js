//Dashboards Button
const overviewLink = document.querySelector(
  ".dashboard__container__mainBucket header ul li #OVERVIEW"
);
const casaLink = document.querySelector(
  ".dashboard__container__mainBucket header ul li #CASA"
);
const loansLink = document.querySelector(
  ".dashboard__container__mainBucket header ul li #Loans"
);
const termdepositsLink = document.querySelector(
  ".dashboard__container__mainBucket header ul li #Term-Deposits"
);
const collateralLink = document.querySelector(
  ".dashboard__container__mainBucket header ul li #Collaterals"
);
const cardsLink = document.querySelector(
  ".dashboard__container__mainBucket header ul li #Cards"
);
const allLinks = document.querySelectorAll("a");
const allForm = document.querySelectorAll(".form");
const navLinks = document.querySelectorAll(".navlink");

//Dashboards
const overviewDashboard = document.getElementById("OVERVIEW");
const casaDashboard = document.getElementById("CASA");
const loansDashboard = document.getElementById("Loans");
const termdepositsDashboard = document.getElementById("Term-Deposit");
const collateralDashboard = document.getElementById("Collaterals");
const cardsDashboard = document.getElementById("Cards");

const dashboardheading = document.getElementById("dashboardheading");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    navLinks.forEach((navlink) => {
      navlink.className = navlink.className.replace(" active", "");
    });
    e.currentTarget.className += " active";

    const title = e.target.getAttribute("id");
    dashboardheading.innerText = title;
    if (title === "OVERVIEW") {
      dashboardheading.innerHTML = "Customer Portfolio";
    }

    allForm.forEach((form) => {
      if (form.getAttribute("id") === title) {
        form.style.display = "flex";
        console.log(title);
      } else {
        form.style.display = "none";
      }
    });
  });
});
