# fedevilla.design · Portfolio web

Portfolio personal de **fedevilla.design**. Es la "segunda ventana" del Instagram profesional: el lugar donde un posible cliente ve todos los proyectos y entiende cómo pienso y trabajo.

**Quién soy (así se comunica en todo el sitio):** primero diseñador UX/UI, después también desarrollo. No usar "full-stack". Tagline: *"Diseñador UX/UI que también desarrolla."*

---

## Forma de trabajo

- **Mobile first.** Se construye primero la versión mobile y después se escala a escritorio.
- **Avances chicos y publicables.** Cada paso tiene que poder verse en un deploy de preview para mostrarlo en Instagram.
- **Orden de construcción:** 1) base del proyecto y tokens → 2) componentes base → 3) **Home mobile** → 4) Home escritorio → 5) Proyectos → 6) Caso de proyecto → 7) Sobre mí → 8) Contacto.
- Antes de cada etapa, proponer el plan y esperar confirmación. Al terminar, resumir qué se hizo y qué queda.
- Commits chicos y descriptivos (Conventional Commits: `feat:`, `fix:`, `style:`, `chore:`…).
- Idioma del sitio: español rioplatense, tratando de **vos** ("Escribime", "Mirá", "Deslizá").

---

## Fuentes de verdad en Figma

Usar el servidor MCP de Figma (`get_design_context`, `get_variable_defs`, `get_screenshot`) para leer valores reales. Si algo de este archivo contradice a Figma, **manda Figma** y avisar la diferencia.

**Archivo Portfolio** · fileKey `deq7rpqKYuKCgrCeY9yWgN`
- Página **Sistema de diseño** (node `22:2`): variables, estilos de texto y componentes.
- Página **Wireframes Alta**: diseño final por página.
  - Home · Mobile → node `26:128`
  - Home · Desktop → node `26:3`
  - Proyectos · Desktop / Mobile, Caso · Biblioteca de Letrita · Desktop / Mobile, Sobre mí, Contacto (buscar por nombre de frame).
- Página **Recursos · capturas**: pantallas reales de los proyectos como componentes `Pantalla / Letrita · …` y portadas `Portada / …`. Exportar desde acá las imágenes para `public/`.
- Página **Wireframe media**: versión de media fidelidad (solo referencia de estructura).

**Archivo Instagram** · fileKey `qU3qDHElRkn6SoW6gsmOhS`
- Referencia de motion de la Home mobile: frame "Concepto A · Carpetas · Mobile" (node `68:8865`, animación de 7,2 s).
- Sistema visual de Instagram (página "01 · Sistema de diseño").

---

## Stack

- **Next.js** (App Router) + **TypeScript** (strict).
- **CSS Modules** + **custom properties** generadas desde los tokens de Figma. Sin Tailwind.
- **Motion** (motion.dev, ex Framer Motion) para animaciones e interacciones.
- Fuentes: **Satoshi** (Fontshare, self-hosted en `src/fonts/` con `next/font/local`) e **IBM Plex Mono** (`next/font/google`).
- Imágenes con `next/image`.
- Deploy en **Vercel** (preview por cada PR).
- Calidad: ESLint + Prettier. CI en **GitHub Actions**: lint, typecheck y build en cada PR.

---

## Arquitectura propuesta

```
src/
  app/
    layout.tsx              # fuentes, metadata, Nav y Footer
    page.tsx                # Home (una sola pantalla: hero con carpetas)
    proyectos/
      page.tsx              # grilla de carpetas + filtros
      [slug]/page.tsx       # caso de proyecto (plantilla)
    sobre-mi/page.tsx       # bio, qué hago, proceso (#proceso), principios, habilidades
    contacto/page.tsx       # formulario, canales, FAQ
    not-found.tsx
  components/
    ui/                     # Button, Chip, Logo, Field, SectionHeader, NumberedItem, Quote, Stat
    layout/                 # Nav, Footer, Section (con tema claro/oscuro)
    project/                # Folder, FolderDeck, FolderGrid, Mockup, BeforeAfterRow, TagGroup
  content/
    projects.ts             # datos de cada proyecto (ver modelo abajo)
  styles/
    tokens.css              # primitivos + tokens semánticos (claro/oscuro)
    typography.css          # clases de estilos de texto
    globals.css             # reset, base, utilidades mínimas
  lib/
    motion.ts               # easings y duraciones compartidas
public/
  images/projects/<slug>/   # portadas y pantallas exportadas de Figma
  fonts/                    # Satoshi (en src/fonts/, procesada por next/font/local)
```

