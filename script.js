/* ============================================================
   LOS PEPOS — Mini Market
   Catálogo, carrito de compras y checkout por WhatsApp / Yape
   ============================================================ */

const WHATSAPP_NUMBER = "51987059075"; // 987 059 075 (Perú)
const YAPE_NUMBER = "987 059 075";

/* ---------- Catálogo de productos ----------
   Precios referenciales en soles (S/) según mercado peruano.
   Edita este arreglo para actualizar precios o agregar productos. */
const CATEGORIES = [
  { id: "bebidas",   name: "Bebidas",              emoji: "🥤", banner: "images/cat-bebidas-1.jpg",
    desc: "Gaseosas, jugos y aguas bien heladitas" },
  { id: "golosinas", name: "Golosinas",            emoji: "🍬", banner: "images/cat-golosinas.jpg",
    desc: "Ambrosoli, gomitas y dulces para los chicos" },
  { id: "galletas",  name: "Galletas y Chocolates", emoji: "🍪", banner: "images/cat-galletas-chocolates.jpg",
    desc: "Costa, Nestlé, Field y más para el lonche" },
  { id: "snacks",    name: "Snacks y Piqueos",      emoji: "🌽", banner: "images/cat-snacks.jpg",
    desc: "Chizitos bien crocantes para picar" },
  { id: "abarrotes", name: "Abarrotes",             emoji: "🛒", banner: "images/cat-abarrotes-cuidado.jpg",
    desc: "Arroz, aceite, azúcar y lo básico de la despensa" },
  { id: "frescos",   name: "Huevos y Frescos",      emoji: "🥚", banner: "images/cat-huevos.jpg",
    desc: "Huevos de campo, papa y plátano fresquito" },
  { id: "cuidado",   name: "Cuidado Personal",      emoji: "🧴", banner: "images/cat-abarrotes-cuidado.jpg",
    desc: "Higiene y limpieza para el hogar" },
  { id: "mascotas",  name: "Mascotas",              emoji: "🐶", banner: "images/cat-mascotas.jpg",
    desc: "Alimento balanceado para tu perrito" },
];

