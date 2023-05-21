const Icon = ({ name, className, width, height, ariaLabel }) => (
  <svg
    className={className}
    width={width}
    height={height}
    aria-label={ariaLabel}
  >
    <use xlinkHref={`#${name}`} />
  </svg>
);

export default Icon;
