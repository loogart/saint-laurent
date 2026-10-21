const ticker = document.querySelector('.ticker');
const tickerToggle = document.querySelector('.ticker-toggle');
tickerToggle.addEventListener('click', () => {
  const paused = ticker.classList.toggle('paused');
  tickerToggle.setAttribute('aria-pressed', String(paused));
  tickerToggle.setAttribute('aria-label', paused ? 'Play ticker' : 'Pause ticker');
  tickerToggle.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
});
