// Exemplo de dados de produtos (pode ser obtido de um banco de dados ou de uma API)
const products = [
    { id: 1, name: "Produto 1", price: 19.99, description: "Descrição do produto 1", image: "../img/product1.jpg" },
    { id: 2, name: "Produto 2", price: 29.99, description: "Descrição do produto 2", image: "../img/product2.jpg" },
    { id: 3, name: "Produto 3", price: 39.99, description: "Descrição do produto 3", image: "../img/product3.jpg" }
  ];
  
  // Função para exibir os produtos
  function displayProducts() {
    const productList = document.getElementById("product-list");
  
    // Limpa o conteúdo anterior
    productList.innerHTML = "";
  
    // Itera sobre os produtos e cria o HTML para cada um deles
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const productName = document.createElement("h2");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = "Preço: R$" + product.price.toFixed(2);
  
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
  
      const productImage = document.createElement("img");
      productImage.classList.add("product-image");
      productImage.src = product.image;
      productImage.alt = product.name;
  
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productDescription);
      productDiv.appendChild(productImage);
  
      productList.appendChild(productDiv);
    });
  }
  
  // Chama a função para exibir os produtos
  displayProducts();
  