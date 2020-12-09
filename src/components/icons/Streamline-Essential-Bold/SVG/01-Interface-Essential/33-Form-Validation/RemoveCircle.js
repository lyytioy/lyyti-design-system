import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm5.49 16.076a1 1 0 11-1.414 1.414l-3.9-3.9a.252.252 0 00-.354 0l-3.9 3.9a1.012 1.012 0 01-1.414 0 1 1 0 010-1.414l3.9-3.9a.249.249 0 000-.353l-3.9-3.9A1 1 0 017.924 6.51l3.9 3.9a.25.25 0 00.354 0l3.9-3.9a1 1 0 111.412 1.414l-3.9 3.9a.249.249 0 000 .353z" />
  );

export default SvgRemoveCircle;
