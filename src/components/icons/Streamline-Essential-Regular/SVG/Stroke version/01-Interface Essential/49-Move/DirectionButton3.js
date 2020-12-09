import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButton3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="direction-button-3_svg__a"
      d="M13.5 23.248h-3a1.5 1.5 0 01-1.5-1.5v-4.19a.752.752 0 01.219-.53l2.25-2.25a.75.75 0 011.061 0l2.25 2.25a.749.749 0 01.22.53v4.19a1.5 1.5 0 01-1.5 1.5zM10.5.748h3a1.5 1.5 0 011.5 1.5v4.189a.747.747 0 01-.22.53l-2.25 2.25a.75.75 0 01-1.061 0l-2.25-2.25A.75.75 0 019 6.437V2.248a1.5 1.5 0 011.5-1.5zM23.25 10.5v3a1.5 1.5 0 01-1.5 1.5h-4.189a.751.751 0 01-.531-.22l-2.25-2.25a.75.75 0 010-1.061l2.25-2.25A.754.754 0 0117.561 9h4.189a1.5 1.5 0 011.5 1.5zM.75 14.248v-4.5A.75.75 0 011.5 9h4.939a.75.75 0 01.53.219l2.25 2.25a.75.75 0 010 1.061l-2.25 2.25a.747.747 0 01-.53.22H1.5a.75.75 0 01-.75-.752z"
    />
  );

export default SvgDirectionButton3;
