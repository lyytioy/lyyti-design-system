import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M13.75 7.244a1.75 1.75 0 00-3.5 0v1.5a.25.25 0 00.25.25h3a.25.25 0 00.25-.25z" />,
    <path d="M24 1.953A1.959 1.959 0 0022.043.006H1.959A1.958 1.958 0 00.012 1.965L0 9.306a15.145 15.145 0 0011.862 14.669.974.974 0 00.194.019 1 1 0 00.2-.021A15.145 15.145 0 0023.988 9.2zM7.5 15.494v-5.5a1 1 0 011-1h.25v-1.75a3.25 3.25 0 016.5 0v1.75h.25a1 1 0 011 1v5.5a1 1 0 01-1 1h-7a1 1 0 01-1-1z" />,
    <circle cx={12} cy={13.244} r={1.25} />
  );

export default SvgLockShield;
