import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.999 24.001c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />,
    <path d="M18 18.001a.504.504 0 01-.338-.131l-6-5.5a.501.501 0 01-.162-.369v-5.5a.5.5 0 011 0v5.28l5.838 5.351a.498.498 0 01-.338.869z" />
  );

export default SvgTimeClockCircle;
