const svg = document.getElementById("drawingArea");
let drawing = false;
let currentPath = null;

// Start drawing on mouse down
svg.addEventListener("mousedown", (e) => {
  drawing = true;
  const x = e.offsetX;
  const y = e.offsetY;

  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("stroke", "blue");
  currentPath.setAttribute("stroke-width", "2");
  currentPath.setAttribute("fill", "none");
  currentPath.setAttribute("d", `M ${x} ${y}`);

  svg.appendChild(currentPath);
});

// Draw path while moving mouse
svg.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  const x = e.offsetX;
  const y = e.offsetY;

  let d = currentPath.getAttribute("d");
  d += ` L ${x} ${y}`;
  currentPath.setAttribute("d", d);
});

// Stop drawing on mouse release
svg.addEventListener("mouseup", () => {
  drawing = false;
  currentPath = null;
});

// Stop drawing if mouse leaves SVG
svg.addEventListener("mouseleave", () => {
  drawing = false;
  currentPath = null;
});
