import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 9a3 3 0 103 3 3 3 0 00-3-3zm0 4.5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" />,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 16a4 4 0 114-4 4 4 0 01-4 4z" />
  );

export default SvgCd;
