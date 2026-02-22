// Navbar Scroll Effect
const header = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.85) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Cart Interactivity (Mockup)
const cartToggle = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const cartClose = document.getElementById('cart-close');
const cartOverlay = document.getElementById('cart-overlay');
const addCartBtns = document.querySelectorAll('.btn-add-cart');
const cartCount = document.querySelector('.cart-count');

let count = 0;

const toggleCart = () => {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
};

cartToggle.addEventListener('click', toggleCart);
cartClose.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

addCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        
        // Visual feedback
        btn.textContent = '¡Añadido!';
        btn.style.background = '#28a745';
        setTimeout(() => {
            btn.textContent = 'Añadir al Carrito';
            btn.style.background = '';
        }, 1500);

        // Open cart to show progress
        if(!cartSidebar.classList.contains('open')) {
            toggleCart();
        }

        // Update mock items
        const cartItems = document.querySelector('.cart-items');
        if (count === 1) cartItems.innerHTML = '';
        
        const item = document.createElement('div');
        item.className = 'cart-item-mock';
        item.style.padding = '1rem 0';
        item.style.borderBottom = '1px solid #eee';
        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span>Producto #${count}</span>
                <strong>$25.00</strong>
            </div>
        `;
        cartItems.appendChild(item);

        // Update total
        const total = document.querySelector('.total');
        total.textContent = `Total: $${(count * 25).toFixed(2)}`;
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
