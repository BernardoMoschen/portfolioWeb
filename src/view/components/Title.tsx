interface Props {
  children: string;
}

export default function Title({ children }: Props) {
  return (
    <div className='text-start text-4xl text-secondary-light'>{children}</div>
  );
}
