import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8 16.996c-.551 0-1-.448-1-1V7.999c0-.551.449-1 1-1h1c.551 0 1 .449 1 1v7.997c0 .552-.449 1-1 1H8zm0-1h1V7.999H8v7.997zM16 16.373a.999.999 0 01-.667-.255l-3.754-3.377c-.022-.019-.046-.044-.07-.069a1.003 1.003 0 01.07-1.417l3.753-3.376A1 1 0 0117 8.62v6.753a.999.999 0 01-1 1zm-3.753-4.375L16 15.374V8.623l-3.753 3.375z" />,
    <path d="M12 23.999c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />
  );

export default SvgButtonPrevious;
