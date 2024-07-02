$(document).ready(function () {
  $("#profileImage, .dropdown-icon").on("click", function () {
    $(this).parent().find(".dropdown-menu").toggleClass("show");
  });
});

$(document).click(function (event) {
  if (
    !$(event.target).closest(".profile-dropdown").length &&
    !$(event.target).closest(".dropdown-icon").length
  ) {
    $(".dropdown-menu").removeClass("show");
  }
});

// // Initialize chart

var ctx = document.getElementById("myPieChart").getContext("2d");
var myPieChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: true,
    datasets: [
      {
        data: [9, 5, 4],
        backgroundColor: ["#FF003D", "#C00000", "#FFB169"],
        borderColor: ["#FF003D", "#C00000", "#FFB169"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      tooltip: {
        callbacks: {
          labels: function (context) {
            const label = context.labels || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  },
});

// // Custom legend functionality
document
  .querySelectorAll(".custom-legend div")
  .forEach(function (legend, index) {
    legend.addEventListener("click", function () {
      const meta = myPieChart.getDatasetMeta(0);
      meta.data[index].hidden = !meta.data[index].hidden;
      myPieChart.update();
    });
  });

//   attendece card working

document.addEventListener("DOMContentLoaded", function () {
  // Sample data fetching function
  function fetchAttendanceData() {
    // This is where you will replace with your backend API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          members: 13,
          congregation: 22,
        });
      }, 200);
    });
  }

  // Function to update the chart
  function updateChart(data) {
    const membersBar = document.getElementById("members-bar");
    const congregationBar = document.getElementById("congregation-bar");
    const membersValue = document.getElementById("members-value");
    const congregationValue = document.getElementById("congregation-value");

    membersBar.style.height = `${data.members * 4}px`; // Adjust multiplier as needed
    membersValue.textContent = data.members;

    congregationBar.style.height = `${data.congregation * 4}px`; // Adjust multiplier as needed
    congregationValue.textContent = data.congregation;
  }

  // Fetch data and update chart
  fetchAttendanceData().then((data) => {
    updateChart(data);
  });
});

// FORM CARD

var shh = document.getElementById("myChart");
var myChart = new Chart(shh, {
  type: "doughnut",
  data: {
    labels: ["ALERTS", "Other Applications"],
    datasets: [
      {
        label: "# of Votes",
        data: [11, 47],
        backgroundColor: ["red", "#f0f0f0"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 82,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
  },
});

// recent contacts

const contacts = [
  {
    name: "Chloe Charroll",
    email: "duqy@mailinator.com",
    phone: "03108406323",
    status: "active",
    type: "Visiting Member",
  },
  {
    name: "Muhammad Ar",
    email: "duqy@mailinator.com",
    phone: "03108406323",
    status: "active",
    type: "Visiting Member",
  },
  {
    name: "Ezra St Juste",
    email: "duqy@mailinator.com",
    phone: "03108406323",
    status: "inactive",
    type: "Visiting Member",
  },
  {
    name: "Bilawal Amanat",
    email: "duqy@mailinator.com",
    phone: "03108406323",
    status: "active",
    type: "Visiting Member",
  },
  {
    name: "Sam Safdar",
    email: "duqy@mailinator.com",
    phone: "03108406323",
    status: "inactive",
    type: "Visiting Member",
  },
  {
    name: "Miller Johns",
    email: "duqy@mailinator.com",
    phone: "03108406323",
    status: "active",
    type: "Visiting Member",
  },
  {
    name: "Gen-O-Joe",
    email: "duqy@mailinator.com",
    phone: "03108406323",
    status: "active",
    type: "Visiting Member",
  },
  {
    name: "Haria Jr. Colea",
    email: "duqy@mailinator.com",
    phone: "03108406323",
    status: "active",
    type: "Visiting Member",
  },
];

function loadContacts() {
  const tbody = document.getElementById("contacts-table-body");
  tbody.innerHTML = "";

  contacts.forEach((contact) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${contact.name}</td>
      <td><a href="mailto:${contact.email}">${contact.email}</a></td>
      <td>${contact.phone}</td>
      <td class="${
        contact.status === "active" ? "status-active" : "status-inactive"
      }">${contact.status}</td>
      <td>${contact.type}</td>
    `;
    tbody.appendChild(row);
  });
}

document.getElementById("refresh-contacts").addEventListener("click", () => {
  loadContacts();
});

window.onload = () => {
  loadContacts();
};
