# Peça de Portfólio #03 — Stride 01 (E-commerce + 3D interativo)

Landing de e-commerce para um tênis de corrida (marca DTC fictícia "STRIDE").
Destaque: **experiência 3D interativa de verdade** (scrollytelling), nível "site de produto premium".

## Como ver (precisa de servidor local)
O 3D usa `<model-viewer>`, que **não roda abrindo o arquivo direto** (file://) — precisa de servidor.
1. Na pasta `VIDA NA GRINGA`: `python -m http.server 8123`
2. Abra: `http://127.0.0.1:8123/portfolio/03-ecommerce/index.html`

(No deploy via HTTPS funciona sozinho.)

## O que essa peça demonstra
- **Modelo 3D realista do tênis** (`<model-viewer>` + .glb com materiais PBR, iluminação de estúdio e sombra):
  - **Arrasta pra girar 360°** e explorar de qualquer ângulo
  - **Hero "scrollytelling"**: o tênis fica fixo enquanto a câmera faz um **tour cinematográfico** conforme você rola, com legendas que trocam (knit → entressola → solado)
  - **Troca de colorway ao vivo** usando as **variações reais embutidas no modelo** (Midnight / Beach / Street) — não é gambiarra de cor, é o recurso KHR_materials_variants do glTF
- Carrinho funcional, barra de compra fixa, trust badges, features, specs, avaliações com distribuição, galeria UGC, cross-sell, FAQ
- Tipografia de produto (Space Grotesk + Inter), acento laranja · responsivo

## Tecnologias
HTML5 · CSS3 · JavaScript · **`<model-viewer>` (WebGL/Three.js)** · glTF/GLB com material variants

## Créditos do modelo 3D
`shoe.glb` — "MaterialsVariantsShoe", © Shopify / Khronos, CC0 1.0 (glTF Sample Assets). Em produção, troca-se pelo modelo 3D do produto real do cliente.

---

## Texto pronto pra portfólio / proposta

### 🇧🇷 Português
> **Stride 01 — E-commerce com tênis em 3D interativo**
> Página de produto com experiência 3D imersiva: tênis que gira 360° no mouse,
> tour de câmera cinematográfico no scroll e **troca de colorway ao vivo** (variações
> reais do modelo 3D), além de carrinho, avaliações, specs e FAQ. 100% responsivo.

### 🇺🇸 English (Fiverr/Upwork)
> **Stride 01 — E-commerce with an interactive 3D sneaker**
> An immersive product page: a 3D shoe you spin 360°, a cinematic scroll-driven
> camera tour, and **live colourway switching** powered by real glTF material variants —
> plus cart, reviews, specs and FAQ. Built with model-viewer + WebGL. Fully responsive.
