import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalLoading = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.707 11.293l-5-5a1 1 0 00-1.414 1.414l4.116 4.116a.25.25 0 010 .354l-4.116 4.116a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414zM2.591 12.177a.25.25 0 010-.354l4.116-4.116a1 1 0 00-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 101.414-1.414z" />,
    <circle cx={12} cy={12} r={1.5} />,
    <circle cx={16.5} cy={12} r={1.5} />,
    <circle cx={7.5} cy={12} r={1.5} />
  );

export default SvgSignalLoading;
