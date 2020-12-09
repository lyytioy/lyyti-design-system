import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiBrowserSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 21.25a2.503 2.503 0 01-2.5-2.5v-16C0 1.371 1.121.25 2.5.25h19c1.378 0 2.5 1.121 2.5 2.5v16c0 1.378-1.122 2.5-2.5 2.5h-19zm0-20c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-16c0-.827-.673-1.5-1.5-1.5h-19z" />,
    <circle cx={9} cy={23.25} r={0.75} />,
    <circle cx={12} cy={23.25} r={0.75} />,
    <circle cx={15} cy={23.25} r={0.75} />,
    <path d="M5 13.25a.5.5 0 01-.354-.146l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.854.354.5.5 0 01-.146.354L3.707 10.75l1.646 1.646A.5.5 0 015 13.25zM19 13.25a.5.5 0 01-.354-.854l1.646-1.646-1.646-1.646A.5.5 0 0119 8.25a.5.5 0 01.354.146l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.354.146z" />
  );

export default SvgUiBrowserSlider;
