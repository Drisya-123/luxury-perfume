// Add to cart click feedback
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('✨ Success! Added item to your luxury shopping bag.');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }

    // Dynamic Product Details Modal Script
const productModal = document.getElementById('productModal');
if (productModal) {
    productModal.addEventListener('show.bs.modal', function (event) {
        // Button or card that triggered the modal
        const card = event.relatedTarget;
        
        // Extract info from data-* attributes
        const title = card.getAttribute('data-title');
        const price = card.getAttribute('data-price');
        const desc = card.getAttribute('data-desc');
        const imgSrc = card.getAttribute('data-img');
        
        // Update the modal's content
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalPrice').textContent = price;
        document.getElementById('modalDesc').textContent = desc;
        document.getElementById('modalImg').src = imgSrc;
    });
}
});