import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsFlight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-flight_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-flight_svg__cls-1"
      d="M22.433 16.041a1.381 1.381 0 01.99.889 1.294 1.294 0 01.077.44 1.363 1.363 0 01-.637 1.181l-7.853 4.876a.479.479 0 01-.532-.015L11.6 21.391a.266.266 0 01-.04-.374.208.208 0 01.045-.044l1.208-1.066a.268.268 0 01.257-.044l1.514.9 1.92-1.34-3.639-2.252a.332.332 0 01-.037-.467.35.35 0 01.053-.049l.889-.66a.332.332 0 01.312-.044L19.1 17.82l2.32-1.584a1.289 1.289 0 011.013-.195zM11 15.5H.5a6 6 0 0111.654-2.013"
    />,
    <circle
      className="multiple-actions-flight_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-flight_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-flight_svg__cls-1"
      d="M13.018 10.292a6 6 0 018.643 3.214"
    />
  );

export default SvgMultipleActionsFlight;
