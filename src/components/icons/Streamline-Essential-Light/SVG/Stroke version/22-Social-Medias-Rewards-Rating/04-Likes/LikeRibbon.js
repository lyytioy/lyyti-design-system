import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-ribbon_svg__a"
      d="M15.539 12.5a1.99 1.99 0 01-1.91 1.158h-2c-2.076 0-1.125-.836-5.125-.836V8.66h.973c1.816 0 2.814-2.135 3.859-4.406.344-.745 1.168-1.148 1.168.409v3h4.057a.727.727 0 01.779.715zM4.148 14.034L.56 20.181c-.138.238-.028.395.243.349l3.358-.569 1.164 3.2c.094.258.286.277.427.04l3.065-5.148M19.852 14.034l3.588 6.147c.138.238.028.395-.243.349l-3.358-.569-1.164 3.2c-.094.258-.286.277-.427.04l-3.065-5.148"
    />,
    <circle className="like-ribbon_svg__a" cx={12} cy={9.632} r={9} />
  );

export default SvgLikeRibbon;
