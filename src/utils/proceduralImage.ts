/* --- PROCEDURAL CYBER ART GENERATOR --- */
export const generateProceduralImage = (
  type: 'sunset' | 'matrix' | 'neon-grid',
  width: number,
  height: number
): string => {
  if (typeof window === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  if (type === 'sunset') {
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, '#0a0018');
    grad.addColorStop(0.4, '#1b002c');
    grad.addColorStop(0.7, '#6b114d');
    grad.addColorStop(1, '#ff3b3b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 1.5;
    const midY = height * 0.65;
    ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(width, midY); ctx.stroke();
    const lines = 16;
    for (let i = 0; i <= lines; i++) {
      const xTop = (width / lines) * i;
      const xBottom = (width * 2 / lines) * (i - lines / 2) + width / 2;
      ctx.beginPath(); ctx.moveTo(xTop, midY); ctx.lineTo(xBottom, height); ctx.stroke();
    }
    const hLines = 8;
    for (let i = 0; i < hLines; i++) {
      const y = midY + (height - midY) * Math.pow(i / hLines, 2.2);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }
    const sunX = width / 2, sunY = midY - 10;
    const sunRadius = Math.min(width, height) * 0.22;
    const sunGrad = ctx.createLinearGradient(0, sunY - sunRadius, 0, sunY + sunRadius);
    sunGrad.addColorStop(0.1, '#fbee22');
    sunGrad.addColorStop(1, '#ff007f');
    ctx.shadowColor = '#ff007f'; ctx.shadowBlur = 30;
    ctx.fillStyle = sunGrad;
    ctx.beginPath(); ctx.arc(sunX, sunY, sunRadius, Math.PI, 0); ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#1b002c'; ctx.lineWidth = 5;
    for (let y = sunY - sunRadius + 12; y < sunY; y += 14) {
      ctx.beginPath(); ctx.moveTo(sunX - sunRadius - 10, y); ctx.lineTo(sunX + sunRadius + 10, y); ctx.stroke();
    }
  } else if (type === 'matrix') {
    ctx.fillStyle = '#010502'; ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)'; ctx.lineWidth = 1;
    const size = 25;
    for (let x = 0; x < width; x += size) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
    for (let y = 0; y < height; y += size) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
    ctx.font = '12px monospace'; ctx.shadowBlur = 6; ctx.shadowColor = '#10B981';
    for (let col = 15; col < width; col += 35) {
      const length = 6 + Math.floor(Math.random() * 12);
      const startY = Math.random() * height;
      for (let i = 0; i < length; i++) {
        const char = Math.random() > 0.5 ? '1' : '0';
        ctx.fillStyle = `rgba(16, 185, 129, ${1 - i / length})`;
        ctx.fillText(char, col, (startY + i * 16) % height);
      }
    }
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff'; ctx.shadowColor = '#10B981'; ctx.shadowBlur = 20;
    ctx.font = 'bold 30px monospace'; ctx.textAlign = 'center';
    ctx.fillText('CYBER_SYS_DECRYPT', width / 2, height / 2 - 10);
    ctx.font = '14px monospace'; ctx.fillStyle = '#10B981';
    ctx.fillText('STATUS: ENCRYPTED // SLICE CORE TO EXTRACT', width / 2, height / 2 + 20);
    ctx.shadowBlur = 0;
  } else {
    const grad = ctx.createRadialGradient(width / 2, height / 2, 20, width / 2, height / 2, width / 1.5);
    grad.addColorStop(0, '#100a28'); grad.addColorStop(1, '#020005');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)'; ctx.lineWidth = 1;
    const step = 35;
    for (let x = 0; x < width; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
    for (let y = 0; y < height; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
    ctx.shadowColor = '#00f0ff'; ctx.shadowBlur = 15; ctx.strokeStyle = '#00f0ff'; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.25, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = '#ff007f'; ctx.shadowColor = '#ff007f'; ctx.shadowBlur = 15;
    const r = Math.min(width, height) * 0.22;
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2 - r);
    ctx.lineTo(width / 2 + r * Math.cos(Math.PI / 6), height / 2 + r * Math.sin(Math.PI / 6));
    ctx.lineTo(width / 2 - r * Math.cos(Math.PI / 6), height / 2 + r * Math.sin(Math.PI / 6));
    ctx.closePath(); ctx.stroke(); ctx.shadowBlur = 0;
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.35)'; ctx.font = '10px monospace'; ctx.textAlign = 'left';
  ctx.fillText('SYS_LOG: v1.0.8', 25, 30);
  ctx.fillText('IP_STREAM: OPERATIONAL', 25, 45);
  ctx.textAlign = 'right';
  ctx.fillText('AI_MODEL: MP_HANDS_WASM', width - 25, 30);
  ctx.fillText('REPLAY_BUFFER: ENABLED', width - 25, 45);

  return canvas.toDataURL('image/jpeg');
};
