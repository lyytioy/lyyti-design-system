import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M18 18.5a.5.5 0 01-.354-.146l-2.899-2.899a5.616 5.616 0 01-3.611 1.319 5.644 5.644 0 01-5.637-5.637A5.645 5.645 0 0111.137 5.5a5.644 5.644 0 015.637 5.637 5.616 5.616 0 01-1.319 3.611l2.899 2.899A.5.5 0 0118 18.5zm-6.863-12C8.58 6.5 6.5 8.58 6.5 11.137s2.08 4.637 4.637 4.637 4.637-2.08 4.637-4.637S13.694 6.5 11.137 6.5z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />
  );

export default SvgSearchCircle;
