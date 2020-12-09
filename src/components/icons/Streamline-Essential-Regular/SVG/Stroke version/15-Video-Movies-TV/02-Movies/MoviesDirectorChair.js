import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesDirectorChair = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-director-chair_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="movies-director-chair_svg__a"
      d="M6 1.476V.774M6 14.226v-2.968M18 1.476V.774M18 14.226v-3M18 11.226l-12 .032V1.476h12v9.75zM18.359 14.226H5.641l-1.264 1.292a1.018 1.018 0 00-.213 1.09.98.98 0 00.9.618h13.868a.98.98 0 00.9-.618 1.018 1.018 0 00-.213-1.09zM4.172 15.826l-1.607-6.85M19.575 15.469l1.894-6.493M6 8.976H.75M18 8.976h5.25M17.322 17.226l-10.572 6M6.75 17.226l10.5 6"
    />,
    <path
      className="movies-director-chair_svg__a"
      d="M11.755 4.325a.275.275 0 01.49 0l.568 1.147a.272.272 0 00.205.148l1.276.184a.273.273 0 01.219.182.265.265 0 01-.067.275l-.927.9a.265.265 0 00-.077.236l.218 1.266a.268.268 0 01-.109.263.275.275 0 01-.287.019l-1.136-.595a.276.276 0 00-.256 0l-1.136.594a.275.275 0 01-.287-.019.268.268 0 01-.109-.263l.218-1.262a.265.265 0 00-.077-.236l-.927-.9a.265.265 0 01-.067-.275.273.273 0 01.219-.189l1.276-.184a.272.272 0 00.205-.148z"
    />
  );

export default SvgMoviesDirectorChair;
