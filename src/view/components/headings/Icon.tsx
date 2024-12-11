import Home from '@/assets/icons/home-2.svg?react';
import ArrowDown from '@/assets/icons/arrow-down-com.svg?react';
import MenuGrid from '@/assets/icons/menu-grid.svg?react';
import MenuMotion from '@/assets/icons/menu-motion2.svg?react';
import Github from '@/assets/icons/github.svg?react';
import LinkedIn from '@/assets/icons/linkedIn.svg?react';

type IconName =
  | 'Home'
  | 'ArrowDown'
  | 'MenuGrid'
  | 'MenuMotion'
  | 'Github'
  | 'LinkedIn';

const iconMap: Record<IconName, React.ReactNode> = {
  Home: <Home />,
  ArrowDown: <ArrowDown />,
  MenuGrid: <MenuGrid />,
  MenuMotion: <MenuMotion />,
  LinkedIn: <LinkedIn />,
  Github: <Github />,
};

interface Props {
  icon: IconName;
  className?: string;
}

export const Icon = ({ icon, className }: Props) => {
  const selectedIcon = iconMap[icon];
  return <div className={className}>{selectedIcon}</div>;
};
