const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const overlaySidebar = document.getElementById('overlaySidebar');


// Botão Open - Abrir Sidebar

if(menuBtn) {
    menuBtn.addEventListener("click", () => {   
    sidebar.classList.toggle('active');
    })
}

// Botão Close - Fechar Sidebar

closeBtn.onclick = ()=>{
    sidebar.classList.remove('active');
}

// Fechamento Sessão - Fechar Sidebar

document.querySelectorAll(".nav-item").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
});


