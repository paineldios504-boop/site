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
  // BEBIDAS
  { id:"b1", cat:"bebidas", name:"Inca Kola 500ml", price:3.00, unit:"botella", emoji:"🟡" },
  { id:"b2", cat:"bebidas", name:"Coca-Cola 1.5L", price:7.50, unit:"botella", emoji:"🔴" },
  { id:"b3", cat:"bebidas", name:"Pepsi 1.5L", price:6.50, unit:"botella", emoji:"🔵" },
  { id:"b4", cat:"bebidas", name:"Gatorade 500ml", price:5.00, unit:"botella", emoji:"🧉" },
  { id:"b5", cat:"bebidas", name:"Agua San Carlos 625ml", price:1.50, unit:"botella", emoji:"💧" },
  { id:"b6", cat:"bebidas", name:"Cifrut Naranja 300ml", price:2.00, unit:"botella", emoji:"🍊" },
  { id:"b7", cat:"bebidas", name:"Del Valle Durazno 1L", price:5.50, unit:"caja", emoji:"🍑" },
  { id:"b8", cat:"bebidas", name:"Guaraná 500ml", price:3.50, unit:"botella", emoji:"🥤" },
  { id:"b9", cat:"bebidas", name:"Big Cola 1.5L", price:4.00, unit:"botella", emoji:"⚫" },

  // GOLOSINAS
  { id:"g1", cat:"golosinas", name:"Ambrosoli Gusanos Ácidos", price:1.00, unit:"bolsita", emoji:"🐛" },
  { id:"g2", cat:"golosinas", name:"Ambrosoli Gusanos", price:1.00, unit:"bolsita", emoji:"🍭" },
  { id:"g3", cat:"golosinas", name:"Mipy Chicles", price:1.00, unit:"bolsita", emoji:"🫧" },
  { id:"g4", cat:"golosinas", name:"Ambrosito", price:1.50, unit:"bolsita", emoji:"🐊" },
  { id:"g5", cat:"golosinas", name:"Ambrosaurios", price:1.50, unit:"bolsita", emoji:"🦖" },
  { id:"g6", cat:"golosinas", name:"Docile Gelatinas", price:1.00, unit:"bolsita", emoji:"🍮" },
  { id:"g7", cat:"golosinas", name:"Trululu", price:1.00, unit:"bolsita", emoji:"🍡" },

  // GALLETAS Y CHOCOLATES
  { id:"c1", cat:"galletas", name:"Costa Tuyo", price:1.00, unit:"paquete", emoji:"🍪" },
  { id:"c2", cat:"galletas", name:"Casino Chocolate", price:1.50, unit:"paquete", emoji:"🍫" },
  { id:"c3", cat:"galletas", name:"Ritz", price:4.50, unit:"paquete", emoji:"🧀" },
  { id:"c4", cat:"galletas", name:"Oreo", price:2.50, unit:"paquete", emoji:"⚫" },
  { id:"c5", cat:"galletas", name:"Margaritas Costa", price:3.50, unit:"paquete", emoji:"🌼" },
  { id:"c6", cat:"galletas", name:"Sublime", price:2.00, unit:"unidad", emoji:"🍫" },
  { id:"c7", cat:"galletas", name:"Tentación Nestlé", price:1.50, unit:"unidad", emoji:"🍬" },
  { id:"c8", cat:"galletas", name:"Morochas", price:1.50, unit:"paquete", emoji:"🍪" },
  { id:"c9", cat:"galletas", name:"Soda Field", price:3.00, unit:"paquete", emoji:"🧂" },

  // SNACKS
  { id:"s1", cat:"snacks", name:"Cheetos Bolsa", price:1.00, unit:"bolsa", emoji:"🧡" },
  { id:"s2", cat:"snacks", name:"Los Cuates", price:1.00, unit:"bolsa", emoji:"🌽" },
  { id:"s3", cat:"snacks", name:"Riky", price:1.00, unit:"bolsa", emoji:"🟣" },
  { id:"s4", cat:"snacks", name:"Chizitos", price:1.00, unit:"bolsa", emoji:"🟠" },
  { id:"s5", cat:"snacks", name:"Papitas Lay's", price:2.50, unit:"bolsa", emoji:"🥔" },

  // ABARROTES
  { id:"a1", cat:"abarrotes", name:"Arroz Costeño 1kg", price:4.50, unit:"kg", emoji:"🍚" },
  { id:"a2", cat:"abarrotes", name:"Azúcar Rubia 1kg", price:4.00, unit:"kg", emoji:"🟤" },
  { id:"a3", cat:"abarrotes", name:"Aceite Primor 1L", price:9.90, unit:"botella", emoji:"🫙" },
  { id:"a4", cat:"abarrotes", name:"Fideos 500g", price:3.50, unit:"paquete", emoji:"🍝" },
  { id:"a5", cat:"abarrotes", name:"Atún Florida", price:5.00, unit:"lata", emoji:"🐟" },
  { id:"a6", cat:"abarrotes", name:"Leche Gloria Evaporada", price:3.80, unit:"lata", emoji:"🥛" },
  { id:"a7", cat:"abarrotes", name:"Sal Marina 1kg", price:1.50, unit:"kg", emoji:"🧂" },

  // FRESCOS
  { id:"f1", cat:"frescos", name:"Huevos x 12 (docena)", price:8.00, unit:"docena", emoji:"🥚" },
  { id:"f2", cat:"frescos", name:"Huevos x 30 (panal)", price:18.00, unit:"panal", emoji:"🥚" },
  { id:"f3", cat:"frescos", name:"Plátano de Seda", price:3.00, unit:"kg", emoji:"🍌" },
  { id:"f4", cat:"frescos", name:"Papa Amarilla", price:2.50, unit:"kg", emoji:"🥔" },

  // CUIDADO PERSONAL
  { id:"cp1", cat:"cuidado", name:"Pasta Dental Dento", price:3.50, unit:"unidad", emoji:"🦷" },
  { id:"cp2", cat:"cuidado", name:"Papel Higiénico x4", price:8.00, unit:"paquete", emoji:"🧻" },
  { id:"cp3", cat:"cuidado", name:"Toallas Higiénicas x8", price:4.50, unit:"paquete", emoji:"🌸" },
  { id:"cp4", cat:"cuidado", name:"Jabón Colgate", price:2.00, unit:"unidad", emoji:"🧼" },
  { id:"cp5", cat:"cuidado", name:"Lejía Clorox 1L", price:4.50, unit:"botella", emoji:"🧴" },
  { id:"cp6", cat:"cuidado", name:"Ambientador Popett", price:6.00, unit:"unidad", emoji:"🌺" },

  // MASCOTAS
  { id:"m1", cat:"mascotas", name:"Faraón Adulto 15kg", price:135.00, unit:"saco", emoji:"🐕" },
  { id:"m2", cat:"mascotas", name:"Faraón Cachorro 8kg", price:78.00, unit:"saco", emoji:"🐶" },
  { id:"m3", cat:"mascotas", name:"Super Can 2kg", price:18.00, unit:"bolsa", emoji:"🦴" },
];

const CARD_COLORS = ["#E4F5F7","#FFE9E9","#FFF3DA","#E9F7EC","#F1E9FB","#FDE9F1"];
function colorFor(id){
  let hash = 0;
  for(const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return CARD_COLORS[hash % CARD_COLORS.length];
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
        <div class="category-banner-inner">
          <span class="category-banner-emoji">${cat.emoji}</span>
          <div>
            <h3>${cat.name}</h3>
            <span>${cat.desc} · foto referencial de nuestra tienda</span>
          </div>
        </div>
      </div>
      <div class="product-grid">
        ${items.map(p=>`
          <article class="product-card" data-id="${p.id}">
            <div class="product-visual" style="background:${colorFor(p.id)}">${p.emoji}</div>
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
          <div class="cart-item-visual" style="background:${colorFor(id)}">${p.emoji}</div>
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
