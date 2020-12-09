import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22.504a2.503 2.503 0 01-2.5-2.5v-16c0-1.379 1.121-2.5 2.5-2.5h19c1.378 0 2.5 1.121 2.5 2.5v16c0 1.378-1.122 2.5-2.5 2.5h-19zm-1.5-2.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-12.5H1v12.5zm22-13.5v-2.5c0-.827-.673-1.5-1.5-1.5h-19c-.827 0-1.5.673-1.5 1.5v2.5h22z" />,
    <circle cx={4} cy={4.504} r={0.75} />,
    <circle cx={7} cy={4.504} r={0.75} />,
    <circle cx={10} cy={4.504} r={0.75} />,
    <path d="M8.5 11.504a.5.5 0 010-1h10a.5.5 0 010 1h-10zM4.5 11.504a.5.5 0 010-1h1a.5.5 0 010 1h-1zM8.5 14.504a.5.5 0 010-1h10a.5.5 0 010 1h-10zM4.5 14.504a.5.5 0 010-1h1a.5.5 0 010 1h-1zM8.5 17.504a.5.5 0 010-1h10a.5.5 0 010 1h-10zM4.5 17.504a.5.5 0 010-1h1a.5.5 0 010 1h-1z" />
  );

export default SvgAppWindowText;
