import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-cash_svg__a"
      d="M16.542 9.049l1.8-1.837a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007l1.05-1.072"
    />,
    <circle className="tags-cash_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <path
      className="tags-cash_svg__a"
      d="M18.542 14.5h-2.033a1.342 1.342 0 00-.5 2.588l2.063.825a1.341 1.341 0 01-.5 2.587h-2.03M17.042 21.498v-1M17.042 14.498v-1"
    />,
    <circle className="tags-cash_svg__a" cx={17.042} cy={17.498} r={6} />
  );

export default SvgTagsCash;
