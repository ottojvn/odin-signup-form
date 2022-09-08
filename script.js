function passwordMatch() {
  return passwordField.value === confirmField.value;
}

function setMatchStyle(situation) {
  const mismatchText = document.querySelector("#mismatch-error");

  const validSituations = {
    match: () => {
      mismatchText.classList.add("invisible");
      confirmField.setCustomValidity("");
    },
    mismatch: () => {
      mismatchText.classList.remove("invisible");
      confirmField.setCustomValidity("Password mismatch.");
    },
  };

  validSituations[situation]();
}

function checkPasswordMatch() {
  if (!passwordMatch()) {
    setMatchStyle("mismatch");
  } else {
    setMatchStyle("match");
  }
}

function verifyPassword() {
  const password = this.value;

  const checkLength = () => {
    const hasMinLength = () => {
      const minLength = document
        .querySelector("#password")
        .getAttribute("min-length");
      return password.length >= minLength;
    };

    let symbol;
    if (hasMinLength()) {
      symbol = " ✅";
    } else {
      symbol = " ❌";
    }

    const lengthReq = document.querySelector("#length-req");
    if (!lengthReq.textContent.endsWith(".")) {
      lengthReq.textContent = lengthReq.textContent.slice(0, -2);
    }
    lengthReq.textContent += symbol;
  };

  const checkSpecialChar = () => {
    const hasSpecialChar = () =>
      "!@#$%&*".split("").some((ch) => password.includes(ch));

    let symbol;
    if (hasSpecialChar()) {
      symbol = " ✅";
    } else {
      symbol = " ❌";
    }

    const specialReq = document.querySelector("#special-char-req");
    if (!specialReq.textContent.endsWith(".")) {
      specialReq.textContent = specialReq.textContent.slice(0, -2);
    }
    specialReq.textContent += symbol;
  };

  const checkAlphaChar = () => {
    const hasAlphaChar = () =>
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        .split("")
        .some((ch) => password.includes(ch));

    let symbol;
    if (hasAlphaChar()) {
      symbol = " ✅";
    } else {
      symbol = " ❌";
    }

    const alphaReq = document.querySelector("#alpha-req");
    if (!alphaReq.textContent.endsWith(".")) {
      alphaReq.textContent = alphaReq.textContent.slice(0, -2);
    }
    alphaReq.textContent += symbol;
  };

  const checkNumber = () => {
    const hasNumber = () =>
      "0123456789".split("").some((ch) => password.includes(ch));

    let symbol;
    if (hasNumber()) {
      symbol = " ✅";
    } else {
      symbol = " ❌";
    }

    const numberReq = document.querySelector("#number-req");
    if (!numberReq.textContent.endsWith(".")) {
      numberReq.textContent = numberReq.textContent.slice(0, -2);
    }
    numberReq.textContent += symbol;
  };

  checkLength();
  checkSpecialChar();
  checkAlphaChar();
  checkNumber();
}

const passwordField = document.querySelector("#password");
passwordField.addEventListener("input", verifyPassword);
const confirmField = document.querySelector("#password-confirmation");
confirmField.addEventListener("input", () => {
  checkPasswordMatch();
  passwordField.addEventListener("input", checkPasswordMatch);
});
