function orderNow() {
  const phone = "2349043703571"; // replace with your number
  const message = "Hello Agrojungle, I want to order poultry products";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function bookConsultation() {
  const phone = "2349043703571"; // same number or different
  const message = "Hello Agrojungle, I want to book a poultry consultation";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}