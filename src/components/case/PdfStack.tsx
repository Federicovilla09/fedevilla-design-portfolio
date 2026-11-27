// Tres hojas apiladas con renglones: el dibujo del "PDF" de antes
export default function PdfStack({ className }: { className?: string }) {
  const lines = [160, 172, 154, 136, 118, 100]; // largo de cada renglón

  return (
    <svg className={className} viewBox="0 0 304 350" fill="none" aria-hidden="true">
      {/* De atrás hacia adelante: lo último que se dibuja queda arriba */}
      <rect
        x="53"
        y="29"
        width="250"
        height="320"
        rx="16"
        fill="#fff"
        stroke="#D9D5CE"
        strokeWidth="2"
      />
      <rect
        x="27"
        y="15"
        width="250"
        height="320"
        rx="16"
        fill="#fff"
        stroke="#D9D5CE"
        strokeWidth="2"
      />
      <rect
        x="1"
        y="1"
        width="250"
        height="320"
        rx="16"
        fill="#fff"
        stroke="#D9D5CE"
        strokeWidth="2"
      />
      {lines.map((width, index) => (
        <rect key={index} x="31" y={41 + index * 30} width={width} height="10" rx="5" fill="#D9D5CE" />
      ))}
    </svg>
  );
}
