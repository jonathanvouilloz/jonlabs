// Fond « tramé » (shader Paper, WebGL) pour l'essai B du hero du styleguide v2.
import { Dithering } from '@paper-design/shaders-react';

export default function DitherBg({ back = '#FFFFFF', front = '#CDF3E7' }: { back?: string; front?: string }) {
  const reduce = typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  return (
    <Dithering
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      colorBack={back}
      colorFront={front}
      shape="warp"
      type="4x4"
      size={2}
      speed={reduce ? 0 : 0.35}
      scale={1.4}
    />
  );
}
