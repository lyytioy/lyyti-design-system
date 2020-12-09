import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDoorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22.25 2a2 2 0 00-2-2H6.75a2 2 0 00-2 2v1a1 1 0 002 0v-.5a.5.5 0 01.5-.5h12.5a.5.5 0 01.5.5v19a.5.5 0 01-.5.5H7.25a.5.5 0 01-.5-.5V20a1 1 0 00-2 0v2a2 2 0 002 2h13.5a2 2 0 002-2z" />,
    <path d="M10.25 18a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1.5-1.5V8.75a3.5 3.5 0 00-7 0V10a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 001.5 1.5zm-3.5-4.75a1 1 0 11-1 1 1 1 0 011-1zm-1.5-4.5a1.5 1.5 0 013 0v1A.25.25 0 018 10H5.5a.25.25 0 01-.25-.25z" />
  );

export default SvgDoorLock;
