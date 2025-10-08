import image from "app/src/images/underConstruction.png";

export default function UnderConstruction() {
  return (
    <div className="w-full h-full overflow-auto flex items-center justify-center">
      <img
        src={image}
        alt="ay , me descubriste antes de terminar esto, en un futuro esta parte de la web estará completa"
        className="object-contain max-w-full max-h-full min-w-[600px] min-h-[400px]"
        style={{ userSelect: "none", pointerEvents: "none" }}
      />
    </div>
  );
}