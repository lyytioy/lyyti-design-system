import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarBubble1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-bubble-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-bubble-1_svg__a"
      d="M12.59 6.981L13.872 9.5h2.5a.613.613 0 01.431 1.069l-2.166 2.263 1.2 2.761a.654.654 0 01-.931.818L12 14.774l-2.9 1.634a.654.654 0 01-.931-.818l1.2-2.761-2.164-2.263A.612.612 0 017.634 9.5h2.5l1.285-2.516a.661.661 0 011.171-.003z"
    />,
    <path
      className="rating-star-bubble-1_svg__a"
      d="M23.177 11.654a.5.5 0 010 .686l-2 2.117.672 2.832a.5.5 0 01-.344.595l-2.79.831-.831 2.79a.5.5 0 01-.595.344l-2.831-.673-2.117 2a.5.5 0 01-.686 0l-2.117-2-2.832.672a.5.5 0 01-.595-.344l-.831-2.79-2.79-.831a.5.5 0 01-.344-.595l.673-2.831-2-2.117a.5.5 0 010-.686l2-2.117-.67-2.832a.5.5 0 01.344-.595l2.79-.831.831-2.79a.5.5 0 01.595-.344l2.831.673 2.117-2a.5.5 0 01.686 0l2.117 2 2.832-.672a.5.5 0 01.595.344l.831 2.79 2.79.831a.5.5 0 01.344.6l-.673 2.831z"
    />
  );

export default SvgRatingStarBubble1;
