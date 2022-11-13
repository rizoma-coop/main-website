import $ from "jquery";
import Clipboard from "clipboard/dist/clipboard.min";
import "./calendar";

/** Set tooltips **/

var clipboard = new Clipboard(".copy-text");

function setTooltip(btn, message) {
  $(btn).attr("aria-label", "Copied!");
  $(btn).mouseenter(function () {
    $(this).attr("aria-label", "Click to copy");
  });
}

clipboard.on("success", function (e) {
  setTooltip(e.trigger, "Copied!");
});

clipboard.on("error", function (e) {
  setTooltip(e.trigger, "Failed!");
});

/** Stripe select **/

var stripe = Stripe(
  "pk_live_51HwqrqE0tUVCdaMTnxARNH7Bl2mN5VNjDkzceBBbSOIfp1DrO23l5uCjrhQOc6FEQ0GTFWssTLm8A9DvFkJ7xi7700U0yTGBiG"
);

const donationIds = {
  10: "price_1HwrQ7E0tUVCdaMTJk3Uy4ej",
  20: "price_1HwrQ7E0tUVCdaMTFtSfAkgU",
  50: "price_1Hzm7mE0tUVCdaMTS1sct3Jh",
  75: "price_1Hzm7uE0tUVCdaMTFVKi7WIF",
  100: "price_1Hzm9BE0tUVCdaMTWekMnpjY",
  200: "price_1Hzm9KE0tUVCdaMTrOjT5EOc",
  500: "price_1Hzm9RE0tUVCdaMThLMISE5u",
  1000: "price_1HzmBbE0tUVCdaMT70VplxGr",
};

$("#select-amount").on("change", function () {
  $("#submit-donation").prop("disabled", $(this).val() === "");
  $("#donate-amount").text(
    $(this).val() === "" ? "" : $(this).find("option:selected").text()
  );
});

$("#submit-donation").on("click", function () {
  const option = $("#select-amount").val();
  if (option && donationIds[option]) {
    stripe
      .redirectToCheckout({
        lineItems: [{ price: donationIds[option], quantity: 1 }],
        mode: "payment",
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfill-orders
        successUrl: "https://www.rizomacoop.pt/obrigado",
        cancelUrl: "https://www.rizomacoop.pt",
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  }
});
