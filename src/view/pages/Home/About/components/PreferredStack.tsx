import { FallingDivs } from '@/view/components/animated';
import Title from '@/view/components/Title';

export default function PreferredStack() {
  const mock = [
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
    {
      img: 'https://www.svgrepo.com/show/354259/react.svg',
      tooltip: 'React',
    },
  ];

  return (
    <div className='flex flex-col w-1/2 text-white'>
      <Title>Preferred Stack</Title>
      <div className='bg-slate-800 flex flex-col my-8'>
        {/* <FallingDivs items={mock} /> */}
        {mock.map((m, index) => (
          <span
            className='w-[30%] h-[100px] m-[1.5%] rounded-[10px] text-2xl'
            key={index}
          >
            {m.tooltip}
          </span>
        ))}
      </div>
    </div>
  );
}
