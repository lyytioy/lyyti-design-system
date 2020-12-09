import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgToolBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 23.001c-.827 0-1.5-.673-1.5-1.5v-12c0-.827.673-1.5 1.5-1.5h6.033C7.783 5.739 9.702 4 12 4s4.217 1.739 4.467 4.001H22.5c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-21zm-.5-1.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-7.5h-9V15c0 1.103-.897 2-2 2s-2-.897-2-2v-.999H1v7.5zM11 15a1.001 1.001 0 002 0v-2h-2v2zm12-1.999v-3.5a.5.5 0 00-.5-.5h-21a.5.5 0 00-.5.5v3.5h9V12.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v.501h9zm-7.54-5A3.506 3.506 0 0012 5a3.506 3.506 0 00-3.46 3.001h6.92z" />
  );

export default SvgToolBox;
