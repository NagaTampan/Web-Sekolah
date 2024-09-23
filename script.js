
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

        const modal = document.getElementById('talentModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        const closeBtn = document.getElementsByClassName('close')[0];

        closeBtn.onclick = () => closeModal();
        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal();
            }
        }

        document.querySelectorAll('.talent-card').forEach(card => {
            card.addEventListener('click', () => {
                const talent = card.getAttribute('data-talent');
                fetchTalentDetails(talent);
            });
        });

        function fetchTalentDetails(talent) {
            setTimeout(() => {
                const talentDetails = getTalentDetails(talent);
                displayTalentModal(talentDetails);
            }, 300);
        }

        function getTalentDetails(talent) {
            const details = {
                seni: {
                    title: 'Program Unggulan Seni',
                    content: 'Program Seni di Eagle School memungkinkan siswa untuk mengeksplorasi berbagai bentuk ekspresi artistik. Kurikulum kami mencakup seni rupa, seni patung, fotografi, dan seni digital. Siswa akan belajar dari seniman profesional dan berkesempatan untuk memamerkan karya mereka dalam pameran tahunan sekolah.',
                    teacherName: 'Ibu Sari Indah',
                    teacherImage: '/api/placeholder/200/200'
                },
                musik: {
                    title: 'Program Unggulan Musik',
                    content: 'Program Musik kami menawarkan pelatihan komprehensif dalam berbagai alat musik dan vokal. Siswa akan belajar teori musik, komposisi, dan pertunjukan. Kami mengadakan konser reguler dan mendorong siswa untuk berpartisipasi dalam kompetisi musik tingkat nasional dan internasional.',
                    teacherName: 'Bapak Harmoni Nada',
                    teacherImage: '/api/placeholder/200/200'
                },

                kerajinan: {
                    title: 'Program Unggulan Kerajinan',
                    content: 'Program Kerajinan di Eagle School memungkinkan siswa untuk mempelajari berbagai keterampilan tangan, seperti membuat anyaman, ukiran kayu, hingga kerajinan logam. Siswa dapat mengembangkan kreativitas mereka dengan bimbingan pengrajin profesional.',
                    teacherName: 'Bapak Craft Master',
                    teacherImage: '/api/placeholder/200/200'
                },
                tatarias: {
                    title: 'Program Unggulan Tata Rias',
                    content: 'Program Tata Rias kami menawarkan pelatihan dalam seni make-up, hairstyling, dan kosmetologi. Siswa akan mempelajari teknik modern dan tradisional, serta memiliki kesempatan untuk bekerja pada acara-acara besar yang diselenggarakan sekolah.',
                    teacherName: 'Ibu Cantika Glamour',
                    teacherImage: '/api/placeholder/200/200'
                },
                multimedia: {
                    title: 'Program Unggulan Multimedia',
                    content: 'Program Multimedia kami mengajarkan siswa keterampilan produksi video, animasi, desain grafis, dan editing digital. Siswa akan bekerja dengan peralatan modern dan software industri, serta mengembangkan portofolio yang bisa digunakan untuk karir di masa depan.',
                    teacherName: 'Bapak Visual Virtuoso',
                    teacherImage: '/api/placeholder/200/200'
                },
                desain: {
                    title: 'Program Unggulan Desain',
                    content: 'Program Desain kami mencakup berbagai disiplin ilmu, seperti desain grafis, desain produk, dan desain interior. Siswa akan diajarkan cara berpikir kreatif dan analitis untuk menghasilkan karya desain yang fungsional dan estetik.',
                    teacherName: 'Ibu Dwi Kreatif',
                    teacherImage: '/api/placeholder/200/200'
                },
                memasak: {
                    title: 'Program Unggulan Memasak',
                    content: 'Program Memasak kami menawarkan pelatihan dalam seni kuliner, termasuk teknik memasak tradisional dan modern. Siswa akan belajar membuat berbagai hidangan dan mendapatkan pengalaman di dapur profesional sekolah.',
                    teacherName: 'Chef Lezat',
                    teacherImage: '/api/placeholder/200/200'
                },
                teater: {
                    title: 'Program Unggulan Teater',
                    content: 'Program Teater kami memungkinkan siswa untuk mengeksplorasi dunia akting, penyutradaraan, dan penulisan naskah. Siswa akan belajar dari aktor profesional dan terlibat dalam produksi teater besar yang ditampilkan di sekolah.',
                    teacherName: 'Bapak Panggung Sandiwara',
                    teacherImage: '/api/placeholder/200/200'
                },
                produksiMusik: {
                    title: 'Program Unggulan Produksi Musik',
                    content: 'Program Produksi Musik kami memberikan siswa pengalaman dalam perekaman, mixing, mastering, dan distribusi musik. Siswa akan bekerja di studio musik sekolah dan menghasilkan karya yang siap dipublikasikan.',
                    teacherName: 'Bapak Sound Master',
                    teacherImage: '/api/placeholder/200/200'
                },
                pemrograman: {
                    title: 'Program Unggulan Pemograman',
                    content: 'Program Teknologi kami mempersiapkan siswa untuk menjadi inovator di era digital. Kurikulum mencakup pemrograman, desain web, pengembangan aplikasi mobile, dan robotika. Siswa akan bekerja pada proyek-proyek nyata dan berpartisipasi dalam hackathon dan kompetisi teknologi.',
                    teacherName: 'Bapak Techo Genius',
                    teacherImage: '/api/placeholder/200/200'
                },
                vokal: {
                    title: 'Program Unggulan Vokal',
                    content: 'Program Vokal kami berfokus pada pelatihan suara, teknik bernyanyi, dan interpretasi lagu. Siswa akan mempelajari berbagai genre musik dan berlatih dalam pertunjukan solo maupun paduan suara. Kami juga memberikan kesempatan untuk tampil di berbagai acara sekolah dan kompetisi vokal.',
                    teacherName: 'Ibu Suara Merdu',
                    teacherImage: '/api/placeholder/200/200'
                },
                bahasaInggris: {
                    title: 'Program Unggulan Bahasa Inggris',
                    content: 'Program Bahasa kami bertujuan untuk menciptakan komunikator global yang fasih. Siswa akan mempelajari bahasa Inggris, Mandarin, dan bahasa asing lainnya. Program ini juga mencakup sastra dunia, budaya internasional, dan kesempatan untuk program pertukaran pelajar ke luar negeri.',
                    teacherName: 'Ibu Linguis Global',
                    teacherImage: '/api/placeholder/200/200'
                }

                // Add details for other talents here
            };
            return details[talent] || { title: 'Informasi Tidak Tersedia', content: 'Maaf, informasi detail untuk program ini belum tersedia.' };
        }

        function displayTalentModal(details) {
            modalTitle.textContent = details.title;
            modalContent.innerHTML = `
                <img src="${details.teacherImage}" alt="${details.teacherName}" class="modal-image">
                <div class="modal-text">
                    <p>${details.content}</p>
                    <p class="mt-4"><strong>Guru Pengajar:</strong> ${details.teacherName}</p>
                </div>
            `;
            modal.style.display = 'block';
        }

        function closeModal() {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                modal.style.display = 'none';
                modal.style.animation = '';
            }, 300);
        }
        // Counter Animation
        document.addEventListener("DOMContentLoaded", function () {
            const counters = document.querySelectorAll('.counter');

            counters.forEach(counter => {
                const updateCounter = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const increment = target / 200; // Control the speed of the animation

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCounter();
            });
        });
       
        gsap.registerPlugin(ScrollTrigger);
        let scene, camera, renderer, stars = [], planets = [];
        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('scene').appendChild(renderer.domElement);

            // Create stars
            for(let i = 0; i < 2000; i++) {
                let geometry = new THREE.SphereGeometry(0.05, 24, 24);
                let material = new THREE.MeshBasicMaterial({color: 0xffffff});
                let star = new THREE.Mesh(geometry, material);
                
                let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
                star.position.set(x, y, z);
                stars.push(star);
                scene.add(star);
            }

            // Create planets
            const planetColors = [0xff4500, 0x4169e1, 0x32cd32, 0xffd700];
            for(let i = 0; i < 4; i++) {
                let geometry = new THREE.SphereGeometry(1, 32, 32);
                let material = new THREE.MeshBasicMaterial({color: planetColors[i]});
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
                if(star.position.z > 5) star.position.z = -195;
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
        
        document.addEventListener('DOMContentLoaded', function() {
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

        