import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockPassword1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={8.5} cy={13.25} r={0.75} />,
    <circle cx={12} cy={13.25} r={0.75} />,
    <circle cx={15.5} cy={13.25} r={0.75} />,
    <circle cx={8.5} cy={16.75} r={0.75} />,
    <circle cx={12} cy={16.75} r={0.75} />,
    <circle cx={15.5} cy={16.75} r={0.75} />,
    <circle cx={8.5} cy={20.25} r={0.75} />,
    <path d="M12 21a.75.75 0 01-.75-.75.748.748 0 01.75-.75l.057.004A.75.75 0 0112 21z" />,
    <circle cx={15.5} cy={20.25} r={0.75} />,
    <path d="M4.5 24c-.827 0-1.5-.673-1.5-1.5v-12C3 9.673 3.673 9 4.5 9H6V6c0-3.308 2.692-6 6-6s6 2.692 6 6v3h1.5c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-15zm0-14a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-15zM17 9V6c0-2.757-2.243-5-5-5S7 3.243 7 6v3h10z" />
  );

export default SvgLockPassword1;
