import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm0 21.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <path d="M5.32 19.25h13.36a.775.775 0 00.715-1.173L12.674 5.151a.742.742 0 00-1.347 0L4.605 18.077a.775.775 0 00.715 1.173z" />
  );

export default SvgMaskTriangle;
