import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakerStand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.5 2.5A2.5 2.5 0 0018 0H6a2.5 2.5 0 00-2.5 2.5v12A2.5 2.5 0 006 17h4.25a.25.25 0 01.25.25v.96a.251.251 0 01-.085.188l-3.389 2.975a1.5 1.5 0 001.979 2.254l2.814-2.471a.252.252 0 01.33 0l2.815 2.471a1.5 1.5 0 101.978-2.254l-3.357-2.948a.25.25 0 01-.085-.188v-.987a.25.25 0 01.25-.25H18a2.5 2.5 0 002.5-2.5zm-3 2A1.5 1.5 0 1119 3a1.5 1.5 0 01-1.5 1.5zM12 15a5 5 0 115-5 5 5 0 01-5 5zM6.5 1.5A1.5 1.5 0 115 3a1.5 1.5 0 011.5-1.5z" />,
    <circle cx={12} cy={10} r={1.5} />
  );

export default SvgSpeakerStand;
