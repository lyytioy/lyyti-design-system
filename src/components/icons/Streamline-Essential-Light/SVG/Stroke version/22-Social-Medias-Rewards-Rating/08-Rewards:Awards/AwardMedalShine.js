import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedalShine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal-shine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-medal-shine_svg__a"
      d="M12 23.5v-1M17.657 21.157l-.707-.707M20 15.5h-1M4 15.5h1M6.344 21.157l.707-.707M16.096 4.5H7.905M6 .5h12M10.6 10.156L6 .5 3.034 3.89a1 1 0 00-.047 1.259l5 6.667M13.364 10.236L18 .5l2.966 3.39a1 1 0 01.047 1.259l-5.156 6.874"
    />,
    <circle className="award-medal-shine_svg__a" cx={11.841} cy={15} r={5} />,
    <circle className="award-medal-shine_svg__a" cx={11.841} cy={15} r={2} />
  );

export default SvgAwardMedalShine;
