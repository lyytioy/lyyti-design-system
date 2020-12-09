import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyScared = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={9.5} y={14} width={1.75} height={3.5} rx={0.25} ry={0.25} />,
    <path d="M16.25 14a.25.25 0 00-.25.25v3a.25.25 0 00.25.25 1.75 1.75 0 000-3.5z" />,
    <rect x={12.75} y={14} width={1.75} height={3.5} rx={0.25} ry={0.25} />,
    <path d="M8 14.25a.25.25 0 00-.25-.25 1.75 1.75 0 000 3.5.25.25 0 00.25-.25z" />,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm4.25 19h-8.5a3.25 3.25 0 010-6.5h8.5a3.25 3.25 0 010 6.5zM10 8a2 2 0 11-2-2 2 2 0 012 2zm4 0a2 2 0 112 2 2 2 0 01-2-2z" />
  );

export default SvgSmileyScared;
