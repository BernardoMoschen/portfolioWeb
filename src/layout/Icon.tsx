import Home from '@/assets/icons/home-2.svg?react';
import ArrowDown from '@/assets/icons/arrow-down-com.svg?react';
import MenuGrid from '@/assets/icons/menu-grid.svg?react';
import MenuMotion from '@/assets/icons/menu-motion2.svg?react';
import Github from '@/assets/icons/github.svg?react';
import LinkedIn from '@/assets/icons/linkedIn.svg?react';
import Axios from '@/assets/icons/tech/axios.svg?react';
import Docker from '@/assets/icons/tech/docker.svg?react';
import Express from '@/assets/icons/tech/express.svg?react';
import FramerMotion from '@/assets/icons/tech/framermotion.svg?react';
import Gitlab from '@/assets/icons/tech/gitlab.svg?react';
import Linux from '@/assets/icons/tech/linux.svg?react';
import MaterialUi from '@/assets/icons/tech/materialUi.svg?react';
import MySQL from '@/assets/icons/tech/mySql.svg?react';
import Nest from '@/assets/icons/tech/nest.svg?react';
import Next from '@/assets/icons/tech/nextJs.svg?react';
import NodeJs from '@/assets/icons/tech/nodeJs.svg?react';
import PHP from '@/assets/icons/tech/php.svg?react';
import PostgreeSQL from '@/assets/icons/tech/postgreSql.svg?react';
import Prisma from '@/assets/icons/tech/prisma.svg?react';
import Python from '@/assets/icons/tech/python.svg?react';
import Redux from '@/assets/icons/tech/redux.svg?react';
import React from '@/assets/icons/tech/reactJs.svg?react';
import SASS from '@/assets/icons/tech/sass.svg?react';
import Sequelize from '@/assets/icons/tech/sequelize.svg?react';
import Sonarqube from '@/assets/icons/tech/sonarqube.svg?react';
import Tailwind from '@/assets/icons/tech/tailwind.svg?react';
import Typescript from '@/assets/icons/tech/typescript.svg?react';
import Vite from '@/assets/icons/tech/vite.svg?react';
import VueJS from '@/assets/icons/tech/vuejs.svg?react';

type IconName =
  | 'Home'
  | 'ArrowDown'
  | 'MenuGrid'
  | 'MenuMotion'
  | 'Github'
  | 'LinkedIn'
  | 'Axios'
  | 'Docker'
  | 'Express'
  | 'FramerMotion'
  | 'Gitlab'
  | 'Linux'
  | 'MaterialUi'
  | 'MySQL'
  | 'Nest'
  | 'Next'
  | 'NodeJs'
  | 'PHP'
  | 'PostgreeSQL'
  | 'Prisma'
  | 'Python'
  | 'Redux'
  | 'React'
  | 'SASS'
  | 'Sequelize'
  | 'Sonarqube'
  | 'Tailwind'
  | 'Typescript'
  | 'Vite'
  | 'VueJS';

const iconMap: Record<IconName, React.ReactNode> = {
  Home: <Home />,
  ArrowDown: <ArrowDown />,
  MenuGrid: <MenuGrid />,
  MenuMotion: <MenuMotion />,
  LinkedIn: <LinkedIn />,
  Github: <Github />,
  Axios: <Axios />,
  Docker: <Docker />,
  Express: <Express />,
  FramerMotion: <FramerMotion />,
  Gitlab: <Gitlab />,
  Linux: <Linux />,
  MaterialUi: <MaterialUi />,
  MySQL: <MySQL />,
  Nest: <Nest />,
  Next: <Next />,
  NodeJs: <NodeJs />,
  PHP: <PHP />,
  PostgreeSQL: <PostgreeSQL />,
  Prisma: <Prisma />,
  Python: <Python />,
  Redux: <Redux />,
  React: <React />,
  SASS: <SASS />,
  Sequelize: <Sequelize />,
  Sonarqube: <Sonarqube />,
  Tailwind: <Tailwind />,
  Typescript: <Typescript />,
  Vite: <Vite />,
  VueJS: <VueJS />,
};

interface Props {
  icon: IconName;
  className?: string;
}

export const Icon = ({ icon, className }: Props) => {
  const selectedIcon = iconMap[icon];
  return <div className={className}>{selectedIcon}</div>;
};
