# PROJECT STATUS · Mis Primeros Amigos

> Estado del proyecto al **11 de octubre de 2026**.
> Sitio web del Centro de Educación Inicial **Mis Primeros Amigos** (Riobamba, Ecuador), diseñado con el **diseño emocional de Don Norman** (niveles visceral, conductual y reflexivo).

---

## 1. Enlaces y ubicaciones

| Qué | Dónde |
|---|---|
| Carpeta local | `C:\Users\Administrador\Documents\MISPRIMEROSAMIGOS` |
| Repositorio GitHub | https://github.com/plema3974/misprimerosamigos (rama `main`) |
| Sitio publicado (GitHub Pages, si está activado) | https://plema3974.github.io/misprimerosamigos/ |
| Archivo Figma | https://www.figma.com/design/2Bt3vgOPNkGMSlBA4wTiRR/Prototipo-1 |
| File key de Figma | `2Bt3vgOPNkGMSlBA4wTiRR` |

### Contacto y redes usadas en el sitio
| Dato | Valor |
|---|---|
| Teléfono / WhatsApp | 0987148874 → `593987148874` (formato internacional) |
| Correo | kattia.mpa@hotmail.com |
| Dirección | Duchicela y Reina Pacha, Riobamba |
| Horario | Lunes a Viernes, 08:00 – 13:00 |
| Facebook | https://www.facebook.com/share/1DsjjjvpKM/ |
| Instagram | https://www.instagram.com/cei_mis_primeros_amigos |
| TikTok (video del tour) | https://vt.tiktok.com/ZSbTF8Mmg/ |

### Enlaces de WhatsApp (abren el chat con mensaje escrito)
- Botón "Agendar Visita": `https://wa.me/593987148874?text=Hola%2C%20quisiera%20agendar%20una%20visita`
- Botón flotante: `https://wa.me/593987148874?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20Mis%20Primeros%20Amigos`
- "Llamar Ahora": `tel:+593987148874`

---

## 2. Orden del proceso de diseño

1. **Wireframe de baja fidelidad** (gris): estructura y jerarquía.
2. **Prototipo de alta fidelidad** en Figma: móvil (diseño original) y escritorio (nuevo).
3. **Desarrollo** en HTML + CSS + JS: móvil, tablet y escritorio.
4. **Publicación** en GitHub.

---

## 3. Desarrollo (código)

### Tecnologías
- HTML5 semántico, CSS3 sin frameworks (mobile-first), JavaScript vanilla.
- Fuentes de Google Fonts: **Poppins** (títulos), **Fredoka** (programas y horarios), **Itim** (frase del hero), **M PLUS Rounded 1c** (botones y pie de página), **Russo One** (texto del llamado a la acción).

### Estructura de archivos
```
index.html          Página única con todas las secciones
css/styles.css      Estilos (variables, móvil, tablet, desktop)
js/main.js          Menú, animaciones, carruseles y lightbox
img/                Fotos (.jpg/.webp), ilustraciones (.svg)
img/icons/          Iconos SVG exportados de Figma
video/tour.mp4      Video del tour (comprimido de 12.6 MB a 8 MB)
README.md           Descripción del proyecto para GitHub
.gitignore          Ignora archivos de sistema y "Claude outputs/"
project_status.md   Este documento
```

### Puntos de quiebre (responsive)
| Dispositivo | Ancho | Comportamiento principal |
|---|---|---|
| Móvil | < 768 px | Una columna, menú hamburguesa (base del prototipo de 412 px) |
| Tablet | ≥ 768 px | 2 columnas en tarjetas, galería y pie de página |
| Escritorio | ≥ 1024 px | Menú visible, 3–4 columnas, hero a pantalla amplia |
| Pantallas amplias | ≥ 1280 px | Ajustes de tamaño en el hero |

