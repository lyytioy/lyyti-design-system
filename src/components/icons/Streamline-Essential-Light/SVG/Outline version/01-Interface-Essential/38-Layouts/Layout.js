import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 22.997c-.827 0-1.5-.673-1.5-1.5v-20c0-.827.673-1.5 1.5-1.5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5h-20zm20-1a.5.5 0 00.5-.5v-9.5H7v10h14.5zm-20-21a.5.5 0 00-.5.5v20a.5.5 0 00.5.5H6v-21H1.5zm20.5 10v-9.5a.5.5 0 00-.5-.5H7v10h15z" />
  );

export default SvgLayout;
