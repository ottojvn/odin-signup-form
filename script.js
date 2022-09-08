function passwordMatch() {
  const passwordField = document.querySelector("#password");

  return passwordField.value === confirmField.value;
}

function setPasswordStyle(situation) {
  const mismatchText = document.querySelector("#mismatch-error");

  const validSituations = {
    match: () => {
      mismatchText.classList.remove("invisible");
      confirmField.setCustomValidity("Password mismatch.");
    },
    mismatch: () => {
      mismatchText.classList.add("invisible");
      confirmField.setCustomValidity("");
    },
  };

  validSituations[situation]();
}

function verifyPassword() {
  if (!passwordMatch()) {
    setPasswordStyle("mismatch");
  } else {
    setPasswordStyle("match");
  }
}

const confirmField = document.querySelector("#password-confirmation");
confirmField.addEventListener("focusout", verifyPassword);
