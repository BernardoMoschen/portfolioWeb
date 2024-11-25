export default function KnownTools() {
    const mock = ['Docker', 'PHP', 'Sequelize', 'Mock', 'Jest'];
    return (
      <div className='flex flex-col w-1/2'>
        <div className='text-4xl'>Known tools</div>
        <div className='bg-slate-800 flex flex-col my-8'>
          {mock.map((m, index) => (
            <span
              className='w-[30%] h-[100px] m-[1.5%] rounded-[10px] text-2xl'
              key={index}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    );
}
