import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskSquareAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm0 21.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <path d="M6.25 19.25h11.5a1.5 1.5 0 001.5-1.5V6.25a1.5 1.5 0 00-1.5-1.5H6.25a1.5 1.5 0 00-1.5 1.5v11.5a1.5 1.5 0 001.5 1.5zM6.75 7A.25.25 0 017 6.75h10a.25.25 0 01.25.25v10a.25.25 0 01-.25.25H7a.25.25 0 01-.25-.25z" />
  );

export default SvgMaskSquareAlternate;
