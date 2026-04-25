// Datos de ejemplo para productos de mascotas virales
const viralProducts = [
    {
        title: "Cepillo de Vapor Autolimpiante para Gatos",
        views: "4.2M",
        likes: "580K",
        shares: "42K",
        thumb: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400",
        category: "Gatos"
    },
    {
        title: "Lanzador de Pelotas Automático para Perros",
        views: "1.8M",
        likes: "210K",
        shares: "15K",
        thumb: "https://images.unsplash.com/photo-1541599540903-216a46ca1dfc?auto=format&fit=crop&q=80&w=400",
        category: "Perros"
    },
    {
        title: "Fuente de Agua con Sensor de Movimiento",
        views: "850K",
        likes: "95K",
        shares: "8K",
        thumb: "https://images.unsplash.com/photo-1591768793355-74d75b5722c1?auto=format&fit=crop&q=80&w=400",
        category: "Hogar"
    },
    {
        title: "Cama Calentadora para Invierno (Peluche)",
        views: "12M",
        likes: "1.2M",
        shares: "120K",
        thumb: "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=400",
        category: "Camas"
    },
    {
        title: "Cinturón de Seguridad para Perros (Auto)",
        views: "2.5M",
        likes: "340K",
        shares: "22K",
        thumb: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
        category: "Seguridad"
    },
    {
        title: "Juguete Interactivo de Pez para Gatos",
        views: "6.7M",
        likes: "780K",
        shares: "56K",
        thumb: "https://images.unsplash.com/photo-1573865668131-973711c2ddec?auto=format&fit=crop&q=80&w=400",
        category: "Juguetes"
    }
];

// Función para cargar la grid de videos
function renderVideos(products) {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = '';

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <img src="${product.thumb}" alt="${product.title}" class="video-thumb">
            <div class="video-info">
                <h3 class="video-title">${product.title}</h3>
                <div class="video-stats">
                    <div class="stat"><i data-lucide="eye" style="width:14px"></i> ${product.views}</div>
                    <div class="stat"><i data-lucide="heart" style="width:14px"></i> ${product.likes}</div>
                    <div class="stat"><i data-lucide="share-2" style="width:14px"></i> ${product.shares}</div>
                </div>
                <button class="btn-download" style="width:100%; margin-top: 1rem; padding: 0.6rem; font-size: 0.85rem;" onclick="openInDownloader('${product.title}')">
                    Analizar Video
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Reinicializar iconos para los nuevos elementos
    lucide.createIcons();
}

// Simulación de descarga
function simulateDownload() {
    const url = document.getElementById('tiktokUrl').value;
    const status = document.getElementById('downloadStatus');
    const progressText = document.getElementById('progressText');
    const btn = document.querySelector('.btn-download');

    if (!url) {
        alert('Por favor, ingresa una URL de TikTok válida.');
        return;
    }

    btn.disabled = true;
    status.style.display = 'block';
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            status.innerHTML = `<span style="color: var(--success);">¡Listo! Video descargado sin marca de agua exitosamente.</span>`;
            setTimeout(() => {
                status.style.display = 'none';
                btn.disabled = false;
                status.innerHTML = `Procesando video... <span id="progressText">0%</span>`;
            }, 3000);
        }
        progressText.innerText = `${progress}%`;
    }, 400);
}

function openInDownloader(title) {
    document.getElementById('tiktokUrl').value = `https://www.tiktok.com/viral/video/simulated-${title.replace(/\s+/g, '-').toLowerCase()}`;
    window.scrollTo({
        top: document.querySelector('.downloader-section').offsetTop - 50,
        behavior: 'smooth'
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderVideos(viralProducts);
});
