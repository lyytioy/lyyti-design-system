import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionLayout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 23.5c-.827 0-1.5-.673-1.5-1.5V2C.5 1.173 1.173.5 2 .5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5H2zM1.5 22a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-5.5h-21V22zm21-6.5v-7h-6v7h6zm-7 0v-7h-7v7h7zm-8 0v-7h-6v7h6zm15-8V2a.5.5 0 00-.5-.5H2a.5.5 0 00-.5.5v5.5h21z" />
  );

export default SvgCompositionLayout;
