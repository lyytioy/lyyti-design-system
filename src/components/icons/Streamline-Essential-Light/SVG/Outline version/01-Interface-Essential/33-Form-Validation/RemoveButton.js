import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 18.499c-.827 0-1.5-.673-1.5-1.5v-10c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5h-21zm0-12a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-21z" />,
    <path d="M20.5 15.499a.5.5 0 01-.354-.146L17.5 12.706l-2.646 2.646a.5.5 0 11-.708-.707l2.646-2.646-2.646-2.646a.5.5 0 01.354-.854.5.5 0 01.354.146l2.646 2.646 2.646-2.646a.5.5 0 11.708.708l-2.646 2.646 2.646 2.646a.5.5 0 01-.354.854z" />
  );

export default SvgRemoveButton;
