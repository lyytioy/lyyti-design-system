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
      d="M19.562 13.039l.368 1.211a.827.827 0 00.978.567l1.227-.284a1.116 1.116 0 011.065 1.849l-.858.925a.836.836 0 000 1.136l.858.925a1.116 1.116 0 01-1.062 1.849l-1.227-.284a.827.827 0 00-.978.567l-.368 1.211a1.109 1.109 0 01-2.124 0L17.07 21.5a.827.827 0 00-.978-.567l-1.227.284a1.116 1.116 0 01-1.065-1.849l.858-.925a.836.836 0 000-1.136l-.858-.925a1.116 1.116 0 011.062-1.849l1.227.284a.827.827 0 00.978-.567l.368-1.211a1.109 1.109 0 012.127 0zM10.5 15.5H.5a6 6 0 0110.472-4"
    />,
    <circle
      className="multiple-actions-setting_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-setting_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-setting_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.453-.312"
    />
  );

export default SvgMultipleActionsSetting;
