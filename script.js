// Contoh: Fungsi pencarian sederhana
function searchLinks() {
    const query = document.getElementById('search').value.toLowerCase();
    const links = document.querySelectorAll('.list-group-item a');
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.parentElement.style.display = text.includes(query) ? 'block' : 'none';
    });
}

// Tambahkan input pencarian di HTML: <input id="search" onkeyup="searchLinks()" placeholder="Cari link...">
