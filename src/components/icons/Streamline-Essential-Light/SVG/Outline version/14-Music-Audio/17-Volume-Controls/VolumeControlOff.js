import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 15.5c-1.103 0-2-.897-2-2v-3c0-1.103.897-2 2-2h3.293l6-6a.999.999 0 011.706.706V7.5a.5.5 0 11-.999 0V3.207L5.853 9.354A.497.497 0 015.5 9.5H2c-.551 0-1 .449-1 1v3c0 .552.449 1 1 1h2.5a.5.5 0 010 1H2zM12 21.792a.994.994 0 01-.706-.292l-2.647-2.646a.5.5 0 11.707-.708L12 20.792V13.5a.5.5 0 011 0v.5c1.103 0 2-.897 2-2a.5.5 0 011 0c0 1.654-1.346 3-3 3v5.793a.993.993 0 01-.293.706.99.99 0 01-.706.293H12zM1.5 22.5a.5.5 0 01-.354-.854l20-20a.5.5 0 01.708.707l-20 20a.498.498 0 01-.354.147z" />
  );

export default SvgVolumeControlOff;
