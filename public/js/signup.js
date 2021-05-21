const openForm = (e) => {
  const form = document.getElementById("form");
  const overlay = document.getElementById("overlay");
  form.classList.add("active");
  overlay.classList.add("active");
};
const closeModals = (e) => {
  const form = document.getElementById("form");
  const overlay = document.getElementById("overlay");
  const confirmation = document.getElementById("confirmation");
  confirmation.classList.remove("active");
  form.classList.remove("active");
  overlay.classList.remove("active");
};
const submitEmail = (e) => {
  console.log(document.getElementById("email").value);
  const confirmation = document.getElementById("confirmation");
  confirmation.classList.add("active");
  const form = document.getElementById("form");
  form.classList.remove("active");
};

(() => {
  const join = document.getElementById("join");
  join.addEventListener("click", openForm);
  const close = document.getElementById("overlay");
  close.addEventListener("click", closeModals);
  const submit = document.getElementById("submit");
  submit.addEventListener("click", submitEmail);
})();
