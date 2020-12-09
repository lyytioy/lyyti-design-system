import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ranking-ribbon_svg__a"
      d="M12.531 1.076l1.248 2.457h2.127a.583.583 0 01.419 1l-1.953 1.919 1.082 2.485a.589.589 0 01-.839.737L12 8.2 9.385 9.674a.589.589 0 01-.839-.737l1.082-2.485L7.675 4.53a.583.583 0 01.419-1h2.127l1.249-2.454a.594.594 0 011.061 0z"
    />,
    <path
      className="ranking-ribbon_svg__a"
      d="M4.5 6.3A9.944 9.944 0 00.75 8.25v7.5s3-3 11.25-3 11.25 3 11.25 3v-7.5A9.941 9.941 0 0019.5 6.3M8.25 15.75c0 6.75-4.5 7.5-4.5 7.5v-1.5a1.5 1.5 0 00-1.5-1.5H.75a3.344 3.344 0 002.25-3M15.75 15.75c0 6.75 4.5 7.5 4.5 7.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a3.344 3.344 0 01-2.25-3"
    />
  );

export default SvgRankingRibbon;
