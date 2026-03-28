# Invisible Encoder

Una aplicación web simple que permite **codificar y decodificar texto utilizando caracteres invisibles Unicode**.
Convierte texto en una secuencia de caracteres *zero-width* para ocultar información sin que sea visible a simple vista.

---

## ✨ Características

* 🔒 Codificación de texto a caracteres invisibles
* 🔓 Decodificación de texto oculto
* 📋 Copiar resultado al portapapeles
* 🎨 Interfaz moderna con Tailwind CSS + DaisyUI
* ⚡ Funciona completamente en el navegador (sin backend)

---

## 🧠 ¿Cómo funciona?

El sistema convierte cada carácter en su representación binaria (8 bits):

Luego reemplaza:

* `0` → `U+200B` (Zero Width Space)
* `1` → `U+200C` (Zero Width Non-Joiner)

Esto genera un texto que **no es visible**, pero contiene información codificada.

---

## 🚀 Demo

Puedes abrir directamente el archivo `index.html` en tu navegador.

---

## 📦 Instalación

No requiere instalación.

```bash
git clone https://github.com/tu-usuario/invisible-encoder.git
cd invisible-encoder
```

Luego abre:

```bash
index.html
```

---

## 🛠️ Tecnologías usadas

* HTML5
* JavaScript (ES6+)
* Tailwind CSS
* DaisyUI
* Font Awesome

---

## ⚠️ Advertencias

* No es un método de cifrado seguro (no es criptografía)
* Es solo una técnica básica de ocultación (esteganografía)
* Algunos editores o plataformas pueden eliminar caracteres invisibles

---

## 📌 Uso recomendado

* Aprendizaje de binario y codificación
* Experimentos con Unicode
* Proyectos educativos

---

## 📄 Licencia

MIT License
