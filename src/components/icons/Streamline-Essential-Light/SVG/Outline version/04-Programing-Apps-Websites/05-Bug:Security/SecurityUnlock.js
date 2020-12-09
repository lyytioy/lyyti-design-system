import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSecurityUnlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5 24c-1.654 0-3-1.346-3-3V11c0-1.654 1.346-3 3-3h12V6c0-2.757-2.243-5-5-5S7 3.243 7 6a.5.5 0 01-1 0c0-3.308 2.692-6 6-6s6 2.692 6 6v2h1c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H5zm-2-3c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-2H3v2zm18-3v-4H3v4h18zm0-5v-2c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v2h18z" />,
    <circle cx={5.25} cy={11} r={0.75} />,
    <circle cx={7.75} cy={11} r={0.75} />,
    <circle cx={5.25} cy={16} r={0.75} />,
    <circle cx={7.75} cy={16} r={0.75} />,
    <circle cx={5.25} cy={21} r={0.75} />,
    <circle cx={7.75} cy={21} r={0.75} />
  );

export default SvgSecurityUnlock;
