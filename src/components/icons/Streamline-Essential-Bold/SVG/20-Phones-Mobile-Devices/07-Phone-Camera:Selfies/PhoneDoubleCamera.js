import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneDoubleCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={6.5} cy={4.75} r={1.5} />,
    <circle cx={10.5} cy={4.75} r={1.5} />,
    <path d="M18.5 0h-13a4 4 0 00-4 4v19a1 1 0 001 1h19a1 1 0 001-1V4a4 4 0 00-4-4zM14 5a2.5 2.5 0 01-2.5 2.5H4a.5.5 0 01-.5-.5V4a2 2 0 012-2h8a.5.5 0 01.5.5z" />
  );

export default SvgPhoneDoubleCamera;
