import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTags1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-1_svg__a"
      d="M23.03 14.545a.552.552 0 01-.249 1l-5.544 1.692-1.693 5.543a.551.551 0 01-1 .249L1.452 9.938a2.789 2.789 0 01-.708-1.707L.738 1.737a1 1 0 011-1h6.491a2.782 2.782 0 011.707.707z"
    />,
    <circle className="tags-1_svg__a" cx={5.737} cy={5.737} r={2} />
  );

export default SvgTags1;
