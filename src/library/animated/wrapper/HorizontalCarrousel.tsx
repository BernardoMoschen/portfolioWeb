import { motion, useTransform, useScroll } from 'framer-motion';
import { FC, useRef } from 'react';

interface Item {
  url: string;
  title: string;
}

interface Props {
  items: Item[];
}

export const HorizontalScrollCarousel: FC<Props> = ({ items }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-4'>
          {items.map(({ title, url }, i) => (
            <Item title={title} url={url} key={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Item: FC<Item> = ({ title, url }) => (
  <div
    key={title}
    className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'
  >
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
    ></div>
    <div className='absolute inset-0 z-10 grid place-content-center'>
      <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
        {title}
      </p>
    </div>
  </div>
);
