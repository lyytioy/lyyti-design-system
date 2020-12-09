import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22.291 16.12a3 3 0 000-4.242l-11-11A2.978 2.978 0 009.169 0H2a2 2 0 00-2 2v7.17a2.978 2.978 0 00.879 2.122l11 11a3 3 0 004.242 0zm-1.414-1.414l-6.172 6.172a1.025 1.025 0 01-1.414 0l-11-11A1 1 0 012 9.17V2.5a.5.5 0 01.5-.5h6.669a1 1 0 01.708.293l11 11a1 1 0 010 1.414z" />,
    <circle cx={5.998} cy={5.999} r={1.5} />
  );

export default SvgTagsAlternate;
