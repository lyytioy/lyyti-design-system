import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingHalfStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.566 23.247a.996.996 0 01-.951-1.315l2.392-7.186-5.71-4.733a1.002 1.002 0 01.644-1.765h6.796l2.414-6.842c.149-.395.526-.658.941-.658a.999.999 0 01.934.648.499.499 0 01.032.176V18.08a.5.5 0 01-.218.413l-6.7 4.571a.967.967 0 01-.574.183zm2.342-9.052c.157.13.22.348.155.542l-2.5 7.51 6.496-4.432V1.84l-2.496 7.074a.501.501 0 01-.472.334H6.942l5.966 4.947z" />
  );

export default SvgRatingHalfStar;
