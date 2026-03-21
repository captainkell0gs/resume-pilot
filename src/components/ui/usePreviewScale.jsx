import { useEffect, useState } from "react";

export default function usePreviewScale(containerRef, documentWidth = 794, padding = 32) {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        function updateScale() {
        if (!containerRef.current) return;

        const containerWidth = containerRef.current.clientWidth;
        const availableWidth = containerWidth - padding * 2;
        const nextScale = Math.min(1, availableWidth / documentWidth);

        setScale(nextScale);
        }

        updateScale();

        const resizeObserver = new ResizeObserver(updateScale);

        if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
        }

        window.addEventListener("resize", updateScale);

        return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", updateScale);
        };
    }, [containerRef, documentWidth, padding]);

    return scale;
}