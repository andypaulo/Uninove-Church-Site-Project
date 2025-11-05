function selectTab(tabName) {
    document.getElementById('loginContent').style.display = "none";
    document.getElementById('registerContent').style.display = "none";

    document.getElementById('loginTab').classList.remove("active");
    document.getElementById('registerTab').classList.remove("active");

    document.getElementById(tabName + 'Content').style.display = "block";
    document.getElementById(tabName + 'Tab').classList.add("active");

}