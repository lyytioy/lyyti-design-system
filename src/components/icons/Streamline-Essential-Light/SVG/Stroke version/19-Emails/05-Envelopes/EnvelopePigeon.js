import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopePigeon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-pigeon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="envelope-pigeon_svg__a"
      d="M12.041 19.706a9.388 9.388 0 004.5 1.421c4.338.333 6-.669 6.632-1.373a.5.5 0 00-.182-.8 23.012 23.012 0 01-4.45-2.832c-.337-.254-.873-.682-1.339-1.053a.5.5 0 01.1-.845c3.35-1.55 5.51-4.627 6.139-8.89a.5.5 0 00-.654-.547c-1.725.578-5.854 2.073-6.249 3.256-.371 1.114-1.294 3.3-1.745 4.358a.5.5 0 01-.763.2 11.761 11.761 0 00-4.492-2.479 2.8 2.8 0 00-3.495 2.822.5.5 0 01-.124.3 1.863 1.863 0 00-.506 1.271.5.5 0 00.63.485l1.5-.375"
    />,
    <path
      className="envelope-pigeon_svg__a"
      d="M9.046 15.627l2.5.5-2.5 5.5-8.5-2 2.5-5.5 2.425.606"
    />,
    <path
      className="envelope-pigeon_svg__a"
      d="M3.046 14.127l2.5 4 6-2M8.8 12.127a.25.25 0 11-.25.25.249.249 0 01.25-.25M12.546 11.548s-.5-4-.5-6c0-1.128 1.979-3.386 2.961-4.438a.5.5 0 01.837.176 13.032 13.032 0 01.7 4.262M17.309 21.193l1.237 1.855M20.215 21.051l1.331 1.997"
    />
  );

export default SvgEnvelopePigeon;
