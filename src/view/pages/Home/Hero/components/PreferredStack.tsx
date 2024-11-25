export default function PreferredStack() {
  return (
    <div className='flex flex-col w-1/2 text-white'>
      <div className='text-4xl'>Preferred Stack</div>
      <div className='bg-blue-100'>
        {Array.from(Array(7).keys()).map((_box, index) => (
          <div
            className='w-[30%] h-[100px] m-[1.5%] rounded-[10px] bg-green-200 '
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
