import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBatteryCharge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.5 16a.5.5 0 010-1h5a.5.5 0 00.5-.5v-2a.5.5 0 01.5-.5H23V8h-1.5a.5.5 0 01-.5-.5v-2a.5.5 0 00-.5-.5h-4a.5.5 0 010-1h4c.827 0 1.5.673 1.5 1.5V7h1.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H22v1.5c0 .827-.673 1.5-1.5 1.5h-5zM1.5 16C.673 16 0 15.327 0 14.5v-9C0 4.673.673 4 1.5 4h5a.5.5 0 010 1h-5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h6a.5.5 0 010 1h-6zM11.5 20a.5.5 0 01-.5-.5V14h-1c-1.103 0-2-.897-2-2V7.5a.5.5 0 01.5-.5H9V4.5a.5.5 0 011 0V7h3V4.5a.5.5 0 011 0V7h.5a.5.5 0 01.5.5V12c0 1.103-.897 2-2 2h-1v5.5a.5.5 0 01-.5.5zM9 12c0 .552.449 1 1 1h3a1 1 0 001-1V8H9v4z" />
  );

export default SvgBatteryCharge;
