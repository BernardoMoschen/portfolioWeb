export default function Hero() {
  return (
    <div className='w-full bg-lime-400'>
      <p className='font-semibold text-xl text-black text-center p-8'>
        Full Stack Developer based in Brasil
      </p>
      <div className='flex justify-between'>
        <p className='font-semibold text-4xl text-black text-start p-2 '>
          Creative
          <br />
          Developer
        </p>
        <img
          className='object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]'
          src='https://images.unsplash.com/photo-1566545455366-bcae28fd3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1956&q=80'
        />
      </div>
    </div>
  );
}