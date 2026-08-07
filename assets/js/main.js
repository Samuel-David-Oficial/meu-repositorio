document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. LÓGICA DO MODO ESCURO (DARK MODE)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn?.querySelector('.theme-icon');

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // saveInStorage = false previne que a preferência do SO seja sobrescrita ao carregar
  const applyTheme = (theme, saveInStorage = true) => {
    document.documentElement.setAttribute('data-theme', theme);
    
    if (saveInStorage) {
      localStorage.setItem('theme', theme);
    }

    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  // Inicializa sem forçar a gravação no localStorage
  let currentTheme = getInitialTheme();
  applyTheme(currentTheme, false);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme, true);
    });
  }

  // Atualiza se a preferência do sistema mudar (apenas se o usuário não tiver salvado manualmente)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light', false);
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

  const closeModal = () => {
    if (!modal) return;
    modal.close();
    if (modalIframe) modalIframe.src = '';
  };

  driveElements.forEach(element => {
    element.addEventListener('click', () => {
      const driveId = element.dataset.driveId;
      const title = element.dataset.title || 'Visualizador de Documento';

      if (driveId && modal && modalIframe) {
        // Substituição única usando Regex para links do Google Drive
        const embedUrl = driveId.startsWith('http')
          ? driveId.replace(/\/view(\?.*)?$/, '/preview')
          : `https://drive.google.com/file/d/${driveId}/preview`;

        if (modalTitle) modalTitle.textContent = title;
        modalIframe.src = embedUrl;
        modal.showModal();
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    // Clique fora do conteúdo (no backdrop) fecha o modal
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }


  /* ==========================================================================
     3. LÓGICA DO MENU MOBILE (HAMBÚRGUER)
     ========================================================================== */
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggleBtn && navLinks) {
    // Função auxiliar para evitar duplicação da lógica do menu
    const toggleMenu = (isOpen) => {
      const active = isOpen ?? !navLinks.classList.contains('active');
      navLinks.classList.toggle('active', active);
      menuToggleBtn.innerHTML = active ? '✖' : '☰';
      menuToggleBtn.setAttribute('aria-expanded', active);
    };

    menuToggleBtn.addEventListener('click', () => toggleMenu());

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }
});