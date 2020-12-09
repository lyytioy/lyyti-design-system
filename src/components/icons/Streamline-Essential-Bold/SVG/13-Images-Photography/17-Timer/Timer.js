import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M19.169 3.484A1.225 1.225 0 1017.642 5.4 9.056 9.056 0 113.359 9.753a1.224 1.224 0 10-2.334-.738 11.511 11.511 0 1018.144-5.531z" />,
    <circle cx={12} cy={2.204} r={1.959} />,
    <path d="M11.076 13.293a1.224 1.224 0 101.848-1.607L3.128.421A1.224 1.224 0 001.28 2.028z" />
  );

export default SvgTimer;
