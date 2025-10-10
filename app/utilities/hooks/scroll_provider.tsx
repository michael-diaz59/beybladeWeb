import React, { useCallback } from "react";
import { createContext, useEffect, useState } from "react";


/**
 * Define la estructura de los valores compartidos por el ScrollContext.
 */
export interface ScrollContextType {
  /**
   * Posición vertical actual del scroll en píxeles.
   *
   * @example
   * // Si el usuario ha bajado 250 píxeles:
   * scrollY === 250
   */
  scrollY: number;

  /**
   * Indica si el usuario ya hizo scroll más allá de 5px).
   *
   * @remarks
   * Esto permite activar transiciones o animaciones solo cuando
   * el usuario ha comenzado a desplazarse.
   */
  hasScrolled: boolean;

   /**
   * Indica si el usuario llego al final de la pagina.
   *
   * @remarks
   * Esto permite activar transiciones o animaciones solo cuando
   * el usuario ha llegado al final de la pagina.
   */
  atBottom: boolean;

  /**
   * Dirección actual del desplazamiento vertical.
   *
   * - `"up"` → El usuario se está desplazando hacia arriba.
   * - `"down"` → El usuario se está desplazando hacia abajo.
   * - `"none"` → No hay movimiento detectado.
   *
   * @defaultValue "none"
   */
  scrollDirection: "up" | "down" | "none";
}

/**
 * Contexto de React que provee información sobre el estado del scroll.
 *
 * @remarks
 * Este contexto debe ser consumido a través de `useScroll()` dentro de un
 * `ScrollProvider`.
 */
export const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  hasScrolled: false,
  atBottom:false,
  scrollDirection: "none",
});

/**
 * Proveedor que gestiona el estado del scroll y lo expone a los componentes hijos
 * mediante el `ScrollContext`.
 *
 * @param props.children Componentes que tendrán acceso al contexto del scroll.
 *
 * @example
 * ```tsx
 * <ScrollProvider>
 *   <App />
 * </ScrollProvider>
 * ```
 */
export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [atBottom, setAtBottom]=useState(false);
  const [scrollDirection, setScrollDirection] = useState<
    "up" | "down" | "none"
  >("none");

  // Guardamos la posición previa para detectar dirección
  const prevScrollY = React.useRef(0);

  /**
   * Listener optimizado que actualiza el estado del scroll.
   */
   const handleScroll = useCallback((target: HTMLElement) => {
    const currentY = target.scrollTop;
      const clientHeight = target.clientHeight;        // 👈 altura visible del contenedor
  const scrollHeight = target.scrollHeight;  
    setScrollY(currentY);
    setHasScrolled(currentY > 120);
    console.log("scrollHeight:"+scrollHeight)
    setAtBottom(currentY + clientHeight >= scrollHeight - 100)


    if (currentY > prevScrollY.current) {
      setScrollDirection("down");
    } else if (currentY < prevScrollY.current) {
      setScrollDirection("up");
    } else {
      setScrollDirection("none");
    }

    prevScrollY.current = currentY;
  }, []);


   useEffect(() => {
    const el = document.querySelector("main");
    if (!el) {
      console.warn("[ScrollProvider] No se encontró el elemento <main>.");
      return;
    }

    const listener = () => handleScroll(el);

    el.addEventListener("scroll", listener, { passive: true });
    console.log("[ScrollProvider] Escuchando scroll en <main>");
     {/* Puedes comentar bloques enteros 
    return () => {
      el.removeEventListener("scroll", listener);
      console.log("[ScrollProvider] Listener de scroll removido");
    };
    */}
  }, [handleScroll]);

  useEffect(() => {
  console.log(
    `%c[ScrollProvider]`,
    "color:#4fc3f7; font-weight:bold;",
    {
      scrollY,
      hasScrolled,
      atBottom,
      scrollDirection,
    }
  );
}, [scrollY, hasScrolled,atBottom, scrollDirection]);

  return (
    <ScrollContext.Provider value={{ scrollY, hasScrolled,atBottom, scrollDirection }}>
      {children}
    </ScrollContext.Provider>
  );
};

/**
 * Hook que simplifica el acceso al `ScrollContext`.
 *
 * @returns El estado actual del scroll (`scrollY`, `hasScrolled`, `scrollDirection`).
 *
 * @example
 * ```tsx
 * const { scrollY, hasScrolled, scrollDirection } = useScroll();
 *
 * return <p>Scroll actual: {scrollY}px</p>;
 * ```
 */
export const useScroll = (): ScrollContextType => {
  const context = React.useContext(ScrollContext);
  return context;
};