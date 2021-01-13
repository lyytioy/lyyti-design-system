import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.5 23.999a.5.5 0 01-.354-.146l-9.004-9.004A8.457 8.457 0 018.5 17C3.813 17 0 13.187 0 8.5 0 3.813 3.813 0 8.5 0 13.187 0 17 3.813 17 8.5a8.457 8.457 0 01-2.151 5.642l9.004 9.004a.5.5 0 01-.353.853zm-15-23C4.365.999 1 4.364 1 8.499s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z" />,
    <path d="M8.5 12.499a.5.5 0 01-.5-.5v-3H5a.5.5 0 010-1h3v-3a.5.5 0 011 0v3h3a.5.5 0 010 1H9v3a.5.5 0 01-.5.5z" />
  );

export default SvgZoomIn;