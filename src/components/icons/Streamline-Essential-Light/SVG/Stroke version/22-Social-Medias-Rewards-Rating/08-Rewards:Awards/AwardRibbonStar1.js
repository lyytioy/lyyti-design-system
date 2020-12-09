import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardRibbonStar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-ribbon-star-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-ribbon-star-1_svg__a"
      d="M4.238 14.416l-3.171 5.475a.5.5 0 00.516.744l2.8-.474.975 2.679a.5.5 0 00.9.085l2.723-4.607M19.762 14.416l3.171 5.475a.5.5 0 01-.516.744l-2.8-.474-.975 2.679a.5.5 0 01-.9.085l-2.723-4.607"
    />,
    <circle
      className="award-ribbon-star-1_svg__a"
      cx={11.984}
      cy={9.83}
      r={9}
    />,
    <path
      className="award-ribbon-star-1_svg__a"
      d="M12.572 5.189l1.282 2.644h2.5a.613.613 0 01.427 1.067l-2.166 2.135 1.2 2.761a.654.654 0 01-.931.818l-2.9-1.634-2.9 1.634a.654.654 0 01-.931-.818l1.2-2.761L7.187 8.9a.612.612 0 01.429-1.069h2.5L11.4 5.189a.661.661 0 011.172 0z"
    />
  );

export default SvgAwardRibbonStar1;
