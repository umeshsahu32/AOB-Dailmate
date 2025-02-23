const industries = [
  {
    id: "Lending",
    title: "Lending",
    icon: "assets/icons/lending.png",
    services: [
      "Personal Loans",
      "Business Loans",
      "Credit Card",
      "Cross-sell",
      "Early Bucket Collection",
      "Convert to EMI",
      "Welcome Calls",
    ],
  },
  {
    id: "Education",
    title: "Education",
    icon: "assets/icons/education.png",
    services: [
      "Lead Qualification",
      "Reactivation",
      "Up-sell and Cross Sell",
      "Surveys",
      "Event Registration and Reminders",
      "Feedback",
      "End-to-end Sell",
    ],
  },
  {
    id: "Banking",
    title: "Banking",
    icon: "assets/icons/banking.png",
    services: [
      "Account Opening",
      "Account Activation",
      "Account Reactivation and Re-KYC",
      "Up-sell and Cross Sell",
      "Virtual Relationship Manager",
      "Transaction Enquiry",
      "Card Blocking",
      "Debit/Credit Card Activation",
      "Internet Banking Assistant",
    ],
  },
  {
    id: "Insurance",
    title: "Insurance",
    icon: "assets/icons/insurance.png",
    services: [
      "Policy Copy Assistance Opening",
      "Claim Submission",
      "Claim Status Assistance",
      "Policy Discrepancies Assistance",
    ],
  },
  {
    id: "Travel and Tour",
    title: "Travel and Tour",
    icon: "assets/icons/travel.png",
    services: [
      "Booking Confirmation",
      "Booking Status Enquiry",
      "Booking Modification / Cancellation",
      "Refund Process",
      "Resolving Itinerary Errors",
    ],
  },
  {
    id: "Retail",
    title: "Retail",
    icon: "assets/icons/retail.png",
    services: [
      "Drive Stores Walk-Ins",
      "Reactivate old customers",
      "Feedback Calls",
    ],
  },
  {
    id: "Brokerage",
    title: "Brokerage",
    icon: "assets/icons/brokerage.png",
    services: [
      "Account Opening",
      "Account Activation",
      "Account Reactivation and Re-KYC",
      "Control Tower",
      "Trading Limits or Charging Assistance",
      "Account Funding or Withdrawal Resolution",
      "Up-sell and Cross Sell",
      "Delivery Escalations",
    ],
  },

  {
    id: "Consumer Electronics",
    title: "Consumer Electronics",
    icon: "assets/icons/electronics.png",
    services: [
      "Warranty Enquiry",
      "Service center Enquiry",
      "Installation Support",
      "Repair Requests or Service Escalation  ",
      "Refund Process ",
    ],
  },

  {
    id: "Logistic and E-Commerce",
    title: "Logistic and E-Commerce",
    icon: "assets/icons/logistic.png",
    services: [
      "Abandoned Cart or Assisted Sales",
      "Non-Delivery Returns",
      "Blue-Collar Workforce Hiring or Management",
      "Seller Onboarding and Management",
      "Order Status Inquiry",
      "Refund/Replacement Process",
      "Control Tower",
      "Delivery Escalations or Address Updates",
    ],
  },

  {
    id: "Automotive",
    title: "Automotive",
    icon: "assets/icons/automotive.png",
    services: [
      "Drive Showrooms Walk-Ins",
      "Schedule Test Drives",
      "Feedback Calls",
      "Service Reminders",
    ],
  },
];

const capsulesContainer = document.querySelector(".capsules");
const content = document.querySelector(".content");
const industryIcon = document.getElementById("industry-icon");
const industryTitle = document.getElementById("industry-title");
const industryServices = document.getElementById("industry-services");

industries.forEach((industry, index) => {
  const capsule = document.createElement("div");
  capsule.classList.add("capsule");
  capsule.textContent = industry.title;
  capsule.addEventListener("click", () => {
    document
      .querySelectorAll(".capsule")
      .forEach((c) => c.classList.remove("active"));
    capsule.classList.add("active");
    updateContent(index);
  });
  capsulesContainer.appendChild(capsule);
});

function updateContent(index) {
  const industry = industries[index];
  content.classList.add("hidden");
  setTimeout(() => {
    industryIcon.src = industry.icon;
    industryIcon.alt = `${industry.title} Icon`;
    industryTitle.textContent = industry.title;
    industryServices.innerHTML = "";
    industry.services.forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      industryServices.appendChild(li);
    });
    content.classList.remove("hidden");
  }, 300);
}

// Initialize with the first industry
document.querySelectorAll(".capsule")[0].classList.add("active");
updateContent(0);
