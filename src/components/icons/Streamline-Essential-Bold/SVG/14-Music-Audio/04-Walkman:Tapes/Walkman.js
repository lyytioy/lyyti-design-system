import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 7.5A1.5 1.5 0 0022.5 6h-21A1.5 1.5 0 000 7.5v13A1.5 1.5 0 001.5 22h21a1.5 1.5 0 001.5-1.5zM8.364 17.337l7.113-8A1 1 0 0116.225 9H20a1 1 0 011 1v6.5a2.5 2.5 0 01-2.5 2.5H9.113a1 1 0 01-.749-1.663zM3 11a1 1 0 010-2h6.5a1 1 0 010 2z" />,
    <circle cx={17} cy={14} r={1.5} />,
    <path d="M9.5 5h2.75a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H10.5A1.5 1.5 0 009 3.5v1a.5.5 0 00.5.5zM18.5 4.75a.25.25 0 00.25.25h2.75a.5.5 0 00.5-.5v-1A1.5 1.5 0 0020.5 2h-1.75a.25.25 0 00-.25.25z" />,
    <rect x={14} y={2} width={3} height={3} rx={0.25} ry={0.25} />
  );

export default SvgWalkman;
