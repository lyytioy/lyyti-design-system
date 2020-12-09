import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookLibrary = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.25} y={0.5} width={6} height={23} rx={1.5} ry={1.5} />,
    <rect x={7.75} y={7.5} width={6} height={16} rx={1.5} ry={1.5} />,
    <path d="M23.729 21.094L20.634 2.855A1.5 1.5 0 0018.9 1.627l-2.958.5a1.5 1.5 0 00-1.228 1.729L17.813 22.1a1.5 1.5 0 001.73 1.228l2.957-.5a1.5 1.5 0 001.229-1.73z" />
  );

export default SvgBookLibrary;
