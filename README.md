# 🛒 Los Pepos — Mini Market

Página web para el mini market **Los Pepos** (Independencia, Lima). Catálogo por categorías, carrito de compras y pedido/pago final por WhatsApp + Yape.

## 📁 Estructura del proyecto

```
losspepos/
├── index.html          → página principal (todo el contenido)
├── styles.css           → estilos e identidad visual
├── script.js             → catálogo de productos + lógica del carrito
├── images/
│   ├── hero-local.jpg              → foto del local (fondo del hero)
│   ├── cat-bebidas-1.jpg           → foto referencial de bebidas
│   ├── cat-bebidas-2.jpg
│   ├── cat-golosinas.jpg
│   ├── cat-galletas-chocolates.jpg
│   ├── cat-snacks.jpg
│   ├── cat-abarrotes-cuidado.jpg
│   ├── cat-huevos.jpg
│   └── cat-mascotas.jpg
└── README.md
```

## 🚀 Cómo subirlo a GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `los-pepos-web`).
2. Sube **todos** los archivos y la carpeta `images/` completa, respetando la misma estructura de carpetas.
3. Ve a **Settings → Pages**.
4. En "Source" elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. En 1-2 minutos tu web estará disponible en:
   `https://tu-usuario.github.io/los-pepos-web/`

No necesitas ningún backend, base de datos ni build: es HTML/CSS/JS puro, funciona tal cual.

## ✏️ Cómo editar precios o productos

Abre `script.js` y busca el arreglo `PRODUCTS`. Cada producto es un objeto así:

```js
{ id:"b1", cat:"bebidas", name:"Inca Kola 500ml", price:3.00, unit:"botella", emoji:"🟡" },
```

- `id`: identificador único (no lo repitas).
- `cat`: debe coincidir con el `id` de una categoría en `CATEGORIES`.
- `name`, `price`, `unit`, `emoji`: lo que se muestra en la tarjeta.

Para agregar una **categoría nueva**, agrégala primero en el arreglo `CATEGORIES` (con su propia foto en `images/`) y luego agrega productos con ese `cat`.

## 📲 Número de WhatsApp / Yape

Configurado en la parte superior de `script.js`:

```js
const WHATSAPP_NUMBER = "51987059075"; // 987 059 075 con código de país
const YAPE_NUMBER = "987 059 075";
```

> Nota: para el Yape se usó el mismo número de celular que me diste, porque en Perú Yape funciona asociado al número de teléfono. Si tu cuenta Yape usa otro número, cámbialo aquí.

## 🖼️ Sobre las imágenes

Las fotos de categorías (bebidas, golosinas, galletas, snacks, abarrotes, huevos, mascotas) son las fotos reales de tu tienda que me enviaste, recortadas y optimizadas para web. La foto de fondo del hero (`hero-local.jpg`) es la imagen de tu local que me indicaste como referencial.

Los íconos de cada producto individual (🥤🍫🥚, etc.) son ilustrativos, ya que no se enviaron fotos de cada producto por separado. Cuando tengas fotos individuales de productos, puedes reemplazar el emoji del `product-visual` en `script.js` por una imagen real (`<img src="images/producto-x.jpg">`) sin tocar el resto del código.

## 🎨 Identidad visual

- **Turquesa** — el color real de las paredes del local.
- **Rojo coral** — inspirado en los exhibidores de la marca Costa.
- **Ámbar/naranja** — inspirado en los sacos de alimento para mascotas Faraón.
- Tipografías: **Baloo 2** (títulos, estilo bodega/cercano) + **Nunito Sans** (texto).
- El "cordel" decorativo bajo el hero hace referencia directa a las golosinas colgadas del techo de la tienda.
