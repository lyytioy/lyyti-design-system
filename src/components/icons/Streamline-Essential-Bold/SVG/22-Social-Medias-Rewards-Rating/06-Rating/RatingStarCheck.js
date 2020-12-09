import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.707 11.854l2.066-1.713A1.5 1.5 0 0021.8 7.5h-6.089a.5.5 0 01-.472-.334L13.054.975a1.5 1.5 0 00-2.816.016L8.06 7.166a.5.5 0 01-.472.334H1.5a1.5 1.5 0 00-.963 2.65l5.184 4.3a.5.5 0 01.155.543L3.7 21.523a1.5 1.5 0 002.307 1.687l5.264-3.86a6.5 6.5 0 109.436-7.5zM17.5 22a4.5 4.5 0 114.5-4.5 4.505 4.505 0 01-4.5 4.5z" />,
    <path d="M19.166 15.741l-2.381 2.947-1.255-1.255a.75.75 0 00-1.061 1.06l1.354 1.355a1.387 1.387 0 002.063-.138l2.446-3.025a.75.75 0 00-1.166-.944z" />
  );

export default SvgRatingStarCheck;
