import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSecurityLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6 24c-1.654 0-3-1.346-3-3v-7.5c0-1.654 1.346-3 3-3V6c0-3.308 2.692-6 6-6s6 2.692 6 6v4.5c1.654 0 3 1.346 3 3V21c0 1.654-1.346 3-3 3H6zm-1.5-3c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-3h-15v3zm15-4.5v-3c0-.827-.673-1.5-1.5-1.5H6c-.827 0-1.5.673-1.5 1.5v3h15zm-3-6V6c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 007.5 6v4.5h9z" />,
    <circle cx={7.5} cy={14.25} r={1.125} />,
    <circle cx={7.5} cy={20.25} r={1.125} />
  );

export default SvgSecurityLock;
