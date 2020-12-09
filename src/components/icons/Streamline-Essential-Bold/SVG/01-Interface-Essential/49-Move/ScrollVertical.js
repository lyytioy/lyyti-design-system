import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={11.987} r={3} />,
    <path d="M7.384 7.208l4.439-4.44a.249.249 0 01.354 0l4.439 4.44a1.25 1.25 0 001.768-1.768L13.591.647a2.3 2.3 0 00-3.182 0L5.616 5.44a1.25 1.25 0 001.768 1.768zM16.616 16.767l-4.439 4.44a.251.251 0 01-.354 0l-4.439-4.44a1.25 1.25 0 00-1.768 1.768l4.792 4.792a2.25 2.25 0 003.183 0l4.793-4.793a1.25 1.25 0 00-1.768-1.768z" />
  );

export default SvgScrollVertical;
