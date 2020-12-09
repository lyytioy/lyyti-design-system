import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiBrowserSlider1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 24A2.503 2.503 0 010 21.5v-19C0 1.121 1.121 0 2.5 0h19C22.878 0 24 1.121 24 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-19zm0-23C1.673 1 1 1.673 1 2.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5h-19z" />,
    <circle cx={9} cy={19.75} r={0.75} />,
    <circle cx={12} cy={19.75} r={0.75} />,
    <circle cx={15} cy={19.75} r={0.75} />,
    <path d="M5.015 13a.5.5 0 01-.354-.146l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.854.354.5.5 0 01-.146.354L3.722 10.5l1.646 1.646a.5.5 0 01-.353.854zM19.015 13a.5.5 0 01-.354-.854l1.646-1.646-1.646-1.646a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.501.501 0 01-.354.146z" />
  );

export default SvgUiBrowserSlider1;