const PRODUCTS = [
  // BEBIDAS — shape: bottle | sport | carton   |   color = color principal de la marca
  { id:"b1", cat:"bebidas", name:"Inca Kola 500ml", price:3.50, unit:"botella", shape:"bottle", color:"#F4C430", accent:"#B8860B" },
  { id:"b2", cat:"bebidas", name:"Coca-Cola 1.5L", price:5.50, unit:"botella", shape:"bottle", color:"#E31E24", accent:"#8C1013", big:true },
  { id:"b3", cat:"bebidas", name:"Pepsi 1.5L", price:4.50, unit:"botella", shape:"bottle", color:"#1C3F94", accent:"#0F2260", big:true },
  { id:"b4", cat:"bebidas", name:"Gatorade Chico", price:2.50, unit:"botella", shape:"sport", color:"#F2711C", accent:"#B24E0E" },
  { id:"b5", cat:"bebidas", name:"Agua San Carlos chico", price:1.00, unit:"botella", shape:"bottle", color:"#BFE9F1", accent:"#4FA6BF" },
  { id:"b6", cat:"bebidas", name:"Cifrut chico", price:1.00, unit:"botella", shape:"sport", color:"#FF8C3C", accent:"#C9601A" },
  { id:"b7", cat:"bebidas", name:"Del Valle Durazno caja", price:5.50, unit:"caja", shape:"carton", color:"#FDBB6E", accent:"#E8892C" },
  { id:"b8", cat:"bebidas", name:"Guaranita", price:1.00, unit:"botella", shape:"bottle", color:"#7B2D26", accent:"#4A1712" },
  { id:"b9", cat:"bebidas", name:"Big Cola 1.5L", price:4.50, unit:"botella", shape:"bottle", color:"#C0272D", accent:"#231F20", big:true },

  // GOLOSINAS — shape: candy
  { id:"g1", cat:"golosinas", name:"Ambrosoli Gusanos Ácidos", price:2.50, unit:"bolsita", shape:"candy", color:"#8BC53F", accent:"#5C9426" },
  { id:"g2", cat:"golosinas", name:"Ambrosoli Gusanos", price:2.50, unit:"bolsita", shape:"candy", color:"#E85C8A", accent:"#B23464" },
  { id:"g3", cat:"golosinas", name:"Mipy Chicles", price:1.00, unit:"bolsita", shape:"candy", color:"#6EC6E0", accent:"#3A93AE" },
  { id:"g4", cat:"golosinas", name:"Ambrosito", price:1.50, unit:"bolsita", shape:"candy", color:"#5A9C4A", accent:"#356028" },
  { id:"g5", cat:"golosinas", name:"Ambrosaurios", price:1.50, unit:"bolsita", shape:"candy", color:"#4FA6A0", accent:"#2E6E69" },
  { id:"g6", cat:"golosinas", name:"Docile Gelatinas", price:1.00, unit:"bolsita", shape:"candy", color:"#9B6FC9", accent:"#6B3F98" },
  { id:"g7", cat:"golosinas", name:"Trululu", price:1.00, unit:"bolsita", shape:"candy", color:"#D6488D", accent:"#9F2C63" },

  // GALLETAS Y CHOCOLATES — shape: box | bar
  { id:"c1", cat:"galletas", name:"Costa Tuyo", price:1.00, unit:"paquete", shape:"box", color:"#2657A6", accent:"#F4C430" },
  { id:"c2", cat:"galletas", name:"Casino Chocolate", price:1.50, unit:"paquete", shape:"box", color:"#6B3A22", accent:"#3F2113" },
  { id:"c3", cat:"galletas", name:"Ritz", price:4.50, unit:"paquete", shape:"box", color:"#C6272D", accent:"#F4C430" },
  { id:"c4", cat:"galletas", name:"Oreo", price:2.50, unit:"paquete", shape:"box", color:"#1B2A4A", accent:"#E63946" },
  { id:"c5", cat:"galletas", name:"Margaritas Costa", price:3.50, unit:"paquete", shape:"box", color:"#F2C230", accent:"#B4860E" },
  { id:"c6", cat:"galletas", name:"Sublime", price:2.00, unit:"unidad", shape:"bar", color:"#5A3222", accent:"#8C5A3A" },
  { id:"c7", cat:"galletas", name:"Tentación Nestlé", price:1.50, unit:"unidad", shape:"bar", color:"#B5232D", accent:"#7A1218" },
  { id:"c8", cat:"galletas", name:"Morochas", price:1.50, unit:"paquete", shape:"box", color:"#D65B7A", accent:"#9E2F52" },
  { id:"c9", cat:"galletas", name:"Soda Field", price:3.00, unit:"paquete", shape:"box", color:"#C0392B", accent:"#F4EDE1" },

  // SNACKS — shape: chip
  { id:"s1", cat:"snacks", name:"Cheetos Bolsa", price:1.00, unit:"bolsa", shape:"chip", color:"#F2941C", accent:"#B4640E" },
  { id:"s2", cat:"snacks", name:"Los Cuates", price:1.00, unit:"bolsa", shape:"chip", color:"#E8B92E", accent:"#B4860E" },
  { id:"s3", cat:"snacks", name:"Riky", price:1.00, unit:"bolsa", shape:"chip", color:"#6C4A9C", accent:"#432D66" },
  { id:"s4", cat:"snacks", name:"Chizitos", price:1.00, unit:"bolsa", shape:"chip", color:"#E4622E", accent:"#A83E17" },
  { id:"s5", cat:"snacks", name:"Papitas Lay's", price:2.50, unit:"bolsa", shape:"chip", color:"#FFCB05", accent:"#C23A2E" },

  // ABARROTES — shape: rice | jar | can
  { id:"a1", cat:"abarrotes", name:"Arroz Faraon 1kg", price:5.00, unit:"kg", shape:"rice", color:"#3D6FB4", accent:"#F4EDE1" },
  { id:"a2", cat:"abarrotes", name:"Azúcar Rubia 1kg", price:4.00, unit:"kg", shape:"rice", color:"#C99A5B", accent:"#8C6636" },
  { id:"a3", cat:"abarrotes", name:"Aceite Primor 1L", price:9.00, unit:"botella", shape:"jar", color:"#E8B84B", accent:"#B4860E" },
  { id:"a4", cat:"abarrotes", name:"Fideos 500g", price:3.30, unit:"paquete", shape:"rice", color:"#E8C34A", accent:"#B4860E" },
  { id:"a5", cat:"abarrotes", name:"Atún Florida", price:5.50, unit:"lata", shape:"can", color:"#1E5FA8", accent:"#F4C430" },
  { id:"a6", cat:"abarrotes", name:"Leche Gloria Evaporada", price:4.50, unit:"lata", shape:"can", color:"#2A6FBF", accent:"#F4EDE1" },
  { id:"a7", cat:"abarrotes", name:"Sal Marina 1kg", price:2.00, unit:"kg", shape:"rice", color:"#A9D6E5", accent:"#4FA6BF" },

  // FRESCOS — shape: eggs | fruit
  { id:"f1", cat:"frescos", name:"Huevos unidad", price:0.60, unit:"unidad", shape:"eggs", color:"#D9A066", accent:"#B4794A" },
  { id:"f2", cat:"frescos", name:"Huevos x kilo", price:8.50, unit:"panal", shape:"eggs", color:"#C9915A", accent:"#96613A" },
  { id:"f3", cat:"frescos", name:"Plátano de Seda", price:0.60, unit:"unidad", shape:"banana", color:"#F2C230", accent:"#8C9A3A" },
  { id:"f4", cat:"frescos", name:"Papa Amarilla", price:3.50, unit:"kg", shape:"potato", color:"#D9A85C", accent:"#A87A3A" },

  // CUIDADO PERSONAL — shape: tube | roll | box | spray
  { id:"cp1", cat:"cuidado", name:"Pasta Dental Dento", price:3.50, unit:"unidad", shape:"tube", color:"#1E88A8", accent:"#E63946" },
  { id:"cp2", cat:"cuidado", name:"Papel Higiénico x4", price:8.00, unit:"paquete", shape:"roll", color:"#F4EDE1", accent:"#E89AB8" },
  { id:"cp3", cat:"cuidado", name:"Toallas Higiénicas x8", price:4.50, unit:"paquete", shape:"box", color:"#E8779A", accent:"#F4EDE1" },
  { id:"cp4", cat:"cuidado", name:"Jabón Colgate", price:2.00, unit:"unidad", shape:"box", color:"#D6272D", accent:"#F4EDE1" },
  { id:"cp5", cat:"cuidado", name:"Lejía Clorox 1L", price:4.50, unit:"botella", shape:"spray", color:"#F4C430", accent:"#1E88A8" },
  { id:"cp6", cat:"cuidado", name:"Ambientador Popett", price:6.00, unit:"unidad", shape:"spray", color:"#8B5CB5", accent:"#5C3480" },

  // MASCOTAS — shape: sack | pouch
  { id:"m1", cat:"mascotas", name:"MIchicat", price:8.50, unit:"kilo", shape:"sack", color:"#F2941C", accent:"#231F20" },
  { id:"m2", cat:"mascotas", name:"Cachorro 8kg", price:8.00, unit:"kilo", shape:"sack", color:"#F4B14C", accent:"#231F20" },
  { id:"m3", cat:"mascotas", name:"Super Can 1kg", price:8.50, unit:"bolsa", shape:"chip", color:"#E4622E", accent:"#1C3F94" },
];

