import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderEmpty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 22.5C.673 22.5 0 21.827 0 21V3c0-.827.673-1.5 1.5-1.5H9a1.49 1.49 0 011.341.829l.948 1.894a.497.497 0 00.447.277H22.5c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5h-21zm0-20A.5.5 0 001 3v18a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5H11.736a1.49 1.49 0 01-1.341-.83l-.948-1.893A.497.497 0 009 2.5H1.5z" />
  );

export default SvgFolderEmpty;
