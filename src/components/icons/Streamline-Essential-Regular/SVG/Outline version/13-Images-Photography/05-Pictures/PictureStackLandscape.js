import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureStackLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 18c-.827 0-1.5-.673-1.5-1.5v-15c0-.827.673-1.5 1.5-1.5h13.5c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5H2.25zm0-1.5h13.5v-3H2.25v3zm13.5-4.5v-.468l-3.804-4.348a.743.743 0 00-.694-.244.744.744 0 00-.485.309L7.441 12h8.309zM5.609 12l3.929-5.612a2.236 2.236 0 011.848-.96 2.233 2.233 0 011.687.767l2.676 3.059V1.5H2.25V12h3.359z" />,
    <path d="M4.5 21a.75.75 0 010-1.5h14.25V3.75a.75.75 0 011.5 0V19.5c0 .827-.673 1.5-1.5 1.5H4.5z" />,
    <path d="M7.5 24a.75.75 0 010-1.5h14.25V6.75a.75.75 0 011.5 0V22.5c0 .827-.673 1.5-1.5 1.5H7.5z" />,
    <circle cx={5.25} cy={4.5} r={1.125} />
  );

export default SvgPictureStackLandscape;
