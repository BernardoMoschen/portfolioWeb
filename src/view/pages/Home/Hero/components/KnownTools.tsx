export default function KnownTools() {
  return (
    <div className='flex flex-col w-1/2'>
      <div>Known tools</div>
      <div className='bg-blue-400'>
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
