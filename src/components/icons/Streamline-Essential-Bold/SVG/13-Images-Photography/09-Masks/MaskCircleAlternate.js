import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskCircleAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm0 21.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <path d="M12 20.25A8.25 8.25 0 103.75 12 8.259 8.259 0 0012 20.25zm0-14.5A6.25 6.25 0 115.75 12 6.257 6.257 0 0112 5.75z" />
  );

export default SvgMaskCircleAlternate;
