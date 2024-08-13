import { Close } from '@/assets/icons/close';
import { Html } from '@/assets/icons/html';
import { Css } from '@/assets/icons/css';
import { Javascript } from '@/assets/icons/javascript';
import { Typescript } from '@/assets/icons/typescript';
import { Laravel } from '@/assets/icons/laravel';
import { Angular } from '@/assets/icons/angular';
import { Azure } from '@/assets/icons/azure';
import { Aws } from '@/assets/icons/aws';
import { Postgreesql } from '@/assets/icons/postgreesql';
import { Mongo } from '@/assets/icons/mongo';
import { Next } from '@/assets/icons/next';
import { Jenkins } from '@/assets/icons/jenkins';
import { Php } from '@/assets/icons/php';
import { Node } from '@/assets/icons/node';
import { Git } from '@/assets/icons/git';
import { Mysql } from '@/assets/icons/mysql';
import { Docker } from '@/assets/icons/docker';
import { Figma } from '@/assets/icons/figma';
import { Vue } from '@/assets/icons/vue';
import { React } from '@/assets/icons/react';
import { Vercel } from '@/assets/icons/vercel';

type IconProps = {
  name: IconNames;
  size: number;
};

export type IconNames = keyof typeof icons;

const icons = {
  close: <Close />,
  html: <Html />,
  css: <Css />,
  js: <Javascript />,
  ts: <Typescript />,
  react: <React />,
  laravel: <Laravel />,
  angular: <Angular />,
  azure: <Azure />,
  aws: <Aws />,
  docker: <Docker />,
  postgreesql: <Postgreesql />,
  mongo: <Mongo />,
  mysql: <Mysql />,
  next: <Next />,
  jenkins: <Jenkins />,
  php: <Php />,
  node: <Node />,
  git: <Git />,
  vue: <Vue />,
  figma: <Figma />,
  vercel: <Vercel />,
} as const;

export function Icon({ name, size }: IconProps) {
  const IconComponent = icons[name];

  return (
    <IconComponent.type {...IconComponent.props} width={size} height={size} />
  );
}
