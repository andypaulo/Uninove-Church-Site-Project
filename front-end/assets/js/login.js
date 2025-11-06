import { showError, hideError } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("registerEmail");
  const password = document.getElementById("registerPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");

  function selectTab(tabName) {
    document.getElementById("loginContent").style.display = "none";
    document.getElementById("registerContent").style.display = "none";

    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("registerTab").classList.remove("active");

    document.getElementById(tabName + "Content").style.display = "block";
    document.getElementById(tabName + "Tab").classList.add("active");

    registerForm.reset();
    loginForm.reset();
  }
  document
    .getElementById("loginTab")
    .addEventListener("click", () => selectTab("login"));
  document
    .getElementById("registerTab")
    .addEventListener("click", () => selectTab("register"));

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      confirmPassword: confirmPassword.value.trim(),
      phone: phone.value.trim(),
      address: address.value.trim(),
    };

    if (!formData.firstName) {
      showError("O campo de nome e sobrenome é obrigatório");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showError("As senhas não coincidem");
      return;
    }

    hideError();

    console.log("Dados do formulário:", formData);

    registerForm.reset();

    alert("Cadastro realizado com sucesso!");
  });

  document.getElementById("closeError").addEventListener("click", hideError);

  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length >= 2) {
      value = "(" + value.substring(0, 2) + ") " + value.substring(2);
    }
    if (value.length >= 10) {
      value = value.substring(0, 10) + "-" + value.substring(10, 14);
    }

    e.target.value = value;
  });

  const birthDateInput = document.getElementById("birthDate");
  birthDateInput.addEventListener("change", function () {
    const birthDate = new Date(this.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    if (birthDate > today) {
      showError("Ainda não nascido");
      return;
    }
    if (age < 13) {
      showError("Você precisa ter pelo menos 13 anos para se cadastrar.");
      this.value = "";
      return;
    }
    if (age > 130) {
      showError("Há algo de errado com sua idade");
      return;
    }
  });
});
