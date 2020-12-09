import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDoubleShapes = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3 13.5a1 1 0 01-1-1v-8a1 1 0 011-1h12.5a1 1 0 011 1v2.25a.25.25 0 00.25.25h1.5a.25.25 0 00.25-.25V4.5a3 3 0 00-3-3H3a3 3 0 00-3 3v8a3 3 0 003 3h.25a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25z" />,
    <path d="M21 8.5H8a3 3 0 00-3 3v8a3 3 0 003 3h13a3 3 0 003-3v-8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H8a1 1 0 01-1-1v-8a1 1 0 011-1h13a1 1 0 011 1z" />,
    <path d="M18.1 13.551a.952.952 0 00-1.612 0l-2.21 4.1A.916.916 0 0015.081 19H19.5a.917.917 0 00.806-1.349z" />,
    <rect x={8.5} y={14} width={5} height={5} rx={1.25} ry={1.25} />
  );

export default SvgPictureDoubleShapes;
