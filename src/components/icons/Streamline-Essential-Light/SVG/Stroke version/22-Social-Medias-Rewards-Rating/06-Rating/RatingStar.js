import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M11.533 1.571a.5.5 0 01.936 0L15 8.747h7.148a.5.5 0 01.325.88L16.5 14.579l2.5 7.51a.5.5 0 01-.77.561L12 18.079 5.767 22.65A.5.5 0 015 22.089l2.5-7.51-5.974-4.952a.5.5 0 01.325-.88H9z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgRatingStar;
