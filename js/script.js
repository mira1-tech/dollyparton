/* =========================

   MOBILE MENU

========================= */

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("show");

    });

}

/* =========================

   ACTIVE NAVIGATION

========================= */

const currentPage =

    window.location.pathname.split("/").pop() || "index.html";

const navLinks =

    document.querySelectorAll("#mainNav a");

navLinks.forEach(function (link) {

    const linkPage =

        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});

/* =========================

   DONATIONS

========================= */

function showDonationPayment() {

    const amount =

        document.getElementById("donationAmount")?.value;

    if (!amount || amount <= 0) {

        alert("Please enter a valid donation amount.");

        return;

    }

    const displayAmount =

        document.getElementById("displayDonationAmount");

    const paymentSection =

        document.getElementById("donationPayment");

    if (displayAmount) {

        displayAmount.textContent =

            "$" + Number(amount).toFixed(2);

    }

    if (paymentSection) {

        paymentSection.style.display = "block";

        paymentSection.scrollIntoView({

            behavior: "smooth"

        });

    }

}

/* =========================

   INVITATION PAYMENT

========================= */

function selectPaymentOption() {

    const selected =

        document.querySelector(

            'input[name="paymentOption"]:checked'

        );

    const partPaymentBox =

        document.getElementById("partPaymentBox");

    if (!selected || !partPaymentBox) {

        return;

    }

    if (selected.value === "part") {

        partPaymentBox.style.display = "block";

    } else {

        partPaymentBox.style.display = "none";

        const input =

            document.getElementById("partPaymentAmount");

        if (input) {

            input.value = "";

        }

    }

}

function continueInvitationPayment() {

    const selected =

        document.querySelector(

            'input[name="paymentOption"]:checked'

        );

    if (!selected) {

        alert("Please select a payment option.");

        return;

    }

    let amount;

    if (selected.value === "full") {

        amount = 2500;

    } else {

        const partPayment =

            document.getElementById(

                "partPaymentAmount"

            ).value;

        if (!partPayment || partPayment <= 0) {

            alert("Please enter a valid payment amount.");

            return;

        }

        if (Number(partPayment) >= 2500) {

            alert(

                "For the full $2500 invitation fee, please select Pay in Full."

            );

            return;

        }

        amount = Number(partPayment);

    }

    const amountDisplay =

        document.getElementById("invitationAmount");

    const paymentSection =

        document.getElementById("invitationPayment");

    if (amountDisplay) {

        amountDisplay.textContent =

            "$" + amount.toFixed(2);

    }

    if (paymentSection) {

        paymentSection.style.display = "block";

        paymentSection.scrollIntoView({

            behavior: "smooth"

        });

    }

}

/* =========================

   BITCOIN COPY

========================= */

function copyBitcoinAddress() {

    const element =

        document.getElementById("bitcoinAddress");

    if (!element) return;

    const address =

        element.textContent.trim();

    if (

        address ===

        "Bitcoin address will be added here"

    ) {

        alert("Bitcoin address has not been added yet.");

        return;

    }

    navigator.clipboard.writeText(address);

    alert("Bitcoin address copied!");

}

function copyInvitationBitcoinAddress() {

    const element =

        document.getElementById(

            "invitationBitcoinAddress"

        );

    if (!element) return;

    const address =

        element.textContent.trim();

    if (

        address ===

        "Bitcoin address will be added here"

    ) {

        alert("Bitcoin address has not been added yet.");

        return;

    }

    navigator.clipboard.writeText(address);

    alert("Bitcoin address copied!");

}