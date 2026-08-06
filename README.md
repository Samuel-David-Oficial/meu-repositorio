## 🎓 Portfólio Acadêmico & Profissional — Samuel David

Bem-vindo ao repositório do meu portfólio pessoal e acadêmico! Este projeto foi desenvolvido com o objetivo de centralizar minha trajetória acadêmica, certificações institucionais e externas, currículo e canais de contato em uma interface moderna, responsiva e performática.

## 🎯 Objetivo do Projeto

O objetivo principal deste site é servir como um hub central de qualificações. Ele permite que recrutadores, professores e parceiros de projetos visualizem rapidamente minhas experiências e acessem documentos comprobatórios (certificados, diplomas e currículo) diretamente na página, sem a necessidade de downloads manuais ou navegação fora do site.

## ✨ Funcionalidades Principais

🌗 Alternância de Tema (Dark / Light Mode):

• Suporte nativo a modo claro e escuro com transição suave.

• Salva a preferência do usuário no localStorage.

• Detecta automaticamente a preferência do sistema operacional (prefers-color-scheme).

📄 Visualizador de Documentos Nativo (Google Drive Preview):

• Modal interativo desenvolvido com a tag HTML5 <dialog>.

• Transforma links de visualização do Google Drive em previews embutidos via iframe, permitindo a leitura de certificados e do currículo dentro da própria plataforma.

•Fechamento simplificado ao clicar no botão de fechar, apertar a tecla ESC ou clicar fora da área do documento.

📱 Design Responsivo & Mobile First:

• Layout flexível adaptado para dispositivos móveis, tablets e desktops.

• Menu retrátil tipo hambúrguer para telas pequenas.

🚀 Navegação Fluida:

• Rolagem suave (scroll-behavior: smooth) para atalhos diretos entre seções.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas (Vanilla Web Stack), garantindo leveza, alta velocidade de carregamento e facilidade de manutenção:

• HTML5 - Estruturação semântica (header, main, section, article, dialog).

• CSS3 - Estilização moderna com Variáveis CSS (Design System), CSS Grid, Flexbox e Backdrop Filter.

• JavaScript (ES6+) - Manipulação dinâmica do DOM, gestão de eventos, manipulação de modal e persistência de tema.

• Google Fonts - Tipografia padronizada utilizando a família de fontes Inter.

• Google Drive Viewer - Integração de exibição em tempo real de documentos em PDF/Drive.

## 📁 Estrutura do Projeto

```text
meu-repositorio/
├── index.html             # Estrutura principal da página
└── assets/
    ├── css/
    │   └── style.css      # Estilos globais, temas (Dark/Light) e media queries
    ├── js/
    │   └── main.js        # Lógica de alternância de tema, modal e menu mobile
    └── images/
        └── icon_foto.jpeg # Imagem de perfil do autor
```

## 🔧 Como Executar o Projeto Localmente

1. Clone o repositório:
```text
    git clone https://github.com/samergameplay/portfolio.git
```
2. Acesse a pasta do projeto:
```text
    cd portfolio
```
3. Abra o projeto:

Basta dar um duplo clique no arquivo index.html ou utilizar uma extensão como o Live Server no VS Code.

• Desenvolvido por Samuel David © 2026. Todos os direitos reservados.