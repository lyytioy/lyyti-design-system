import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-setting_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-setting_svg__cls-1"
      cx={18.5}
      cy={17.875}
      r={1.25}
    />,
    <path
      className="multiple-actions-setting_svg__cls-1"
      d="M19.562 13.039l.368 1.211a.827.827 0 00.978.567l1.227-.284a1.116 1.116 0 011.065 1.849l-.858.925a.836.836 0 000 1.136l.858.925a1.116 1.116 0 01-1.062 1.849l-1.227-.284a.827.827 0 00-.978.567l-.368 1.211a1.109 1.109 0 01-2.124 0L17.07 21.5a.827.827 0 00-.978-.567l-1.227.284a1.116 1.116 0 01-1.065-1.849l.858-.925a.836.836 0 000-1.136l-.858-.925a1.116 1.116 0 011.062-1.849l1.227.284a.827.827 0 00.978-.567l.368-1.211a1.109 1.109 0 012.127 0zM11.5 13.5H.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.717c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a5.038 5.038 0 01.4 1.2M10.912.737A2.573 2.573 0 0112 .5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96a17.2 17.2 0 013.682 1.6"
    />
  );

export default SvgMultipleActionsSetting;
