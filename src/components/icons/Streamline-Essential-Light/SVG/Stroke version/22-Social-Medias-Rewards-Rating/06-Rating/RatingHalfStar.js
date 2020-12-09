import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingHalfStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M17.559 18.079l-6.7 4.571a.5.5 0 01-.77-.561l2.5-7.51-5.973-4.952a.5.5 0 01.325-.88h7.15l2.532-7.176a.5.5 0 01.936 0z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgRatingHalfStar;
