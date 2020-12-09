import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cog-circle_svg__a" cx={12.063} cy={12.001} r={1.437} />,
    <path
      className="cog-circle_svg__a"
      d="M13.284 6.44l.423 1.392a.952.952 0 001.125.653l1.411-.327a1.283 1.283 0 011.221 2.126l-.987 1.064a.962.962 0 000 1.306l.987 1.064a1.283 1.283 0 01-1.221 2.126l-1.411-.327a.952.952 0 00-1.125.653l-.423 1.392a1.276 1.276 0 01-2.443 0l-.423-1.392a.952.952 0 00-1.125-.653l-1.411.327a1.283 1.283 0 01-1.221-2.126l.987-1.064a.962.962 0 000-1.306l-.987-1.064a1.283 1.283 0 011.221-2.126l1.411.327a.952.952 0 001.125-.653l.423-1.392a1.276 1.276 0 012.443 0z"
    />,
    <circle className="cog-circle_svg__a" cx={12} cy={12.001} r={11.5} />
  );

export default SvgCogCircle;
