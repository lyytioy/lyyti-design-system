import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 23.499c-.827 0-1.5-.673-1.5-1.5v-20c0-.827.673-1.5 1.5-1.5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5H2zm20-1a.5.5 0 00.5-.5v-9.5h-10v10H22zm-20.5-.5a.5.5 0 00.5.5h9.5v-10h-10v9.5zm21-10.5v-9.5a.5.5 0 00-.5-.5h-9.5v10h10zm-11 0v-10H2a.5.5 0 00-.5.5v9.5h10z" />
  );

export default SvgCellBorderFull;
