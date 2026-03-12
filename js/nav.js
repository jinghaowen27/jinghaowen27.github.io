// ── Navigation, language toggle, filters ──

// ── Navigation ──
function show(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sb-nav a').forEach(a => a.classList.remove('active'));
  const page = document.getElementById(id);
  if (page) page.classList.add('active');
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  closeSidebar();
}
function setLang(lang) {
  const other = lang === 'en' ? 'zh' : 'en';
  document.querySelectorAll('.' + lang).forEach(el => el.style.display = '');
  document.querySelectorAll('.' + other).forEach(el => el.style.display = 'none');
  document.getElementById('btn-en').classList.toggle('on', lang === 'en');
  document.getElementById('btn-zh').classList.toggle('on', lang === 'zh');
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}
function showPubView(ctx, view) {
  ['selected','date','topic'].forEach(v => {
    const el = document.getElementById(ctx + '-view-' + v);
    if (el) el.style.display = v === view ? '' : 'none';
  });
  const keyMap = {sel:'selected',date:'date',topic:'topic'};
  Object.entries(keyMap).forEach(([k,v]) => {
    const el = document.getElementById(ctx+'-'+k);
    const elZh = document.getElementById(ctx+'-'+k+'-zh');
    if (el) el.classList.toggle('active-toggle', v===view);
    if (elZh) elZh.classList.toggle('active-toggle', v===view);
  });
  document.querySelectorAll('[id^="'+ctx+'-topic-"]').forEach(g => g.style.opacity='1');
}
function filterByTopic(ctx, topic) {
  showPubView(ctx, 'topic');
  document.querySelectorAll('[id^="'+ctx+'-topic-"]').forEach(g => {
    g.style.opacity = (g.id === ctx+'-topic-'+topic) ? '1' : '0.35';
  });
}
function filterPhoto(btn, topic) {
  document.querySelectorAll('.photo-topic-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.photo-cell').forEach(cell => {
    cell.style.display = (topic==='all'||cell.dataset.topic===topic) ? '' : 'none';
  });
}
function filterGuitar(btn, genre) {
  document.querySelectorAll('.guitar-filters .photo-topic-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.guitar-item').forEach(item => {
    item.style.display = (genre==='all'||item.dataset.genre===genre) ? '' : 'none';
  });
}
function toggleContact(e, id) {
  e.preventDefault();
  const detail = document.getElementById(id);
  const arrow = document.getElementById(id.replace('-detail','-arrow'));
  if (detail) detail.classList.toggle('open');
  if (arrow) arrow.classList.toggle('open');
}
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}