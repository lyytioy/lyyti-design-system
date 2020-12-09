import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 16.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zM12 7.5a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zM6.5 11h-2a1 1 0 000 2h2a1 1 0 000-2zM19.5 11h-2a1 1 0 000 2h2a1 1 0 000-2zM14 11h-.75a.249.249 0 01-.25-.25V10a1 1 0 00-2 0v.75a.249.249 0 01-.25.25H10a1 1 0 000 2h.75a.25.25 0 01.25.25V14a1 1 0 002 0v-.75a.25.25 0 01.25-.25H14a1 1 0 000-2z" />,
    <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zM2 21.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v19a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5z" />
  );

export default SvgCellBorderFrame;
