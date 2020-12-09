import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <circle cx={6.5} cy={10} r={0.75} />,
    <circle cx={17.5} cy={10} r={0.75} />,
    <path d="M11.999 21.007a5.499 5.499 0 01-5.327-4.133c-.1-.388-.042-.792.161-1.137A1.492 1.492 0 018.114 15h7.758c.401 0 .777.156 1.061.438a1.493 1.493 0 01.394 1.436 5.5 5.5 0 01-5.328 4.133zM8.125 16a.495.495 0 00-.43.246.498.498 0 00-.054.379 4.5 4.5 0 008.718-.001.496.496 0 00-.484-.624h-7.75z" />
  );

export default SvgSmileyHappy;
