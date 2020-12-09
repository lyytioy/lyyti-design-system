import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChevronRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75.75l10.27 10.27L.75 21.29"
    />
  );

export default SvgChevronRight;
