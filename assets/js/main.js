document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. LÓGICA DO MODO ESCURO (DARK MODE)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn?.querySelector('.theme-icon');

  // Determina o tema inicial (salvo no localStorage ou preferência do sistema)
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Se não houver preferência salva, verifica o sistema operacional
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Aplica o tema e atualiza o ícone do botão
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (themeIcon) {
      // Exibe o Sol ☀️ no modo escuro e a Lua 🌙 no modo claro
      themeIcon.textContent = theme === 'dark' ? 'Claro' : 'Escuro';
    }
  };

  // Inicializa o tema na carga da página
  let currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  // Evento de clique no botão de alternância
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  // Atualiza se o usuário alterar o tema do sistema operacional enquanto navega
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });


  /* ==========================================================================
     2. LÓGICA DO MODAL (VISUALIZADOR DO GOOGLE DRIVE)
     ========================================================================== */
  const modal = document.getElementById('drive-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalCloseBtn = document.getElementById('modal-close');

  const driveElements = document.querySelectorAll('.btn-view-drive');

  driveElements.forEach(element => {
    element.addEventListener('click', () => {
      const driveId = element.getAttribute('data-drive-id');
      const title = element.getAttribute('data-title') || 'Visualizador de Documento';
      
      if (driveId && modal && modalIframe) {
        // Formata a URL para o modo de preview limpo do iFrame
        const embedUrl = driveId.startsWith('http') 
          ? driveId.replace('/view?usp=drive_link', '/preview').replace('/view', '/preview')
          : `https://drive.google.com/file/d/${driveId}/preview`;

        modalTitle.textContent = title;
        modalIframe.src = embedUrl;
        modal.showModal();
      }
    });
  });

  // Fechar o Modal pelo botão "X"
  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', closeModal);

    // Fechar ao clicar na área escura fora do modal
    modal.addEventListener('click', (event) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isInDialog) {
        closeModal();
      }
    });
  }

  function closeModal() {
    modal.close();
    modalIframe.src = ''; // Interrompe o carregamento do documento em segundo plano
  }
/* ==========================================================================
     3. LÓGICA DO MENU MOBILE (HAMBÚRGUER)
     ========================================================================== */
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggleBtn && navLinks) {
    // Abre/Fecha o menu ao clicar no botão
    menuToggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Altera o ícone do botão dependendo do estado do menu
      if (navLinks.classList.contains('active')) {
        menuToggleBtn.innerHTML = '✖'; // Ícone de Fechar
      } else {
        menuToggleBtn.innerHTML = '☰'; // Ícone de Hambúrguer
      }
    });

    // Fecha o menu automaticamente quando um link é clicado
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggleBtn.innerHTML = '☰';
      });
    });
  }
});