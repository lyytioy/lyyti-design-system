import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlusOne = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 23.25A2.252 2.252 0 010 21V3A2.252 2.252 0 012.25.75h19.5A2.252 2.252 0 0124 3v18a2.252 2.252 0 01-2.25 2.25H2.25zM1.5 21c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V6.75h-21V21zm21-15.75V3a.75.75 0 00-.75-.75H2.25A.75.75 0 001.5 3v2.25h21z" />,
    <path d="M9 18a.75.75 0 01-.75-.75V15H6a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25H12a.75.75 0 010 1.5H9.75v2.25A.75.75 0 019 18zM16.5 19.5a.75.75 0 01-.75-.75V10.5H15A.75.75 0 0115 9h1.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75z" />
  );

export default SvgLikePlusOne;