const CARD_COLORS = ["#E4F5F7","#FFE9E9","#FFF3DA","#E9F7EC","#F1E9FB","#FDE9F1"];
function colorFor(id){
  let hash = 0;
  for(const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return CARD_COLORS[hash % CARD_COLORS.length];
}

/* ============================================================
   Librería de íconos SVG — ilustraciones propias (sin fotos),
   una por tipo de envase, coloreadas según cada marca real.
   ============================================================ */
const ICONS = {
  bottle: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <ellipse cx="50" cy="93" rx="17" ry="4" fill="rgba(23,43,46,.12)"/>
      <path d="M42 12h16v10c6 4 9 9 9 16v46a7 7 0 0 1-7 7H40a7 7 0 0 1-7-7V38c0-7 3-12 9-16z" fill="${p.color}"/>
      <rect x="42" y="8" width="16" height="9" rx="2" fill="${p.accent}"/>
      <rect x="33" y="55" width="34" height="17" fill="rgba(255,255,255,.35)"/>
      <rect x="36" y="58" width="28" height="11" rx="2" fill="#fff"/>
      <path d="M46 22c3-2 5-2 8 0" stroke="rgba(255,255,255,.6)" stroke-width="2" fill="none" stroke-linecap="round"/>
    </g></svg>`,
  sport: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <ellipse cx="50" cy="93" rx="19" ry="4" fill="rgba(23,43,46,.12)"/>
      <path d="M38 20h24v8c8 5 11 11 11 20v34a10 10 0 0 1-10 10H37a10 10 0 0 1-10-10V48c0-9 3-15 11-20z" fill="${p.color}"/>
      <rect x="40" y="14" width="20" height="9" rx="3" fill="${p.accent}"/>
      <rect x="30" y="58" width="40" height="16" fill="#fff"/>
      <rect x="33" y="61" width="34" height="10" rx="2" fill="${p.accent}" opacity=".85"/>
    </g></svg>`,
  carton: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M28 30 50 18l22 12v46a6 6 0 0 1-6 6H34a6 6 0 0 1-6-6z" fill="${p.color}"/>
      <path d="M28 30 50 18l22 12-22 11z" fill="${p.accent}"/>
      <rect x="34" y="52" width="32" height="18" rx="2" fill="#fff"/>
      <rect x="45" y="18" width="10" height="10" fill="${p.accent}"/>
    </g></svg>`,
  candy: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M22 42c0-3 2-8 8-9l6 2 4-4 5 3 5-3 4 4 6-2c6 1 8 6 8 9-4 6-4 20 0 26-4 6-6 9-6 9l-6-2-4 4-5-3-5 3-4-4-6 2s-2-3-6-9c4-6 4-20 0-26z" fill="${p.color}"/>
      <ellipse cx="50" cy="55" rx="17" ry="12" fill="rgba(255,255,255,.28)"/>
      <path d="M20 45 10 40M20 55 8 55M20 65 10 70" stroke="${p.accent}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M80 45 90 40M80 55 92 55M80 65 90 70" stroke="${p.accent}" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g></svg>`,
  box: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <rect x="18" y="26" width="64" height="52" rx="6" fill="${p.color}"/>
      <rect x="18" y="26" width="64" height="16" rx="6" fill="${p.accent}"/>
      <rect x="18" y="36" width="64" height="6" fill="${p.accent}"/>
      <rect x="26" y="54" width="48" height="16" rx="3" fill="rgba(255,255,255,.9)"/>
    </g></svg>`,
  bar: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <rect x="16" y="34" width="68" height="34" rx="5" fill="${p.color}"/>
      <path d="M33 34v34M50 34v34M67 34v34" stroke="${p.accent}" stroke-width="3" opacity=".7"/>
      <rect x="16" y="34" width="68" height="8" fill="${p.accent}" opacity=".55"/>
    </g></svg>`,
  chip: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M24 30c14-7 38-7 52 0 4 14-2 20 2 34 3 10-2 18-10 22H32c-8-4-13-12-10-22 4-14-2-20 2-34z" fill="${p.color}"/>
      <path d="M22 30 30 22M78 30 70 22" stroke="${p.accent}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="50" cy="52" rx="22" ry="16" fill="rgba(255,255,255,.25)"/>
      <rect x="30" y="42" width="40" height="18" rx="4" fill="rgba(255,255,255,.92)"/>
    </g></svg>`,
  rice: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M26 34c-2 18-2 34 4 44h40c6-10 6-26 4-44z" fill="${p.color}"/>
      <path d="M26 34c8-6 40-6 48 0l-3 8H29z" fill="${p.accent}"/>
      <rect x="33" y="48" width="34" height="20" rx="3" fill="rgba(255,255,255,.92)"/>
    </g></svg>`,
  jar: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M40 20h14v8l10 6c3 2 4 5 4 9v34a8 8 0 0 1-8 8H34a8 8 0 0 1-8-8V43c0-4 1-7 4-9l10-6z" fill="${p.color}"/>
      <rect x="40" y="16" width="14" height="7" rx="2" fill="${p.accent}"/>
      <path d="M64 40h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6" fill="none" stroke="${p.accent}" stroke-width="3"/>
      <rect x="30" y="56" width="34" height="16" rx="2" fill="rgba(255,255,255,.9)"/>
    </g></svg>`,
  can: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <rect x="30" y="20" width="40" height="60" rx="6" fill="${p.color}"/>
      <ellipse cx="50" cy="20" rx="20" ry="5" fill="${p.accent}"/>
      <ellipse cx="50" cy="80" rx="20" ry="5" fill="rgba(23,43,46,.18)"/>
      <rect x="34" y="42" width="32" height="18" rx="2" fill="rgba(255,255,255,.9)"/>
    </g></svg>`,
  sack: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M30 24h40l6 10c6 8 6 40-2 50-4 5-9 6-24 6s-20-1-24-6c-8-10-8-42-2-50z" fill="${p.color}"/>
      <path d="M30 24 24 34h52l-6-10z" fill="${p.accent}"/>
      <circle cx="50" cy="55" r="15" fill="rgba(255,255,255,.9)"/>
      <path d="M50 47c-4 0-7 3-7 6 0 5 7 10 7 10s7-5 7-10c0-3-3-6-7-6z" fill="${p.color}"/>
    </g></svg>`,
  eggs: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <rect x="14" y="34" width="72" height="46" rx="6" fill="${p.accent}"/>
      <rect x="14" y="34" width="72" height="10" fill="${p.color}" opacity=".5"/>
      <ellipse cx="32" cy="58" rx="10" ry="13" fill="#F4EDE1"/>
      <ellipse cx="58" cy="58" rx="10" ry="13" fill="#F4EDE1"/>
      <ellipse cx="32" cy="58" rx="10" ry="13" fill="none" stroke="rgba(23,43,46,.12)" stroke-width="2"/>
      <ellipse cx="58" cy="58" rx="10" ry="13" fill="none" stroke="rgba(23,43,46,.12)" stroke-width="2"/>
      <rect x="72" y="46" width="10" height="26" rx="4" fill="rgba(255,255,255,.4)"/>
    </g></svg>`,
  banana: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M30 70c-6-16 0-38 18-46 4-2 8 1 6 5-14 8-18 26-14 40 1 5-8 6-10 1z" fill="${p.color}"/>
      <path d="M30 70c8 8 24 10 34 2 3-2 6 1 4 4-12 10-32 9-42-1-2-2-1-6 4-5z" fill="${p.accent}"/>
    </g></svg>`,
  potato: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <ellipse cx="50" cy="55" rx="28" ry="20" fill="${p.color}"/>
      <ellipse cx="40" cy="48" rx="3" ry="2" fill="${p.accent}"/>
      <ellipse cx="60" cy="60" rx="3" ry="2" fill="${p.accent}"/>
      <ellipse cx="55" cy="45" rx="2" ry="1.5" fill="${p.accent}"/>
    </g></svg>`,
  tube: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M30 30h4l4-8h24l4 8h4l4 46a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6z" fill="${p.color}"/>
      <rect x="38" y="18" width="24" height="8" rx="2" fill="${p.accent}"/>
      <rect x="30" y="46" width="40" height="14" rx="2" fill="rgba(255,255,255,.9)"/>
    </g></svg>`,
  roll: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <ellipse cx="50" cy="30" rx="26" ry="14" fill="${p.color}"/>
      <ellipse cx="50" cy="30" rx="10" ry="6" fill="${p.accent}"/>
      <path d="M24 30v30c0 8 12 14 26 14s26-6 26-14V30" fill="${p.color}"/>
      <ellipse cx="50" cy="74" rx="26" ry="10" fill="${p.accent}" opacity=".6"/>
    </g></svg>`,
  spray: (p)=>`
    <svg viewBox="0 0 100 100"><g>
      <path d="M36 40h20l4 4v32a6 6 0 0 1-6 6H38a6 6 0 0 1-6-6V44z" fill="${p.color}"/>
      <rect x="42" y="16" width="10" height="14" fill="#9AA6A8"/>
      <path d="M40 16h16v8H40z" fill="${p.accent}"/>
      <path d="M52 20h14l6 6-4 4-6-2z" fill="${p.accent}"/>
      <rect x="32" y="58" width="30" height="14" rx="2" fill="rgba(255,255,255,.9)"/>
    </g></svg>`,
};
function iconFor(product){
  const fn = ICONS[product.shape] || ICONS.box;
  return fn(product);
}

/* ---------- Estado del carrito ---------- */
let cart = loadCart();

function loadCart(){
  try{
    const raw = localStorage.getItem("lospepos_cart");
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveCart(){
  try{ localStorage.setItem("lospepos_cart", JSON.stringify(cart)); }catch(e){}
}

function formatSoles(n){
  return "S/ " + n.toFixed(2);
}

/* ---------- Render: navegación de categorías ---------- */
function renderCatNav(){
  const nav = document.getElementById("catNavList");
  const all = document.createElement("li");
  all.innerHTML = `<button data-cat="todos" class="active">🏪 Todos</button>`;
  nav.appendChild(all);
  CATEGORIES.forEach(cat=>{
    const li = document.createElement("li");
    li.innerHTML = `<button data-cat="${cat.id}">${cat.emoji} ${cat.name}</button>`;
    nav.appendChild(li);
  });
  nav.addEventListener("click", (e)=>{
    const btn = e.target.closest("button[data-cat]");
    if(!btn) return;
    nav.querySelectorAll("button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    filterCategory(btn.dataset.cat);
  });
}

function filterCategory(catId){
  document.querySelectorAll(".category-block").forEach(block=>{
    block.style.display = (catId === "todos" || block.dataset.cat === catId) ? "" : "none";
  });
  document.getElementById("resultsNote").textContent =
    catId === "todos" ? `Mostrando ${PRODUCTS.length} productos` :
    `Mostrando ${PRODUCTS.filter(p=>p.cat===catId).length} productos`;
}

/* ---------- Render: catálogo ---------- */
function renderCatalog(){
  const wrap = document.getElementById("catalogWrap");
  CATEGORIES.forEach(cat=>{
    const items = PRODUCTS.filter(p=>p.cat === cat.id);
    if(items.length === 0) return;

    const block = document.createElement("section");
    block.className = "category-block";
    block.dataset.cat = cat.id;

    block.innerHTML = `
      <div class="category-banner" style="background-image:url('${cat.banner}')">
        <span class="pin-tag">
          <span class="pin-tag-emoji">${cat.emoji}</span>
          <span class="pin-tag-text">
            <b>${cat.name}</b>
            <small>${cat.desc}</small>
          </span>
        </span>
        <span class="banner-credit">📸 foto real de nuestra tienda</span>
      </div>
      <div class="product-grid">
        ${items.map(p=>`
          <article class="product-card" data-id="${p.id}">
            <div class="product-visual" style="background:${colorFor(p.id)}">${iconFor(p)}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-meta">por ${p.unit}</div>
            <div class="product-footer">
              <div class="product-price">${formatSoles(p.price)}<br><small>c/u</small></div>
              <button class="add-btn" aria-label="Agregar ${p.name} al carrito" data-id="${p.id}">+</button>
            </div>
          </article>
        `).join("")}
      </div>
    `;
    wrap.appendChild(block);
  });

  wrap.addEventListener("click", (e)=>{
    const btn = e.target.closest(".add-btn");
    if(!btn) return;
    addToCart(btn.dataset.id);
    btn.classList.add("added");
    btn.textContent = "✓";
    setTimeout(()=>{ btn.classList.remove("added"); btn.textContent = "+"; }, 700);
  });
}

/* ---------- Lógica del carrito ---------- */
function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}
function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id] += delta;
  if(cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}
function removeFromCart(id){
  delete cart[id];
  saveCart();
  renderCart();
}
function cartCount(){
  return Object.values(cart).reduce((a,b)=>a+b,0);
}
function cartTotal(){
  return Object.entries(cart).reduce((sum,[id,qty])=>{
    const p = PRODUCTS.find(pp=>pp.id===id);
    return sum + (p ? p.price*qty : 0);
  }, 0);
}

function renderCart(){
  document.getElementById("cartCount").textContent = cartCount();
  const itemsWrap = document.getElementById("cartItems");
  const entries = Object.entries(cart);

  if(entries.length === 0){
    itemsWrap.innerHTML = `
      <div class="cart-empty">
        <span>🛍️</span>
        Tu carrito está vacío.<br>Agrega productos del catálogo.
      </div>`;
  } else {
    itemsWrap.innerHTML = entries.map(([id,qty])=>{
      const p = PRODUCTS.find(pp=>pp.id===id);
      if(!p) return "";
      return `
        <div class="cart-item" data-id="${id}">
          <div class="cart-item-visual" style="background:${colorFor(id)}">${iconFor(p)}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${formatSoles(p.price)} c/u</div>
            <div class="qty-control">
              <button data-action="dec" data-id="${id}">−</button>
              <span>${qty}</span>
              <button data-action="inc" data-id="${id}">+</button>
            </div>
            <button class="remove-btn" data-action="remove" data-id="${id}">Quitar</button>
          </div>
        </div>`;
    }).join("");
  }

  document.getElementById("cartSubtotal").textContent = formatSoles(cartTotal());
  document.getElementById("cartTotal").textContent = formatSoles(cartTotal());
  updateWhatsappLink();
}

function updateWhatsappLink(){
  const entries = Object.entries(cart);
  let msg = `Hola Los Pepos! 👋 Quiero hacer este pedido:%0A%0A`;
  entries.forEach(([id,qty])=>{
    const p = PRODUCTS.find(pp=>pp.id===id);
    if(p) msg += `• ${qty} x ${p.name} — ${formatSoles(p.price*qty)}%0A`;
  });
  msg += `%0A*Total: ${formatSoles(cartTotal())}*%0A%0APagaré por Yape al ${YAPE_NUMBER}.`;
  const link = document.getElementById("checkoutBtn");
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

/* ---------- Drawer del carrito ---------- */
function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
}
function closeCart(){
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("year").textContent = new Date().getFullYear();

  renderCatNav();
  renderCatalog();
  renderCart();

  document.getElementById("cartOpenBtn").addEventListener("click", openCart);
  document.getElementById("cartCloseBtn").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);

  document.getElementById("cartItems").addEventListener("click", (e)=>{
    const btn = e.target.closest("button[data-action]");
    if(!btn) return;
    const { action, id } = btn.dataset;
    if(action === "inc") changeQty(id, 1);
    if(action === "dec") changeQty(id, -1);
    if(action === "remove") removeFromCart(id);
  });

  document.querySelectorAll("[data-scroll]").forEach(el=>{
    el.addEventListener("click", (e)=>{
      e.preventDefault();
      document.querySelector(el.getAttribute("href")).scrollIntoView({behavior:"smooth"});
    });
  });
});
