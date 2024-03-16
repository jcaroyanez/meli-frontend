import clsx from 'clsx';
import './Container.scss';

interface ContainerProps {
  children: JSX.Element;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div
      className={clsx('container', {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};
