import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 7.999a.5.5 0 010-1h4a.5.5 0 010 1H2zM18.5 14.5a.5.5 0 01-.5-.5V8.5a.5.5 0 00-.5-.5H11a.5.5 0 010-1h6.5c.827 0 1.5.673 1.5 1.5V14a.5.5 0 01-.5.5z" />,
    <path d="M9.5 17c-.827 0-1.5-.673-1.5-1.5V1.706L4.854 4.853a.5.5 0 01-.708-.707l4-4a.5.5 0 01.708-.001l4 4a.5.5 0 01-.708.707L9 1.706V15.5a.5.5 0 00.5.5H22a.5.5 0 010 1H9.5zM18.5 23.999a.483.483 0 01-.191-.039.477.477 0 01-.163-.109l-3.999-3.999a.5.5 0 11.707-.707L18 22.292v-3.293a.5.5 0 011 0v3.293l3.146-3.146a.5.5 0 11.708.707l-4 4a.496.496 0 01-.354.146z" />
  );

export default SvgButtonRefresh;
