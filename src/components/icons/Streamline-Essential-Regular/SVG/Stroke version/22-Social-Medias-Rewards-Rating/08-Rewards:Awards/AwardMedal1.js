import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="award-medal-1_svg__a" cx={12} cy={15} r={8.25} />,
    <path
      className="award-medal-1_svg__a"
      d="M12.531 10.292l1.248 2.458h2.127a.582.582 0 01.419 1l-1.953 1.922 1.082 2.485a.589.589 0 01-.839.737L12 17.419 9.385 18.89a.589.589 0 01-.839-.737l1.082-2.485-1.953-1.922a.582.582 0 01.419-1h2.127l1.249-2.458a.6.6 0 011.061.004zM17.25 8.636l3-7.886H3.75l3 7.886M10.13 6.963L9 .75M13.87 6.963L15 .75"
    />
  );

export default SvgAwardMedal1;
