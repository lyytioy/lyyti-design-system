import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardRibbonStar3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-ribbon-star-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="award-ribbon-star-3_svg__a" cx={12} cy={9} r={8.25} />,
    <path
      className="award-ribbon-star-3_svg__a"
      d="M15.75 16.349l1.5 6.901-5.25-3-5.25 3 1.5-6.901M12.531 4.292l1.248 2.458h2.127a.582.582 0 01.419 1l-1.952 1.918 1.081 2.485a.589.589 0 01-.839.737L12 11.419 9.385 12.89a.589.589 0 01-.839-.737l1.082-2.485-1.953-1.922a.582.582 0 01.419-1h2.127l1.249-2.454a.6.6 0 011.061 0z"
    />
  );

export default SvgAwardRibbonStar3;
