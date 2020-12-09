import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 22a.498.498 0 01-.5-.5V18H1.5C.673 18 0 17.327 0 16.5v-13C0 2.673.673 2 1.5 2h21c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5H7.707l-3.854 3.854A.495.495 0 013.5 22zm-2-19a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h2a.5.5 0 01.5.5v2.793l3.146-3.146A.496.496 0 017.5 17h15a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-21z" />,
    <circle cx={7.25} cy={10} r={0.75} />,
    <circle cx={12} cy={10} r={0.75} />,
    <circle cx={16.75} cy={10} r={0.75} />
  );

export default SvgMessagesBubbleSquareTyping;
