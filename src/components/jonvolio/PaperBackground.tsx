import { PaperTexture } from '@paper-design/shaders-react';

export default function PaperBackground() {
  return (
    <PaperTexture
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
      }}
      image=""
      colorBack="#FAFAF8"
      colorFront="#D8D4CC"
      contrast={0.08}
      roughness={0.25}
      fiber={0.25}
      fiberSize={0.15}
      crumples={0.1}
      crumpleSize={0.3}
      folds={0}
      foldCount={1}
      drops={0}
      fade={0}
      seed={42}
      scale={1}
      fit="cover"
    />
  );
}
