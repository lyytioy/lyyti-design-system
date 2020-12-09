import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeLetter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 20.25A2.252 2.252 0 010 18V6a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 6v12a2.252 2.252 0 01-2.25 2.25H2.25zm0-15A.75.75 0 001.5 6v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H2.25z" />,
    <path d="M4.5 14.25a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5H4.5zM4.5 17.25a.75.75 0 010-1.5h8.25a.75.75 0 010 1.5H4.5zM16.5 12.75c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3z" />
  );

export default SvgEnvelopeLetter;