### Paleta de colores (variables en `:root`)
| Variable | Color | Uso |
|---|---|---|
| `--blue-dark` | `#015182` | Títulos de sección, menú |
| `--blue` | `#0389d2` | Títulos de programas y horarios |
| `--blue-band` | `#2e5aa7` | Banda de horarios y pie de página |
| `--blue-btn` | `#688bc7` | Botón "Agendar Visita" |
| `--orange` | `#ffa62b` | "Nuestros Valores", "Galería", acentos, botón activo |
| `--orange-line` | `#fea439` | Borde punteado de los valores |
| Tarjetas confianza | `rgba(234,218,222,.8)` | Fondo rosado de "¿Por qué confiar?" |

### Secciones de la página (en orden)
1. **Cabecera**: logo, menú (Inicio, ¿Por qué elegirnos?, Programas, Galería, Ubicación), botón "Agendar visita", iconos de Instagram y TikTok. Fija al hacer scroll y se achica. En móvil y tablet usa menú hamburguesa.
2. **Hero**: foto principal y la frase "Aquí comienzan las grandes historias y sus primeros amigos". En escritorio suma los botones "Agendar visita" y "Ver programas".
3. **¿Por qué confiar en nosotros?**: fondo de olas y un cohete animado. Cuatro tarjetas: Ambiente Seguro, Estimulación Temprana, Nutrición y Áreas Verdes.
4. **Nuestros Valores**: Amor, Respeto, Empatía y Creatividad, con ilustraciones SVG de animalitos que se balancean al pasar el mouse.
5. **Programas**: Danza/Música, Arte y Juego. Cada uno con foto, descripción y lista con iconos.
6. **Horarios y Servicios**: dos tarjetas y una foto grupal.
7. **Galería**: tren decorativo, título y **6 carruseles** (ver abajo).
8. **Llamado a la acción**: animalitos colgando, botones de WhatsApp y llamada, y etiquetas de beneficios.
9. **Tour de la instalación**: video propio (`video/tour.mp4`) con portada y botón "Ver en TikTok".
10. **Pie de página**: nubes en **SVG**, logo, lema, redes, horario, mapa (abre Google Maps), contacto y enlaces rápidos.
11. **Botón de WhatsApp flotante** fijo en la esquina.

### Galería: 6 carruseles horizontales
Cada figura de la galería conserva su forma original (nube, estrella, flor, escudo, sello y forma alta). Las fotos nuevas se recortaron con esa misma forma.

| # | Figura | Fotos | Archivos |
|---|---|---|---|
| 1 | Nube (danza) | 5 | `galeria-1.webp`, `carrusel-2` … `carrusel-5.webp` |
| 2 | Estrella (trofeo / fútbol) | 4 | `galeria-2.webp`, `carrusel2-2` … `carrusel2-4.webp` |
| 3 | Flor (niño pintando / aula) | 4 | `galeria-4.webp`, `carrusel3-2` … `carrusel3-4.webp` |
| 4 | Escudo (duendes navideños) | 3 | `galeria-5.webp`, `carrusel4-2` (ángeles con tambor), `carrusel4-3` (ángel en pesebre) |
| 5 | Sello (tren de los valores) | 3 | `galeria-3.webp`, `carrusel5-2` (caballito), `carrusel5-3` (niño riendo) |
| 6 | Forma alta (pesebre) | 3 | `galeria-6.webp`, `carrusel6-2` (duendes con instrumentos), `carrusel6-3` (niños en el piso) |

**Funcionamiento de los carruseles:**
- Flechas ‹ › (la de "siguiente" en naranja) y puntos indicadores.
- Se pueden deslizar con el dedo y con las flechas del teclado.
- Avanzan solos cada 4.5 s y se pausan cuando el usuario pasa el mouse, los toca o abre el lightbox.
- Se quitó el icono **+** de todas las fotos.

### Lightbox (foto ampliada)
- Al hacer clic en una foto se abren **todas las fotos de esa figura**, empezando por la que se tocó.
- Se pueden recorrer con flechas, deslizando, con el teclado o con los puntos. Abajo hay un contador "2 / 5".
- Se cierra con la ✕, con Esc o tocando el fondo.