**Modelo de proyecto (`content/projects.ts`):**
`slug`, `number` ("01"), `name`, `meta` (ej. "UX/UI + Dev · En producción"), `status` ("En producción" | "En curso"), `year`, `color` (token de color de la carpeta), `cover`, `roles[]`, `platform[]`, `stack[]` y las secciones del caso.

**Proyectos actuales:**
| # | Nombre | Color de carpeta | Estado |
|---|---|---|---|
| 01 | Biblioteca de Letrita | Suave | En producción · v1.0 |
| 02 | Actitud · App de socios | Carbón (texto Cálido, número Terracota) | En curso |
| 03 | fedevilla.design (identidad para Instagram) | Terracota (texto Carbón) | 2026 |
| + | Tu proyecto (carpeta punteada, invita a escribir) | — | — |

---

## Tokens de diseño

### Primitivos de color
| Token | Hex |
|---|---|
| carbon | `#171717` |
| carbon-2 | `#232323` |
| linea-oscura | `#3A3836` |
| calido | `#F7F5F0` |
| blanco | `#FFFFFF` |
| gris | `#D9D5CE` |
| piedra | `#6E6A64` |
| terracota | `#DB9558` |
| oscuro | `#A96836` |
| suave | `#EBC7A5` |

### Tokens semánticos (modo claro / oscuro)
| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| fondo/pagina | calido | carbon | Fondo general |
| fondo/superficie | blanco | carbon-2 | Tarjetas, campos, bloques |
| texto/primario | carbon | calido | Títulos y texto principal |
| texto/secundario | piedra | gris | Bajadas y metadatos |
| borde/default | gris | linea-oscura | Bordes, divisores, chips |
| accion/primaria | carbon | calido | Fondo del botón principal |
| accion/sobre-primaria | calido | carbon | Texto sobre el botón principal |
| acento/decorativo | terracota | terracota | Círculo blur, trazos, detalles |
| acento/texto | oscuro | terracota | Números en itálica y labels de acento |

Implementación: variables CSS en `:root` y `[data-theme="dark"]`. Las secciones oscuras (cierres, "Probala") usan `data-theme="dark"` en la sección, no colores sueltos.

### Espacios (base 4)
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120
Uso: 4–16 dentro de componentes · 20–48 entre elementos · 64–120 entre secciones.

### Radios
xs 6 · sm 12 · md 16 · lg 20 · xl 24 · pill 999

### Grilla y breakpoints
- Mobile (base 390): 4 columnas, margen 20, gutter 12.
- Tablet: desde 768.
- Desktop (base 1440): 12 columnas, margen 120, gutter 24, contenido máx. 1200.

---

## Tipografía

- **Satoshi:** títulos, números, botones, marca. Pesos: Bold y Light Italic.
- **IBM Plex Mono:** cuerpo, bajadas, labels, metadatos. Pesos: Regular y Medium.

| Estilo | Fuente | Desktop | Mobile | Interlineado | Tracking |
|---|---|---|---|---|---|
| Display | Satoshi Bold | 200 | 84 | 100% | −4% |
| H1 | Satoshi Bold | 112 | 44 | 100% | −4% |
| H2 | Satoshi Bold | 56 | 32 | 105% | −2% |
| H3 | Satoshi Bold | 32 | 22 | 110% | −1% |
| H4 | Satoshi Bold | 22 | 18 | 120% | 0 |
| Número L | Satoshi Light Italic | 96 | 48 | 100% | 0 |
| Número M | Satoshi Light Italic | 48 | 32 | 100% | 0 |
| Body L | Plex Mono Regular | 19 | 15 | 160% | 0 |
| Body | Plex Mono Regular | 16 | 14 | 160% | 0 |
| Small | Plex Mono Regular | 13 | 12 | 150% | 0 |
| Label | Plex Mono Medium, MAYÚSCULAS | 13 | 11 | 140% | +8% |
| Botón | Satoshi Bold | 15 | 14 | 120% | 0 |

