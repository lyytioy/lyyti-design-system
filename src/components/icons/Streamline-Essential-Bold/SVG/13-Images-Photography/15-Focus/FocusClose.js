import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusClose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.75 5.279a3.987 3.987 0 011.372 7.736.25.25 0 00-.162.26 6.938 6.938 0 01-.006 1.538.251.251 0 00.312.27 6 6 0 10-6.455-9.2.25.25 0 00.144.384 7.969 7.969 0 011.437.522.249.249 0 00.3-.066 3.973 3.973 0 013.058-1.444z" />,
    <circle cx={9} cy={14.029} r={6.5} />,
    <path d="M1 5a1 1 0 001-1V2.5a.5.5 0 01.5-.5H4a1 1 0 000-2H2a2 2 0 00-2 2v2a1 1 0 001 1zM24 2a2 2 0 00-2-2h-2a1 1 0 000 2h1.5a.5.5 0 01.5.5V4a1 1 0 002 0zM4 22H2.5a.5.5 0 01-.5-.5V20a1 1 0 00-2 0v2a2 2 0 002 2h2a1 1 0 000-2zM23 19a1 1 0 00-1 1v1.5a.5.5 0 01-.5.5H20a1 1 0 000 2h2a2 2 0 002-2v-2a1 1 0 00-1-1z" />
  );

export default SvgFocusClose;
