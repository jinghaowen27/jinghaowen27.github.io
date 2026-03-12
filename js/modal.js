// ── Modal open/close logic ──

function openModal(id) {
  const d = MODALS[id];
  if (!d) return;
  const isZh = document.documentElement.lang === 'zh-CN';
  const title=isZh?d.titleZh:d.titleEn, eyebrow=isZh?d.eyebrowZh:d.eyebrowEn;
  const meta=isZh?d.metaZh:d.metaEn, ingr=isZh?d.ingrZh:d.ingrEn;
  const steps=isZh?d.stepsZh:d.stepsEn, notes=isZh?d.notesZh:d.notesEn;
  document.getElementById('modal-hero').innerHTML=
    `<span style="font-size:5rem">${d.emoji}</span><button class="modal-close" onclick="closeModal()">✕</button>`;
  const isTarot=id.startsWith('tarot-'), isBook=id.startsWith('book');
  let html=`<div class="modal-eyebrow">${eyebrow}</div><h2 class="modal-title">${title}</h2>
    <div class="modal-meta-row">${meta.map(([k,v])=>`<div class="modal-meta"><strong>${k}:</strong> ${v}</div>`).join('')}</div>`;
  if(ingr&&ingr.length>0)
    html+=`<div class="modal-section"><h3 class="modal-section-title">${isZh?'食材':'Ingredients'}</h3><ul class="ingr-list">${ingr.map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
  if(steps&&steps.length>0){
    const lbl=isBook?(isZh?'笔记':'Notes'):isTarot?(isZh?'象征意义':'Symbolism'):id.startsWith('cocktail')?(isZh?'调制步骤':'Method'):(isZh?'烹饪步骤':'Method');
    html+=`<div class="modal-section"><h3 class="modal-section-title">${lbl}</h3><ol class="step-list">${steps.map((s,i)=>`<li><span class="step-num">${String(i+1).padStart(2,'0')}</span><span>${s}</span></li>`).join('')}</ol></div>`;
  }
  if(notes){
    const lbl2=isBook?(isZh?'完整笔记':'Full Notes'):isTarot?(isZh?'我的笔记':'My Notes'):(isZh?'笔记':'Notes');
    html+=`<div class="modal-section"><h3 class="modal-section-title">${lbl2}</h3><div class="modal-body">${notes.split('\n\n').map(p=>`<p>${p}</p>`).join('')}</div></div>`;
  }
  document.getElementById('modal-content').innerHTML=html;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementBy
function closeModalIfBg(e){if(e.target===document.getElementById('modal-overlay'))closeModal();}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});