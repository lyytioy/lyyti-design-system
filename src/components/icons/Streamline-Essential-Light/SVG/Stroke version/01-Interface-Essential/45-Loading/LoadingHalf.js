import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingHalf = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-half_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="loading-half_svg__a" cx={20.5} cy={7.498} r={3} />,
    <circle className="loading-half_svg__a" cx={13.5} cy={3.498} r={2.5} />,
    <circle className="loading-half_svg__a" cx={6.5} cy={5.498} r={2.5} />,
    <circle className="loading-half_svg__a" cx={3} cy={11.498} r={2} />,
    <circle className="loading-half_svg__a" cx={4.5} cy={17.498} r={2} />,
    <circle className="loading-half_svg__a" cx={9.5} cy={21.498} r={1.5} />,
    <circle className="loading-half_svg__a" cx={14.875} cy={21.644} r={1} />
  );

export default SvgLoadingHalf;
