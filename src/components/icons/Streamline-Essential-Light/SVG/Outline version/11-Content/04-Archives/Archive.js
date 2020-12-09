import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 8.5C.673 8.5 0 7.827 0 7V4c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-21zm0-5A.5.5 0 001 4v3a.5.5 0 00.5.5h21A.5.5 0 0023 7V4a.5.5 0 00-.5-.5h-21zM2.5 21.5c-.827 0-1.5-.673-1.5-1.5V10a.5.5 0 011 0v10a.5.5 0 00.5.5h19a.5.5 0 00.5-.5V10a.5.5 0 011 0v10c0 .827-.673 1.5-1.5 1.5h-19z" />,
    <path d="M10 14.5c-1.103 0-2-.897-2-2s.897-2 2-2h4c1.103 0 2 .897 2 2s-.897 2-2 2h-4zm0-3a1.001 1.001 0 000 2h4a1 1 0 000-2h-4z" />
  );

export default SvgArchive;
