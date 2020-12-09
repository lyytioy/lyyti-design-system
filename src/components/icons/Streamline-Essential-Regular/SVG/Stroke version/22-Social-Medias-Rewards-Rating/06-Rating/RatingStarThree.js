import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarThree = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-three_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-three_svg__a"
      d="M18.619 13.126l1.457 2.623h2.481a.679.679 0 01.489 1.162L20.768 19.4l1.262 2.9a.687.687 0 01-.979.859L18 21.44l-3.05 1.716a.688.688 0 01-.98-.859l1.263-2.9-2.278-2.487a.679.679 0 01.489-1.162h2.481l1.456-2.623a.694.694 0 011.238.001zM6.619 13.126l1.456 2.623h2.481a.68.68 0 01.49 1.162L8.767 19.4l1.263 2.9a.688.688 0 01-.98.859L6 21.44l-3.051 1.716a.687.687 0 01-.979-.856l1.262-2.9-2.278-2.489a.679.679 0 01.489-1.162h2.481l1.457-2.623a.694.694 0 011.238 0zM12.619 1.131l1.455 2.62h2.48a.679.679 0 01.489 1.162L14.766 7.4l1.262 2.9a.687.687 0 01-.979.859L12 9.441l-3.049 1.715a.687.687 0 01-.979-.859L9.234 7.4 6.957 4.913a.679.679 0 01.489-1.162h2.479l1.457-2.62a.694.694 0 011.237 0z"
    />
  );

export default SvgRatingStarThree;
