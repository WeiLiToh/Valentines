async function loadGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  try {
    const res = await fetch("manifest.json", { cache: "no-store" });
    if (!res.ok) throw new Error("No manifest.json yet");
    const files = await res.json();

    gallery.innerHTML = "";
    files.forEach((f, i) => {
      const wrap = document.createElement("div");
      wrap.className = "ph";

      const img = document.createElement("img");
      img.src = `photos/${f}`;
      img.loading = "lazy";
      img.alt = `photo ${i + 1}`;

      const tag = document.createElement("span");
      tag.textContent = `💕 ${i + 1}`;

      wrap.appendChild(img);
      wrap.appendChild(tag);
      gallery.appendChild(wrap);
    });
  } catch (e) {
    gallery.innerHTML = `<div style="opacity:.8">Upload photos to <b>photos/</b> and push — gallery will appear ✨</div>`;
  }
}

loadGallery();
