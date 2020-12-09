import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingHalfStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M17.625.75a.806.806 0 00-.725.45l-3.35 6.625-6.44.638a.805.805 0 00-.5 1.374l5.3 5.253-1.956 7.138a.813.813 0 001.151.935l6.52-3.229z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgRatingHalfStar;
