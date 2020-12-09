import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M19.5 0h-15a2 2 0 00-2 2v20a2 2 0 003.086 1.679l6.278-4.062a.249.249 0 01.272 0l6.277 4.061A2 2 0 0021.5 22V2a2 2 0 00-2-2zm-4.039 13.509a.351.351 0 01-.494.446l-2.845-1.6a.249.249 0 00-.245 0l-2.844 1.6a.351.351 0 01-.494-.446l1.173-2.7a.251.251 0 00-.063-.286L7.637 8.732a.351.351 0 01.233-.613h2.39a.25.25 0 00.23-.151l1.188-2.756a.351.351 0 01.644 0l1.188 2.756a.25.25 0 00.23.151h2.39a.351.351 0 01.233.613l-2.012 1.792a.251.251 0 00-.063.286z" />
  );

export default SvgRatingStarRibbon;
