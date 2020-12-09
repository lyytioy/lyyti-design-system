import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-star_svg__a"
      d="M14.183 9.666c-.706.056-1.436.085-2.183.085-6.213 0-11.25-2.015-11.25-4.5S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.344-1.473 2.55-3.808 3.375M23.25 12.001v-6.75"
    />,
    <path
      className="database-star_svg__a"
      d="M.75 5.251v6c0 1.962 3.139 3.631 7.519 4.246"
    />,
    <path
      className="database-star_svg__a"
      d="M.75 11.251v6c0 2.125 3.684 3.906 8.637 4.378M17.956 11.75l1.544 4.07h2.994a.735.735 0 01.518 1.283l-2.6 1.746 1.44 3.313a.785.785 0 01-1.117.983l-3.485-1.961-3.48 1.961a.785.785 0 01-1.117-.983l1.44-3.313-2.6-1.746a.734.734 0 01.514-1.283h3l1.541-4.07a.794.794 0 011.408 0z"
    />
  );

export default SvgDatabaseStar;
