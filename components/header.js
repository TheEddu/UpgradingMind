const isInPages = window.location.pathname.includes('/pages/');
const homeHref = isInPages ? '../../index.html' : './index.html';

document.getElementById('header').innerHTML = `
  <header class="bg-[#072559] shadow-lg border-b-4 border-[#1e293b]">
    <div class="container mx-auto flex justify-between items-center px-8 py-6">
      <h1 class="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#232323] via-[#bfa76a] to-[#232323] drop-shadow-[0_2px_8px_rgba(35,35,35,0.5)] flex items-center gap-2">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#bfa76a" d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.99z"/></svg>
        UpgradingMind
      </h1>
      <nav class="space-x-6 font-mono text-lg">
        <a href="${homeHref}" class="px-4 py-2 rounded-md bg-[#1e293b] text-slate-100 hover:bg-[#334155] transition">Home</a>
        <a href="#footer" class="px-4 py-2 rounded-md bg-[#1e293b] text-slate-100 hover:bg-[#334155] transition">Contato</a>
      </nav>
    </div>
  </header>
`;
