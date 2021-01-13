import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24a2.496 2.496 0 01-2.449-2H3.5a.5.5 0 010-1c.827 0 1.5-.673 1.5-1.5V15a7.004 7.004 0 014.018-6.333A3.004 3.004 0 0112 6a3.005 3.005 0 012.982 2.667A7.004 7.004 0 0119 15v4.5c0 .827.673 1.5 1.5 1.5a.5.5 0 010 1h-6.051A2.496 2.496 0 0112 24zm-1.412-2c.209.586.772 1 1.412 1s1.203-.414 1.412-1h-2.824zm7.912-1a2.482 2.482 0 01-.5-1.5V15a5.985 5.985 0 00-3.692-5.539A.499.499 0 0114 9c0-1.103-.897-2-2-2s-2 .897-2 2a.498.498 0 01-.308.461A5.985 5.985 0 006 15v4.5c0 .549-.178 1.072-.5 1.5h13zM3.5 9.5A.5.5 0 013 9c0-3.308 2.692-6 6-6a.5.5 0 010 1C6.243 4 4 6.243 4 9a.5.5 0 01-.5.5z" />,
    <path d="M.5 9.5A.5.5 0 010 9c0-4.963 4.037-9 9-9a.5.5 0 010 1C4.589 1 1 4.589 1 9a.5.5 0 01-.5.5zM20.5 9.5A.5.5 0 0120 9c0-2.757-2.243-5-5-5a.5.5 0 010-1c3.308 0 6 2.692 6 6a.5.5 0 01-.5.5z" />,
    <path d="M23.5 9.5A.5.5 0 0123 9c0-4.411-3.589-8-8-8a.5.5 0 010-1c4.963 0 9 4.037 9 9a.5.5 0 01-.5.5z" />
  );

export default SvgAlarmBellRing;