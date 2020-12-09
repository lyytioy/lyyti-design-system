import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouseSmart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.5 24A6.508 6.508 0 014 17.5v-11C4 2.916 6.916 0 10.5 0h3C17.084 0 20 2.916 20 6.5v11c0 3.584-2.916 6.5-6.5 6.5h-3zm0-23A5.506 5.506 0 005 6.5v11c0 3.033 2.467 5.5 5.5 5.5h3c3.033 0 5.5-2.467 5.5-5.5v-11C19 3.467 16.533 1 13.5 1h-3z" />,
    <path d="M12 9c-.827 0-1.5-.673-1.5-1.5v-2c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm0-4a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2A.5.5 0 0012 5z" />
  );

export default SvgMouseSmart;
