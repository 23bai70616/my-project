const categorySelect = document.getElementById("category");
const products = document.querySelectorAll(".product");

categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value;

  products.forEach(product => {
    const productCategory = product.getAttribute("data-category");

    if (selectedCategory === "All" || productCategory === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
