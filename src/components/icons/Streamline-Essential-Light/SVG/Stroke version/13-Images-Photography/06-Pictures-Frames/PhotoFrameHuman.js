import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotoFrameHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photo-frame-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="photo-frame-human_svg__a"
      x={2.5}
      y={0.5}
      width={19}
      height={23}
      rx={1}
      ry={1}
    />,
    <rect
      className="photo-frame-human_svg__a"
      x={5.5}
      y={3.5}
      width={13}
      height={17}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="photo-frame-human_svg__a"
      d="M16 9s-2 1.5-3 1.5S10 9 10 9s2-1.5 3-1.5S16 9 16 9zM13 9v1.5M15.5 7l1-1M14 6l.5-.5M10 7L9 6M11.5 6l-.5-.5M16.5 12l-.646.646a.5.5 0 000 .708l.292.292a.5.5 0 010 .708L15.5 15M9 11l-.986 1.643c-.282.471-.064.857.486.857h2v2H12c.55 0 .649.281.219.625L10.5 17.5v1"
    />
  );

export default SvgPhotoFrameHuman;
