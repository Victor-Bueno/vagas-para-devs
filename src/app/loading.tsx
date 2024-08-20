'use client';

import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export default function LoadingPage() {
  const text = 'CARREGANDO. VAGAS PARA DEVS.';
  const characters = text.split('');

  const radius = 80;
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation: Array<
        [string, { opacity: number }, { duration: number; at: string }]
      > = [];

      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.3, at: i === 0 ? '+0.8' : '-0.28' },
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.3, at: i === 0 ? '+0.8' : '-0.28' },
        ]);
      });

      animate(letterAnimation, { repeat: Infinity });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 4, repeat: Infinity },
      );
    };

    animateLoader();
  }, [animate, characters, scope]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <motion.div
        ref={scope}
        className="relative mt-12 aspect-[1]"
        style={{ width: radius * 2 }}
      >
        <p aria-label={text} />
        <p aria-hidden="true" className="text">
          {characters.map((ch, i) => (
            <motion.span
              key={i}
              className={`absolute left-1/2 top-0 text-primary letter-${i}`}
              style={{
                transformOrigin: `0 ${radius}px`,
                transform: `rotate(${i * letterSpacing}deg)`,
                fontSize: '18px',
              }}
            >
              {ch}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </div>
  );
}
