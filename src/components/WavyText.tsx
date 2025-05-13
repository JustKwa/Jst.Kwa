import { useEffect, useState } from 'preact/hooks';

const gbaColors = [
  '#7b9acc', // muted blue
  '#7ec4a7', // muted teal/green
  '#e3cfa4', // muted yellow
  '#e39ca4', // muted pink
  '#b6b6d1', // muted lavender
  '#b6d1b6', // muted mint
  '#d1d1b6', // muted sand
  '#b6d1d1', // muted cyan
  '#d1b6d1', // muted mauve
];

function shiftColors(colors: string[]): string[] {
  return [...colors.slice(1), colors[0]];
}

export default function WavyText({
  initial = 'Hello, World.',
  className = '',
  scrollInterval = 240,
  animationDuration = 3000, // ms, match your CSS
  delay = 2000, // ms to wait before restarting
}) {
  const [colors, setColors] = useState(gbaColors);
  const [wavy, setWavy] = useState(true);

  // Animate color shifting
  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prev) => shiftColors(prev));
    }, scrollInterval);
    return () => clearInterval(interval);
  }, [scrollInterval]);

  // Toggle wavy class on/off
  useEffect(() => {
    let timeout1: number, timeout2: number;
    function cycle() {
      setWavy(true);
      timeout1 = window.setTimeout(() => {
        setWavy(false);
        timeout2 = window.setTimeout(cycle, delay);
      }, animationDuration);
    }
    cycle();
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [animationDuration, delay]);

  return (
    <h1>
      {initial.split('').map((letter, i) => (
        <span
          class={`${wavy ? 'wavy' : ''} ${className}`}
          style={{
            animationDelay: `${i * 300 + 500}ms`,
            fontSize: '48px',
            color: colors[i % colors.length],
            textShadow: '0 2px 4px rgba(0,0,0,0.18)',
            fontWeight: 'bold',
          }}
          key={i}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
}
