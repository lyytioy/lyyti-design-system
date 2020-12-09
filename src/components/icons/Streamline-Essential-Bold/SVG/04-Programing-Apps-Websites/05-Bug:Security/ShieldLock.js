import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={11.994} r={1.5} />,
    <path d="M12 4.744a1.752 1.752 0 00-1.75 1.75v1.25a.5.5 0 00.5.5h2.5a.5.5 0 00.5-.5v-1.25A1.752 1.752 0 0012 4.744z" />,
    <path d="M24 1.953A1.959 1.959 0 0022.043.006H1.959A1.958 1.958 0 00.012 1.965L0 9.306a15.146 15.146 0 0011.861 14.669 1 1 0 00.4 0A15.145 15.145 0 0023.988 9.2zm-7 12.791a1 1 0 01-1 1H8a1 1 0 01-1-1v-5.5a1 1 0 011-1h.25a.5.5 0 00.5-.5v-1.25a3.25 3.25 0 016.5 0v1.25a.5.5 0 00.5.5H16a1 1 0 011 1z" />
  );

export default SvgShieldLock;