Usar `clamp()` para pasar suavemente de mobile a desktop en Display, H1 y H2.

---

## Componentes (Figma → código)

| Figma | Código | Variantes / props |
|---|---|---|
| Logo | `Logo` | `variant: "full" \| "monogram"` (monograma "fv" en círculo + "fedevilla.design") |
| Botón | `Button` | `variant: primary \| secondary \| text`, `size: L \| M`, flecha opcional. En mobile, CTAs principales a todo el ancho |
| Chip | `Chip` | `active` |
| Campo de formulario | `Field` | estados default, focus, error |
| Carpeta de proyecto | `Folder` | `state: rest \| hover`, número, nombre, meta, color, portada |
| Carpeta · Tu proyecto | `Folder variant="cta"` | punteada |
| Encabezado de sección | `SectionHeader` | label + título |
| Paso de proceso | `ProcessStep` | número, título, descripción |
| Tarjeta de servicio | `ServiceCard` | título, descripción, lista |
| Grupo de etiquetas | `TagGroup` | label + chips |
| Cita / Dato destacado / Fila antes-ahora / Ítem numerado | `Quote`, `Stat`, `BeforeAfterRow`, `NumberedItem` | — |
| Mockup · Mobile / Escritorio | `Mockup` | `device`, `src`, `url` |
| Navegación | `Nav` | desktop: logo, links (Sobre mí, Proceso, Contacto) y CTA "Proyectos". Mobile: logo, CTA chico "Proyectos" y menú |
| Footer | `Footer` | marca, navegación y redes en columnas; legal abajo |
| Barra índice | `IndexBar` | "● Índice" · "Colección de trabajos · 2026" · "#00" |
| Retrato | `Portrait` | silueta PNG con halo terracota |

**Elementos de firma:** círculo blur terracota (60–75 % de opacidad, blur 100–160 px, nunca sobre texto), números en Satoshi Light Italic, carpetas con portada que asoma.

---

## Primera meta: Home mobile (node `26:128`)

La Home es **una sola pantalla**.

1. **Nav:** logo completo a la izquierda; a la derecha, botón chico "Proyectos" y menú hamburguesa (abre overlay con Sobre mí, Proceso, Contacto).
2. **Hero:** "Portfolio" en Display (84 px mobile) y bajada en Small mono: *"Diseñador UX/UI que también desarrolla · 2026"*.
3. **Mazo de carpetas** (Letrita, Actitud, fedevilla.design), apiladas en cascada con leve rotación y el círculo blur detrás.

**Interacción y motion** (referencia: node `68:8865` del archivo Instagram):
- Entrada: título y bajada con fade + subida corta; carpetas suben escalonadas (≈120 ms entre cada una, ease-out).
- Tap en una carpeta: la portada sube (≈70 px) y escala 1,05; el frente baja levemente. Segundo tap → navega al caso.
- Swipe hacia arriba: la carpeta de arriba sale y las demás suben un lugar.
- Respetar `prefers-reduced-motion`: sin desplazamientos, solo fundidos.

---

## Criterios

- **Contenido real:** no inventar métricas, funcionalidades ni resultados. Los datos de proyectos salen de los casos de estudio en Figma.
- **Sin nombres de clientes** en textos públicos (criterio definido para Instagram y el portfolio). Usar formulaciones neutras.
- **Accesibilidad:** contraste AA como mínimo, foco visible, objetivos táctiles ≥ 44 px, textos alternativos, HTML semántico.
- **Performance:** imágenes optimizadas (AVIF/WebP), fuentes con `display: swap`, objetivo Lighthouse ≥ 90 en todo.
- El catálogo en vivo de Letrita tiene botones de WhatsApp reales: siempre acompañarlo del aviso de no enviar mensajes.

---

## Pendientes conocidos

- Portadas reales de Actitud y fedevilla.design (hoy placeholder).
- PNG del retrato sin fondo.
- Email y usuario de LinkedIn para Contacto y Footer.
- Confirmar si Actitud puede mostrarse públicamente (proyecto en curso).
