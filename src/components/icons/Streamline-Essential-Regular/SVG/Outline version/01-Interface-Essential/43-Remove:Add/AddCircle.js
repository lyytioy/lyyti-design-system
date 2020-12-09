import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 17.25a.75.75 0 01-.75-.75v-3.75H7.5a.75.75 0 010-1.5h3.75V7.5a.75.75 0 011.5 0v3.75h3.75a.75.75 0 010 1.5h-3.75v3.75a.75.75 0 01-.75.75z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />
  );

export default SvgAddCircle;
