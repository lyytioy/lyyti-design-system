import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEjectButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.999c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />,
    <path d="M8 16.999c-.551 0-1-.448-1-1v-1c0-.552.449-1 1-1h8a1 1 0 011 1v1a1 1 0 01-1 1H8zm0-1h8v-1H8v1zM8.623 12.999a.998.998 0 01-.999-.949.99.99 0 01.256-.721l3.377-3.752a.995.995 0 01.798-.329c.265.014.51.131.689.33l3.377 3.753A.998.998 0 0115.378 13l-6.755-.001zM12 8.246l-3.377 3.752 6.754.002L12 8.246v-.25.25z" />
  );

export default SvgEjectButton;
