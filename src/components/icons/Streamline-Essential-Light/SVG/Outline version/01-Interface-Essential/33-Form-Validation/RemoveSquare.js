import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 23.999c-.827 0-1.5-.673-1.5-1.5v-21c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5h-21zm0-23a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5h-21z" />,
    <path d="M17 17.499a.5.5 0 01-.354-.146L12 12.706l-4.646 4.646a.5.5 0 11-.708-.707l4.646-4.646-4.646-4.646A.5.5 0 017 6.499a.5.5 0 01.354.146L12 11.292l4.646-4.646a.5.5 0 11.708.707l-4.646 4.646 4.646 4.646a.5.5 0 01-.354.854z" />
  );

export default SvgRemoveSquare;
