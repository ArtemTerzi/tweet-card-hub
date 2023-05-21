const Icon = ({ name, className, width, height }) => (
  <svg className={className} width={width} height={height}>
    <use xlinkHref={`#${name}`} />
  </svg>
);

export default Icon;
