import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.5 17.25a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 0110.5 0h3a3.754 3.754 0 013.75 3.75v9.75a3.754 3.754 0 01-3.75 3.75h-3zm0-15.75a2.252 2.252 0 00-2.25 2.25v9.75a2.252 2.252 0 002.25 2.25h3a2.252 2.252 0 002.25-2.25V3.75A2.252 2.252 0 0013.5 1.5h-3z" />,
    <path d="M12 24a.75.75 0 01-.75-.75v-3.034A8.237 8.237 0 013.75 12V9.75a.75.75 0 011.5 0V12c0 3.722 3.028 6.75 6.75 6.75s6.75-3.028 6.75-6.75V9.75a.75.75 0 011.5 0V12a8.237 8.237 0 01-7.5 8.216v3.034A.75.75 0 0112 24z" />
  );

export default SvgMicrophone;
