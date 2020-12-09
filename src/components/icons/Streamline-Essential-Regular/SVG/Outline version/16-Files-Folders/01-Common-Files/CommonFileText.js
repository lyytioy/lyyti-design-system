import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h15.045c.592 0 1.149.227 1.572.639l2.954 2.883c.431.421.679 1.008.679 1.611V21.75A2.252 2.252 0 0121 24H3zM3 1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.133a.754.754 0 00-.227-.537l-2.954-2.883a.746.746 0 00-.523-.213H3z" />,
    <path d="M6.045 9a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM6.045 13.5a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM6.045 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z" />
  );

export default SvgCommonFileText;
