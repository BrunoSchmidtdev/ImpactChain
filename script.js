let selectedAmount = 50;

const impactMap = {
  20:  'água para 1 família por 1 mês',
  50:  'água para 1 família por 3 meses',
  100: '2% de uma nova cisterna',
  200: '5% de uma nova cisterna',
  500: '1 cisterna completa para 1 família',
};

function selectAmount(btn, val) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const custom = document.getElementById('custom-amount');
  if (val === 'outro') {
    custom.style.display = 'block';
    custom.focus();
    selectedAmount = 0;
  } else {
    custom.style.display = 'none';
    selectedAmount = parseInt(val);
    updateImpact(selectedAmount);
  }
}

function updateImpact(val) {
  selectedAmount = parseInt(val) || 0;
  const preview = document.getElementById('preview-amount');
  const impact = document.getElementById('preview-impact');
  preview.textContent = 'R$ ' + selectedAmount;
  let msg = impactMap[selectedAmount];
  if (!msg) {
    if (selectedAmount < 20) msg = 'uma contribuição importante';
    else if (selectedAmount < 100) msg = 'água para 1 família por semanas';
    else msg = 'um impacto transformador';
  }
  impact.textContent = msg;
}

function generateHash() {
  const chars = '0123456789abcdef';
  let h = '0x';
  for (let i = 0; i < 4; i++) h += chars[Math.floor(Math.random()*16)];
  h += '...';
  for (let i = 0; i < 4; i++) h += chars[Math.floor(Math.random()*16)];
  return h;
}

function processDonation() {
  if (!selectedAmount || selectedAmount < 1) {
    alert('Por favor, escolha ou informe um valor para a doação.');
    return;
  }
  const hash = generateHash();
  const block = '#' + (18447000 + Math.floor(Math.random()*500)).toLocaleString('pt-BR');
  document.getElementById('receipt-amount').textContent = 'R$ ' + selectedAmount.toFixed(2);
  document.getElementById('receipt-hash').textContent = hash;
  document.getElementById('receipt-block').textContent = block;
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

function animateTxFeed() {
  const amounts = [20, 30, 50, 80, 100, 150, 200];
  const times = ['há 1 min', 'há 3 min', 'há 5 min', 'há 8 min', 'há 12 min'];
  const items = document.querySelectorAll('.tx-item');
  setInterval(() => {
    const idx = Math.floor(Math.random() * items.length);
    const item = items[idx];
    const amount = amounts[Math.floor(Math.random() * amounts.length)];
    const time = times[Math.floor(Math.random() * times.length)];
    item.querySelector('.tx-hash').textContent = generateHash();
    item.querySelector('.tx-meta').textContent = time + ' · Água Limpa BA';
    item.querySelector('.tx-amount').textContent = 'R$ ' + amount;
    item.style.opacity = '0.5';
    setTimeout(() => item.style.opacity = '1', 300);
  }, 4000);
}
animateTxFeed();