### Accesibilidad y rendimiento
- Textos alternativos (`alt`) en todas las fotos, `aria-label` en los botones y foco visible.
- `prefers-reduced-motion` desactiva las animaciones.
- Imágenes optimizadas en WebP/JPG con `loading="lazy"`.
- Nubes del pie en SVG: unos 3 KB en vez de 30 KB.

### Correcciones importantes
- **Nubes del pie cortadas:** primero se recortó la imagen; al final se reemplazó por **nubes en SVG** de tres capas (blanco, celeste claro y celeste), con sombra suave.
- **Cambios que no se veían en la computadora:** la copia en la carpeta local quedaba vieja. Ahora cada archivo enviado se verifica comparando su contenido (hash md5).
- **Caché del navegador:** recargar con **Ctrl + F5**.

### Archivos que ya no se usan (se pueden borrar)
- `img/nubes-footer.webp`
- `img/nubes-pie.webp`
- `img/icons/component.svg`

---

## 4. Figma

Archivo: **Prototipo-1** (`2Bt3vgOPNkGMSlBA4wTiRR`). Tiene 3 páginas.

### 4.1 Página "Móvil" (antes "Page 1"): prototipo original + mejoras
| Elemento | ID | Notas |
|---|---|---|
| Splash 1 | `11:32` | Pasa a Splash 2 a los 0.8 s (ya existía) |
| Splash 2 | `27:48` | **Nuevo:** a los 1.2 s pasa a Inicio con fundido |
| Home / Inicio | `4:2` | 412 × 8764 px |
| Sección "Lightbox · Móvil (overlays)" | — | 22 pantallas de foto ampliada |

**Cambios hechos en el móvil:**
- Se metieron dentro del marco Home unas 30 capas que estaban sueltas encima (fotos de galería, mapa, tarjetas, iconos). Antes no aparecían al presentar el prototipo.
- Interacciones nuevas: WhatsApp, Agendar, Llamar, Instagram, Facebook, TikTok y mapa abren sus enlaces.
- La imagen de nubes del pie se cambió por las **nubes en SVG**, igual que en la web.
- Las 6 fotos de la galería ahora son **instancias de carrusel**.
- Los iconos **+** sueltos (`128:51`, `128:45`) se sacaron del marco y quedaron a la derecha. No se borraron porque son componentes.
- **Lightbox móvil:** al tocar un carrusel se abre la foto ampliada en la **primera foto** de esa figura, y se avanza con las flechas. No se puede abrir en la foto exacta porque el carrusel es un componente compartido con Desktop y los overlays móviles están en otra página.
- **Flujo:** "Móvil" empieza en Splash 1.

### 4.2 Página "Desktop": prototipo de escritorio (nuevo)
| Elemento | ID |
|---|---|
| Desktop / Inicio (1440 px) | `170:64` |
| Componentes · Desktop | `170:9` |
| Sección "Lightbox · Desktop (overlays)" | 22 pantallas de 1440 × 900 |

**Construcción:** todo con capas editables y auto layout, sin capturas pegadas. Usa las mismas fotos, ilustraciones, iconos y fuentes del móvil.

**Componentes creados** (en "Componentes · Desktop"):
- `Button/Primary`, `Button/Ghost`, `Button/Blue`, `Button/Light`
- `NavLink` (con propiedad "Activo")
- `FeatureCard`, `ValueCard`, `InfoCard`, `ProgramCard`, `GalleryItem`
- `Ilustración/Amor`, `/Respeto`, `/Empatía`, `/Creatividad`
- **Carruseles** (component sets con una variante por foto):

| Componente | ID | Variantes |
|---|---|---|
| Carrusel galería | `212:1031` | 5 |
| Carrusel galería 2 | `214:1036` | 4 |
| Carrusel galería 3 | `219:1041` | 4 |
| Carrusel galería 4 | `219:1118` | 3 |
| Carrusel galería 5 | `219:1174` | 3 |
| Carrusel galería 6 | `219:1240` | 3 |

