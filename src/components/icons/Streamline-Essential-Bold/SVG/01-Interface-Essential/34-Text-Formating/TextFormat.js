import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextFormat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={20} y={7.498} width={2} height={9} rx={0.25} ry={0.25} />,
    <rect x={7.5} y={1.998} width={9} height={2} rx={0.25} ry={0.25} />,
    <rect x={2} y={7.498} width={2} height={9} rx={0.25} ry={0.25} />,
    <rect x={7.5} y={19.998} width={9} height={2} rx={0.25} ry={0.25} />,
    <circle cx={21} cy={2.998} r={3} />,
    <circle cx={3} cy={2.998} r={3} />,
    <circle cx={21} cy={20.998} r={3} />,
    <circle cx={3} cy={20.998} r={3} />,
    <path d="M16.5 8a1 1 0 00-1-1h-7a1 1 0 00-1 1v1.5a1 1 0 002 0v-.25A.25.25 0 019.75 9h1a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25H10a1 1 0 100 2h4a1 1 0 000-2h-.75a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25h1a.25.25 0 01.25.25v.25a1 1 0 002 0z" />
  );

export default SvgTextFormat;
