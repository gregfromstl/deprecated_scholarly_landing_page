const openForm = (e) => {
  const form = document.getElementById("form");
  const overlay = document.getElementById("overlay");
  form.classList.add("active");
  overlay.classList.add("active");
};
const closeModals = (e) => {
  const overlay = document.getElementById("overlay");
  const modals = document.getElementsByClassName("modal");
  for (modal of modals) {
    modal.classList.remove("active");
  }
  overlay.classList.remove("active");
};
const submitEmail = (e) => {
  email = document.getElementById("email").value;
  const form = document.getElementById("form");
  form.classList.remove("active");
  fetch("https://scholarly-backend.uc.r.appspot.com/leads", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, source: "landing page" }),
  })
    .then(() => {
      const confirmation = document.getElementById("confirmation");
      confirmation.classList.add("active");
    })
    .catch((error) => {
      const confirmation = document.getElementById("failure");
      confirmation.classList.add("active");
    });
};

(() => {
  const join = document.getElementById("join");
  join.addEventListener("click", openForm);
  const close = document.getElementById("overlay");
  close.addEventListener("click", closeModals);
  const submit = document.getElementById("submit");
  submit.addEventListener("click", submitEmail);
})();
