

// Initialize AOS
AOS.init({
    duration: 600, // Durasi animasi dalam milidetik
    once: false, // Jika true, animasi hanya akan terjadi sekali
});

// Scroll Animation
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);



gsap.registerPlugin(ScrollTrigger);
let scene, camera, renderer, stars = [], planets = [];
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene').appendChild(renderer.domElement);

    // Create stars
    for (let i = 0; i < 2000; i++) {
        let geometry = new THREE.SphereGeometry(0.05, 24, 24);
        let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        let star = new THREE.Mesh(geometry, material);

        let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
        star.position.set(x, y, z);
        stars.push(star);
        scene.add(star);
    }

    // Create planets
    const planetColors = [0xff4500, 0x4169e1, 0x32cd32, 0xffd700];
    for (let i = 0; i < 4; i++) {
        let geometry = new THREE.SphereGeometry(1, 32, 32);
        let material = new THREE.MeshBasicMaterial({ color: planetColors[i] });
        let planet = new THREE.Mesh(geometry, material);

        let distance = 20 + i * 10;
        let angle = Math.random() * Math.PI * 2;
        planet.position.set(Math.cos(angle) * distance, Math.sin(angle) * distance, -50);
        planets.push(planet);
        scene.add(planet);
    }

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);

    // Complex camera movement
    let time = Date.now() * 0.0005;
    camera.position.x = Math.sin(time) * 10;
    camera.position.y = Math.cos(time) * 10;
    camera.position.z = 5 + Math.sin(time * 0.5) * 5;
    camera.lookAt(scene.position);

    // Animate stars
    stars.forEach(star => {
        star.position.z += 0.05;
        if (star.position.z > 5) star.position.z = -195;
    });

    // Animate planets
    planets.forEach((planet, index) => {
        let angle = time * (1 + index * 0.1);
        let distance = 20 + index * 10;
        planet.position.x = Math.cos(angle) * distance;
        planet.position.y = Math.sin(angle) * distance;
        planet.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
init();
animate();

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('challenge');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
            if (i === index) {
                item.classList.remove('hidden');
                item.querySelector('h1').classList.add('fade-in');
                item.querySelector('p').classList.add(i % 2 === 0 ? 'slide-in-right' : 'slide-in-left');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    carousel.querySelector('[data-carousel-next]').addEventListener('click', nextSlide);
    carousel.querySelector('[data-carousel-prev]').addEventListener('click', prevSlide);

    showSlide(0);
    setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
});

