import { SVGProps } from 'react';

const UICtransport = (svgProps: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...svgProps}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="transportIconTitle"
      stroke="#000000"
      style={{
        strokeWidth: 1,
        strokeLinecap: 'square',
        strokeLinejoin: 'miter',
      }}
      color="#000000"
    >
      <path d="M4 17H2V7H15V17H8" />
      <path d="M20 17H22V12.5556L20 9H15V17H16" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
    </svg>
  );
};

export default UICtransport;
