// for house.html

document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll(".buy-now-btn");
    const purchaseForm = document.getElementById("purchaseForm");
    const thankYou = document.getElementById("thankYou");
    const selectedProductImage = document.getElementById("selectedProductImage");
    const selectedProductName = document.getElementById("selectedProductName");
    const selectedProductPrice = document.getElementById("selectedProductPrice");
    const checkoutForm = document.getElementById("checkoutForm");

    let selectedProduct ='';
    let selectedPrice ='';
    let selectedImage ='';

    // Buy Now buttons

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedProduct = this.getAttribute("data-product");
            selectedPrice = this.getAttribute("data-price");
            selectedImage = this.getAttribute("data-image");

            // Update the purchase form with product details
             selectedProductImage.src =selectedImage;
             selectedProductImage.alt = selectedProduct;
             selectedProductName.textContent = selectedProduct;
             selectedProductPrice.textContent = `Price: $${selectedPrice}`;

             // show form
             purchaseForm.style.display = 'block';
             purchaseForm.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Handle form submission

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();

         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const phone = document.getElementById('phone').value;

         const subject= `Order for: ${selectedProduct}`;
         const body = `
             Hello APK's Project store,
             
             I would like to place an order for the following property:
             
             product:${selectedProduct}
             price:${selectedPrice}
             
             My details:
             
             -name: ${name}
             -Email:${email}
             -Phone:${phone}
             
             Please process my order and let me know the next steps.
        `.trim();

        const mailtoLink = `mailto:@adombonney1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        purchaseForm.style.display= 'none';
        thankYou.style.display = 'block';
        thankYou.scrollIntoView({ behavior: "smooth" });
       });
     });

// footer
     
     //Dynamic Year
      document.getElementById("year").textContent = new Date().getFullYear();

