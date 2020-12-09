import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M12 1C5.649 1 .5 5.253.5 10.5a8.738 8.738 0 003.4 6.741L1.5 23l6.372-3.641A13.608 13.608 0 0012 20c6.351 0 11.5-4.253 11.5-9.5S18.351 1 12 1z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgMessagesBubble;
