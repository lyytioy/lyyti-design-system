import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 14.5a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z" />,
    <path d="M10 24a.502.502 0 01-.498-.458L9.04 18H7a.5.5 0 01-.5-.5V14c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5v3.5a.5.5 0 01-.5.5h-2.04l-.462 5.542A.502.502 0 0114 24h-4zm3.54-1l.462-5.542A.502.502 0 0114.5 17h2v-3c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 007.5 14v3h2c.258 0 .477.201.498.458L10.46 23h3.08zM12 8C9.794 8 8 6.206 8 4c0-.691.183-1.375.529-1.979.015-.032.033-.057.044-.073A4.017 4.017 0 0112 0a4.008 4.008 0 013.963 3.484l.001.012c.025.188.036.348.036.504 0 2.206-1.794 4-4 4zM9.154 3.058C9.052 3.363 9 3.678 9 4c0 1.654 1.346 3 3 3a3.004 3.004 0 002.991-2.769 6.272 6.272 0 01-1.823.269 6.392 6.392 0 01-4.014-1.442zm4.021.442a5.293 5.293 0 001.719-.289 2.998 2.998 0 00-5.258-1.056A5.355 5.355 0 0013.158 3.5h.017z" />
  );

export default SvgSingleMan;