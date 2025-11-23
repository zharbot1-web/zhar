// Fungsi pencarian link
function searchLinks() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const links = document.querySelectorAll('#link-list li');
    
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(query) ? 'block' : 'none';
    });
}

// Tambahkan input pencarian di HTML jika ingin
// Contoh: <input type="text" id="search-input" placeholder="Cari link..." onkeyup="searchLinks()">
