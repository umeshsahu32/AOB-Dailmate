const slidesData = [
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

function generateCarousel(slides) {
  const slider = document.getElementById("slider");
  const pillContainer = document.getElementById("pillContainer");
  let radioInputs = "";
  let slideLabels = "";
  let pills = "";
  let dynamicStyles = "";

  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
    const isChecked = index === 0 ? "checked" : "";
    const isActive = isChecked ? "active" : "";

    // Pills (Navigation)
    pills += `<div class="nav-pill ${isActive}" data-slide="${slideNumber}">${slide.title}</div>`;

    // Radio Input
    radioInputs += `<input type="radio" name="slider" id="s${slideNumber}" ${isChecked} />`;

    // Slide Labels with dynamic content
    slideLabels += `
            <label for="s${slideNumber}" id="slide${slideNumber}" class="slide">
              <div class="slide-content">
                <div class="slide-title">
                    <div class="slide-icon">
                      <img src="${slide.icon}" alt="${slide.title}" />
                    </div>
                    <h2 class="title">${slide.title}</h2>
                </div>
                <ul class="slide-services">
                    ${slide.services
                      .map((service) => `<li>${service}</li>`)
                      .join("")}
                    </ul>
                </div>
            </label>`;
  });

  slider.innerHTML = radioInputs + slideLabels;
  pillContainer.innerHTML = pills;

  // Ensure the first slide and pill are active by default
  document.querySelector(".nav-pill").classList.add("active");
  document.querySelector(".slide").classList.add("active-slide");

  // Generate dynamic CSS for 3D effect
  const style = document.createElement("style");
  for (let current = 1; current <= slides.length; current++) {
    for (let position = 0; position < slides.length; position++) {
      let relativePos = position - (current - 1);
      if (relativePos < 0) relativePos += slides.length;
      if (relativePos >= slides.length) relativePos -= slides.length;

      let adjustedPos = relativePos;
      if (adjustedPos > slides.length / 2) {
        adjustedPos = adjustedPos - slides.length;
      }

      let translateX, translateZ, shadow;
      if (adjustedPos === 0) {
        translateX = "0";
        translateZ = "0";
        shadow =
          "0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19)";
      } else if (Math.abs(adjustedPos) === 1) {
        translateX = adjustedPos * 15 + "%";
        translateZ = "-100px";
        shadow =
          "0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2)";
      } else {
        translateX = (adjustedPos > 0 ? 30 : -30) + "%";
        translateZ = "-200px";
        shadow = "0 1px 4px 0 rgba(0, 0, 0, 0.37)";
      }

      const targetSlide = position + 1;
      dynamicStyles += `
              #s${current}:checked ~ #slide${targetSlide} {
                box-shadow: ${shadow};
                transform: translate3d(${translateX}, 0, ${translateZ});
              }
            `;
    }
  }

  style.textContent = dynamicStyles;
  document.head.appendChild(style);

  // Update slides dynamically when pills are clicked
  const pillElements = document.querySelectorAll(".nav-pill");
  pillElements.forEach((pill) => {
    pill.addEventListener("click", function () {
      const slideNumber = this.getAttribute("data-slide");
      const radioInput = document.getElementById(`s${slideNumber}`);

      radioInput.checked = true;

      pillElements.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");

      document.querySelectorAll(".slide").forEach((slide) => {
        slide.classList.remove("active-slide");
      });
      document
        .getElementById(`slide${slideNumber}`)
        .classList.add("active-slide");
    });
  });

  // Update slides dynamically when labels are clicked
  const slideLabels2 = document.querySelectorAll('label[for^="s"]');

  slideLabels2.forEach((label) => {
    label.addEventListener("click", function () {
      const slideNumber = this.getAttribute("for").replace("s", ""); // Get slide number
      const radioInput = document.getElementById(`s${slideNumber}`);

      radioInput.checked = true;

      // Remove active class from all pills and slides
      pillElements.forEach((p) => p.classList.remove("active"));
      slideLabels2.forEach((s) => s.classList.remove("active-slide"));

      // Add active class to the clicked slide and corresponding pill
      this.classList.add("active-slide");
      document
        .querySelector(`.nav-pill[data-slide="${slideNumber}"]`)
        .classList.add("active");
    });
  });
}

generateCarousel(slidesData);
