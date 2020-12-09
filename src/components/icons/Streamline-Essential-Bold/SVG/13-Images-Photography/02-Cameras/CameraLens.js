import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraLens = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.5 14h-2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h2a3.5 3.5 0 003.5-3.5v-2a3.5 3.5 0 00-3.5-3.5zm-1 4a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5zM8.5 8h8A2.5 2.5 0 0019 5.5v-4A1.5 1.5 0 0017.5 0h-10A1.5 1.5 0 006 1.5v4A2.5 2.5 0 008.5 8zm.25-2.5v-3a.5.5 0 011 0v3a.5.5 0 01-1 0zm3.25 0v-3a.5.5 0 011 0v3a.5.5 0 01-1 0zm3.25 0v-3a.5.5 0 011 0v3a.5.5 0 01-1 0z" />,
    <rect x={8} y={13} width={9} height={11} rx={1.5} ry={1.5} />,
    <path d="M7 14.5a.5.5 0 00-.5-.5h-3A3.5 3.5 0 000 17.5v2A3.5 3.5 0 003.5 23h3a.5.5 0 00.5-.5zM3.75 17a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5z" />,
    <rect x={8.5} y={9} width={8} height={3} rx={0.5} ry={0.5} />
  );

export default SvgCameraLens;
