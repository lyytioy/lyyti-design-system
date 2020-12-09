import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleEmpty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9.5 22a.498.498 0 01-.5-.5V18H8c-4.411 0-8-3.589-8-8s3.589-8 8-8h8c4.399.013 7.987 3.601 8 7.999-.013 4.401-3.601 7.989-7.999 8.001h-2.294l-3.854 3.854A.495.495 0 019.5 22zM8 3c-3.86 0-7 3.14-7 7s3.14 7 7 7h1.5a.5.5 0 01.5.5v2.793l3.146-3.146A.496.496 0 0113.5 17H16c3.848-.011 6.989-3.152 7-7.001-.011-3.847-3.152-6.988-7.001-6.999H8z" />
  );

export default SvgMessagesBubbleEmpty;
