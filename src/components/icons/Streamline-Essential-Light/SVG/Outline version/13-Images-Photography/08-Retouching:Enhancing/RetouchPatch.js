import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchPatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M14.5 24a.5.5 0 01-.5-.5V21h-4v2.5a.5.5 0 01-1 0V21H5.5A2.503 2.503 0 013 18.5V15H.5a.5.5 0 010-1H3v-4H.5a.5.5 0 010-1H3V5.5C3 4.121 4.121 3 5.5 3H9V.5a.5.5 0 011 0V3h4V.5a.5.5 0 011 0V3h3.5C19.878 3 21 4.121 21 5.5V9h2.5a.5.5 0 010 1H21v4h2.5a.5.5 0 010 1H21v3.5c0 1.378-1.122 2.5-2.5 2.5H15v2.5a.5.5 0 01-.5.5zm4-4c.827 0 1.5-.673 1.5-1.5V15h-2.5a.5.5 0 010-1H20v-4h-2.5a.5.5 0 010-1H20V5.5c0-.827-.673-1.5-1.5-1.5H15v2.5a.5.5 0 01-1 0V4h-4v2.5a.5.5 0 01-1 0V4H5.5C4.673 4 4 4.673 4 5.5V9h2.5a.5.5 0 010 1H4v4h2.5a.5.5 0 010 1H4v3.5c0 .827.673 1.5 1.5 1.5H9v-2.5a.5.5 0 011 0V20h4v-2.5a.5.5 0 011 0V20h3.5z" />
  );

export default SvgRetouchPatch;
