import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.565 23a.498.498 0 01-.5-.5V19h-5.5c-.827 0-1.5-.673-1.5-1.5V2.482c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5V17.5c0 .827-.673 1.5-1.5 1.5H11.772l-3.854 3.854a.495.495 0 01-.353.146zm-6-21.018a.5.5 0 00-.5.5V17.5a.5.5 0 00.5.5h6a.5.5 0 01.5.5v2.793l3.146-3.146a.498.498 0 01.354-.147h11a.5.5 0 00.5-.5V2.482a.5.5 0 00-.5-.5h-21z" />,
    <path d="M12.567 12.5a.5.5 0 01-.5-.5V5a.5.5 0 011 0v7a.5.5 0 01-.5.5z" />,
    <circle cx={12.565} cy={14.482} r={0.75} />
  );

export default SvgMessagesBubbleSquareWarning;
