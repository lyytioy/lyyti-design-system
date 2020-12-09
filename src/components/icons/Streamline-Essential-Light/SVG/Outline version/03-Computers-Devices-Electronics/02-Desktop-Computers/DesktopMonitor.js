import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 21a.5.5 0 01-.354-.146L20.793 20h-2.586l-.854.854A.495.495 0 0117 21h-1.5a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5H17a.5.5 0 01.354.146l.853.854h2.586l.854-.854A.495.495 0 0122 7h1.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5H22zm1-1V8h-.793l-.854.854A.495.495 0 0121 9h-3a.5.5 0 01-.354-.146L16.793 8H16v12h.793l.854-.854A.495.495 0 0118 19h3a.5.5 0 01.354.146l.853.854H23z" />,
    <path d="M17.5 12a.5.5 0 010-1h4a.5.5 0 010 1h-4zM17.5 14a.5.5 0 010-1h4a.5.5 0 010 1h-4z" />,
    <path d="M6.5 21a.5.5 0 010-1H8v-2H1.5C.673 18 0 17.327 0 16.5v-12C0 3.673.673 3 1.5 3h18c.827 0 1.5.673 1.5 1.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-18a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h12a.5.5 0 010 1H13v2h.5a.5.5 0 010 1h-7zm5.5-1v-2H9v2h3z" />
  );

export default SvgDesktopMonitor;
