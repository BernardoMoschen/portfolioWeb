interface Props {
  children: string;
}

export default function SectionTitle({ children }: Props) {
  return (
    <p className='text-sm tracking-[0.5em] uppercase font-bold text-tron-primary'>
      {children}
    </p>
  );
}
