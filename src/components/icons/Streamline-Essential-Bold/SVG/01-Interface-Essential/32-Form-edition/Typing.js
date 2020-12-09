import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 8a3 3 0 00-3-3H3a3 3 0 00-3 3v8a3 3 0 003 3h18a3 3 0 003-3zm-2 8a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h18a1 1 0 011 1z" />,
    <path d="M8 10a1 1 0 000-2H5a1 1 0 000 2h.25a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25H5a1 1 0 000 2h3a1 1 0 000-2h-.25a.25.25 0 01-.25-.25v-3.5a.25.25 0 01.25-.25z" />
  );

export default SvgTyping;
