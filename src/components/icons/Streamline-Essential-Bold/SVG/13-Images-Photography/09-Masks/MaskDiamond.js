import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskDiamond = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm0 21.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <path d="M11.365 18.71a.84.84 0 001.27 0l5.382-6.083a.955.955 0 000-1.251l-5.382-6.085a.867.867 0 00-1.27 0l-5.382 6.083a.955.955 0 000 1.251z" />
  );

export default SvgMaskDiamond;
