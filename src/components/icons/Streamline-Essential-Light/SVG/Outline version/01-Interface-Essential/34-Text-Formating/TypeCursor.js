import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTypeCursor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21.5 21a4.517 4.517 0 01-4-2.439 4.517 4.517 0 01-4 2.439.5.5 0 010-1 3.506 3.506 0 003.46-3.002H1.5c-.827 0-1.5-.673-1.5-1.5v-7c0-.827.673-1.5 1.5-1.5h15.46A3.508 3.508 0 0013.5 4a.5.5 0 010-1c1.694 0 3.235.96 4 2.439A4.517 4.517 0 0121.5 3a.5.5 0 010 1 3.508 3.508 0 00-3.46 2.998h4.46c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5h-4.46A3.506 3.506 0 0021.5 20a.5.5 0 010 1zm1-5.002a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5H18v8h4.5zm-21-8a.5.5 0 00-.5.5v7a.5.5 0 00.5.5H17v-8H1.5z" />
  );

export default SvgTypeCursor;
