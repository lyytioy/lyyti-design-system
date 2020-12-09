import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M13.75 8.5a1.75 1.75 0 00-3.5 0V10a.25.25 0 00.25.25h3a.25.25 0 00.25-.25z" />,
    <path d="M11.946 0A12 12 0 1024 11.946 12.013 12.013 0 0011.946 0zM7.5 16.751v-5.5a1 1 0 011-1h.25V8.5a3.25 3.25 0 016.5 0v1.75h.25a1 1 0 011 1v5.5a1 1 0 01-1 1h-7a1 1 0 01-1-.999z" />,
    <circle cx={12} cy={14.501} r={1.25} />
  );

export default SvgLockCircle;
