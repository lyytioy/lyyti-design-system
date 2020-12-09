import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="cd-play_svg__a" d="M17.873 10A8.484 8.484 0 1113 6.737" />,
    <circle className="cd-play_svg__a" cx={11} cy={15} r={2.5} />,
    <circle className="cd-play_svg__a" cx={16.25} cy={6.863} r={1.25} />,
    <circle className="cd-play_svg__a" cx={21.25} cy={5.363} r={1.25} />,
    <path
      className="cd-play_svg__a"
      d="M17.5 6.863v-4.53a1 1 0 01.684-.948l3-.834A1 1 0 0122.5 1.5v3.863"
    />,
    <circle className="cd-play_svg__a" cx={2.75} cy={5.75} r={1.25} />,
    <path
      className="cd-play_svg__a"
      d="M4 5.75V1.5M13.357 15.833l5.658 1.998M11.947 17.314l2.274 5.552M8.643 14.167l-5.658-1.998M10.053 12.686L7.779 7.134"
    />
  );

export default SvgCdPlay;
