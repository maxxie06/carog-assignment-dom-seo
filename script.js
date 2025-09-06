const originalProducts = [
  "Spalding Basketball",
  "Nike Basketball Shoes",
  "Adidas Jersey",
  "Wilson Basketball",
  "Under Armour Shorts",
  "Basketball Socks",
  "Basketball Hoop",
];

const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const sortBtn = document.getElementById('sortBtn');
const resetBtn = document.getElementById('resetBtn');

let currentProducts = [...originalProducts];

function displayProducts(products) {
  productList.innerHTML = '';
  if (products.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No products found.';
    li.style.fontStyle = 'italic';
    productList.appendChild(li);
  } else {
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = product;
      productList.appendChild(li);
    });
  }
}

displayProducts(currentProducts);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  currentProducts = originalProducts.filter(product =>
    product.toLowerCase().includes(query)
  );
  displayProducts(currentProducts);
});

sortBtn.addEventListener('click', () => {
  currentProducts.sort((a, b) => a.localeCompare(b));
  displayProducts(currentProducts);
});

resetBtn.addEventListener('click', () => {
  currentProducts = [...originalProducts];
  searchInput.value = '';
  displayProducts(currentProducts);
});
