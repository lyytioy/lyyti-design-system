import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesFilm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1 0a1 1 0 00-1 1v22a1 1 0 002 0V1a1 1 0 00-1-1zM23 0a1 1 0 00-1 1v22a1 1 0 002 0V1a1 1 0 00-1-1z" />,
    <rect x={6} width={12} height={10} rx={2} ry={2} />,
    <rect x={6} y={14} width={12} height={10} rx={2} ry={2} />,
    <circle cx={4} cy={3} r={1} />,
    <circle cx={20} cy={3} r={1} />,
    <circle cx={4} cy={9} r={1} />,
    <circle cx={20} cy={9} r={1} />,
    <circle cx={4} cy={15} r={1} />,
    <circle cx={20} cy={15} r={1} />,
    <circle cx={4} cy={21} r={1} />,
    <circle cx={20} cy={21} r={1} />
  );

export default SvgMoviesFilm;
