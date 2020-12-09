import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-bullets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="ui-webpage-bullets_svg__a" cx={4.5} cy={6} r={2.5} />,
    <path
      className="ui-webpage-bullets_svg__a"
      d="M10 3.5h12M10 5.5h7M10 7.5h9"
    />,
    <circle className="ui-webpage-bullets_svg__a" cx={11.5} cy={13} r={1.5} />,
    <path className="ui-webpage-bullets_svg__a" d="M15 11.5h7.5M15 13.5h4" />,
    <circle className="ui-webpage-bullets_svg__a" cx={11.5} cy={19} r={1.5} />,
    <path
      className="ui-webpage-bullets_svg__a"
      d="M15 17.5h7.5M15 19.5h4M7 10.5v1M7 13.5v1M7 16.5v1M7 19.5v1"
    />
  );

export default SvgUiWebpageBullets;
