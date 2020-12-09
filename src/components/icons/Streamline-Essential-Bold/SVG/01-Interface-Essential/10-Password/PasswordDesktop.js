import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22.5 0h-21A1.5 1.5 0 000 1.5v16A1.5 1.5 0 001.5 19h21a1.5 1.5 0 001.5-1.5v-16A1.5 1.5 0 0022.5 0zM22 14.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h19a.5.5 0 01.5.5zM14.35 20.681a.5.5 0 00-.385-.181h-3.93a.5.5 0 00-.385.181l-2.1 2.532a.5.5 0 00.41.787h8.079a.5.5 0 00.41-.787z" />,
    <path d="M18 5H6a1.752 1.752 0 00-1.75 1.75v3.5A1.752 1.752 0 006 12h12a1.752 1.752 0 001.75-1.75v-3.5A1.752 1.752 0 0018 5zm.25 5.25a.25.25 0 01-.25.25H6a.25.25 0 01-.25-.25v-3.5A.25.25 0 016 6.5h12a.25.25 0 01.25.25z" />,
    <circle cx={8.5} cy={8.5} r={1} />,
    <circle cx={12.5} cy={8.5} r={1} />
  );

export default SvgPasswordDesktop;
