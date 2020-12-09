import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardRibbonStar3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-ribbon-star-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-ribbon-star-3_svg__a"
      d="M16 18.144v4.58c0 .55-.318.682-.707.293L12 19.724l-3.293 3.293c-.389.389-.707.257-.707.128v-5M11.776 5.838c.123-.246.324-.246.447 0l.942 1.886H15c.275 0 .319.134.1.3l-1.546 1.142.637 2.184c.077.264-.05.359-.281.211L12 10.342l-1.91 1.181c-.234.145-.361.049-.282-.216l.636-2.135L8.9 8.023c-.221-.164-.176-.3.1-.3h1.833z"
    />,
    <circle className="award-ribbon-star-3_svg__a" cx={12} cy={8.724} r={8} />,
    <circle className="award-ribbon-star-3_svg__a" cx={12} cy={8.724} r={5.5} />
  );

export default SvgAwardRibbonStar3;
