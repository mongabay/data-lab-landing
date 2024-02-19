import { CSSProperties } from 'react';

export interface IconProps {
  icon?: any;
  className?: string;
  style?: CSSProperties;
}

const Icon = ({ icon, className, style }: IconProps) => {
  if (!icon) return null;
  const IconComponent = icon;
  return <IconComponent className={className} style={style} />;
};

export default Icon;
