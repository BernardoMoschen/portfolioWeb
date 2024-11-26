export default function Tech() {
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
    <div className='h-full w-full flex flex-col items-center text-center bg-stone-800 py-20 border-y-2 border-white'>
      <div className='w-1/2  '>
        <div>technologies i work with</div>
        <span>there's even more ----&gt;</span>
      </div>
      <div className='w-full'>
        {mock.map(({ tooltip }) => (
          <span className='mr-2'>{tooltip}</span>
        ))}
      </div>
    </div>
  );
}
