// script to submit contact forms to ghost-contact api

// get contact form
const contactForm = document.querySelector("#contact-form");

// bind onsubmit to function
if (contactForm) {
  contactForm.onsubmit = submit;
}

async function submit(e) {
  try {
    e.preventDefault();
    // get recaptcha token
    const token = await validateCaptcha();
    if (token) {
      // get form data
      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      const message = document.querySelector("#message");

      const data = {
        name: name.value,
        email: email.value,
        message: message.value,
        recipient: contactRecipient,
        reCaptcha: {
          token,
          secretKey: reCaptchaSecretKey,
        },
        mailgunDomain,
        baseUrl,
        logoUrl,
      };

      // post form data
      axios({
        method: "post",
        url: contactUrl,
        data,
      })
        .then((res) => {
          name.value = "";
          email.value = "";
          message.value = "";
          addSnackBar("Message succefully sent", "success");
        })
        .catch((err) => {
          addSnackBar(
            "Oops! Something went wrong. Please refresh the browser and try again.",
            "error"
          );
        });
    }
  } catch (error) {
    console.log(error);
    addSnackBar(
      "Oops! Something went wrong. Please refresh the browser and try again.",
      "error"
    );
  }
}

// validate recaptcha with google
function validateCaptcha() {
  return new Promise((res, rej) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(reCaptchaSiteKey, { action: "submit" })
        .then((token) => {
          return res(token);
        });
    });
  });
}
