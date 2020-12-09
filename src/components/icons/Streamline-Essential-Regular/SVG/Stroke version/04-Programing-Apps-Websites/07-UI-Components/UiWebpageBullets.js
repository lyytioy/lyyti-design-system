import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-bullets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="ui-webpage-bullets_svg__a" cx={4.5} cy={4.5} r={3.75} />,
    <circle
      className="ui-webpage-bullets_svg__a"
      cx={11.25}
      cy={13.5}
      r={2.25}
    />,
    <path
      className="ui-webpage-bullets_svg__a"
      d="M11.25 1.5h12M11.25 4.5H18M16.5 12h6.75M16.5 15h3"
    />,
    <circle
      className="ui-webpage-bullets_svg__a"
      cx={11.25}
      cy={21}
      r={2.25}
    />,
    <path
      className="ui-webpage-bullets_svg__a"
      d="M16.5 19.5h6.75M16.5 22.5h3M11.25 7.5H21M6 11.25v1.5M6 15.75v1.5M6 20.25v1.5"
    />
  );

export default SvgUiWebpageBullets;
