import { useEffect, useRef, useState } from "react";

interface PretextHeadingProps {
  text: string;
  font: string;
  className?: string;
  lineHeight?: number;
}

export function PretextHeading({ text, font, className = "", lineHeight = 1 }: PretextHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    async function measure() {
      try {
        const pretext = await import("@chenglou/pretext");
        if (!containerRef.current || !mounted) return;

        const width = containerRef.current.offsetWidth;
        if (width <= 0) return;

        const fontSizeMatch = font.match(/(\d+)px/);
        const fontSize = fontSizeMatch ? parseInt(fontSizeMatch[1]) : 120;
        const lh = fontSize * lineHeight;

        const prepared = pretext.prepare(text, font);
        const result = pretext.layout(prepared, width, lh);
        setMeasuredHeight(result.height);
      } catch {
        // fallback: just render normally
      }
    }

    measure();

    const observer = new ResizeObserver(() => measure());
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      mounted = false;
      observer.disconnect();
    };
  }, [text, font, lineHeight]);

  return (
    <div ref={containerRef} className={className} style={measuredHeight ? { minHeight: measuredHeight } : undefined}>
      <h1 className="font-display text-[22vw] md:text-[20vw] leading-[0.8] text-inherit">{text}</h1>
    </div>
  );
}
