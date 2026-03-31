import { useEffect, useRef, useState, useCallback } from "react";

interface PretextHeadingProps {
  text: string;
  font: string;
  className?: string;
  lineHeight?: number;
}

export function PretextHeading({ text, font, className = "", lineHeight = 1 }: PretextHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const lastWidthRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const measure = useCallback(async () => {
    try {
      const pretext = await import("@chenglou/pretext");
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;
      if (width <= 0) return;

      // Skip if width hasn't meaningfully changed (within 2px)
      if (Math.abs(width - lastWidthRef.current) < 2 && measuredHeight !== null) return;
      lastWidthRef.current = width;

      const fontSizeMatch = font.match(/(\d+)px/);
      const fontSize = fontSizeMatch ? parseInt(fontSizeMatch[1]) : 120;
      const lh = fontSize * lineHeight;

      const prepared = pretext.prepare(text, font);
      const result = pretext.layout(prepared, width, lh);
      setMeasuredHeight(result.height);
    } catch {
      // fallback: just render normally
    }
  }, [text, font, lineHeight, measuredHeight]);

  useEffect(() => {
    // Initial measure after a short delay for fonts to settle
    const initTimer = setTimeout(measure, 50);

    const observer = new ResizeObserver(() => {
      // Debounce resize observations to prevent oscillation
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(measure, 100);
    });
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(timerRef.current);
      observer.disconnect();
    };
  }, [measure]);

  return (
    <div ref={containerRef} className={className} style={measuredHeight ? { minHeight: measuredHeight } : undefined}>
      <h1 className="font-display font-black text-[22vw] md:text-[20vw] leading-[0.8] text-inherit">{text}</h1>
    </div>
  );
}