**Interacciones del prototipo de escritorio:**
- La cabecera queda fija al hacer scroll, igual que el botón de WhatsApp.
- Menú, logo, botones del hero y enlaces rápidos del pie bajan a su sección (Scroll to).
- WhatsApp, llamada, redes, TikTok, mapa y correo abren sus enlaces.
- Carruseles: las flechas y los puntos cambian de foto con animación (Change to + Smart animate), y avanzan solos cada 4 s.
- Al hacer clic en la foto actual de un carrusel se abre el **lightbox** de esa misma foto. Ahí se navega con flechas y puntos (Swap overlay) y se cierra con la ✕.
- **Flujo:** "Desktop".
- **Ajuste manual pendiente:** en **Prototype → Device** de la página Desktop hay que elegir "Desktop" (Figma no permite configurarlo por código).

### 4.3 Página "Wireframe · Baja fidelidad"
| Elemento | ID |
|---|---|
| Sección del tablero | `204:186` |
| WF Móvil / Splash | `204:190` |
| WF Móvil / Inicio (412 px) | `202:9` |
| WF Desktop / Inicio (1440 px) | `203:92` |
| WF Móvil / Lightbox | `222:392` |
| WF Desktop / Lightbox | `222:411` |
| Componentes wireframe | `201:10` |

**Contenido:**
- Título "MIS PRIMEROS AMIGOS · Wireframe · Baja fidelidad", con la referencia a Don Norman.
- 01 Splash, 02 Inicio Móvil, 03 Inicio Desktop y **04 Lightbox**.
- Lenguaje gris: imágenes como caja con X y etiqueta, textos como barras, iconos como círculos y botones como rectángulos.
- Galería como **carruseles** (flechas ‹ › y puntos).
- Notas manuscritas que explican cada sección y el lightbox.
- Flecha de flujo Splash → Inicio ("1.2 s · fundido").
- **Componentes:** `WF/Imagen`, `WF/Texto`, `WF/Título`, `WF/Icono`, `WF/Botón`, `WF/Nota`.
- **Flujos navegables:** "Wireframe móvil" y "Wireframe desktop". El primer carrusel abre el lightbox gris.

---

## 5. GitHub

- Repositorio creado por el usuario y primer push hecho desde **Git Bash** el 11/10/2026 (83 objetos, 11.7 MB).
- Configuración de Git:
  ```bash
  git config --global user.email "plema3974@gmail.com"
  git config --global user.name "Tu Nombre"
  ```
- **Para subir cambios futuros** (en la carpeta del proyecto):
  ```bash
  git add .
  git commit -m "Descripción del cambio"
  git push
  ```
- **Publicar en GitHub Pages:** Settings → Pages → Branch `main` / `(root)` → Save.
- Claude no tiene acceso de escritura al repositorio. El push lo hace el usuario.
- Se propuso la skill **`publicar-mis-primeros-amigos`** para guiar la verificación y los comandos de subida en sesiones nuevas.

---

## 6. Pendientes y sugerencias

- [ ] Elegir "Desktop" como dispositivo en Prototype de la página Desktop de Figma.
- [ ] Activar GitHub Pages y revisar el sitio publicado.
- [ ] Borrar los archivos que ya no se usan (sección 3).
- [ ] (Opcional) Cambiar las nubes de "Nuestros Valores" a SVG, igual que las del pie.
- [ ] (Opcional) Diseñar en Figma el menú desplegable del móvil y conectarlo al icono hamburguesa.
- [ ] (Opcional) Separar los "Enlaces rápidos" del pie móvil en textos individuales para poder enlazarlos.
- [ ] (Opcional) Hacer la versión tablet en Figma.
- [ ] Revisar la foto de duendes del carrusel 6: es casi igual a la del carrusel 4.

---

## 7. Cómo retomar en una sesión nueva

1. Conectar la carpeta **MISPRIMEROSAMIGOS**.
2. Compartir el enlace de Figma y pedirle a Claude que lea este archivo, `project_status.md`.
3. Hacer los cambios y, al final, pedir "sube los cambios" para usar la skill de publicación.
