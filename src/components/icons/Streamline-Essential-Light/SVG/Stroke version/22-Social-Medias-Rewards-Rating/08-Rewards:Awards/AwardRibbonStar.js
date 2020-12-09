import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardRibbonStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-ribbon-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-ribbon-star_svg__a"
      d="M16 17.2v5.6a.5.5 0 01-.765.424L12 21.2l-3.235 2.023A.5.5 0 018 22.8v-5.6M20 8.7a2.666 2.666 0 00-1.861-2.542 2.668 2.668 0 00-3.6-3.6 2.668 2.668 0 00-5.086 0 2.668 2.668 0 00-3.6 3.6 2.667 2.667 0 000 5.085 2.668 2.668 0 003.6 3.6 2.668 2.668 0 005.086 0 2.668 2.668 0 003.6-3.6A2.667 2.667 0 0020 8.7z"
    />,
    <path
      className="award-ribbon-star_svg__a"
      d="M12.479 4.488L13.507 6.7h2a.489.489 0 01.345.855l-1.736 1.711.962 2.209a.524.524 0 01-.746.655l-2.324-1.307-2.324 1.307a.524.524 0 01-.746-.655L9.9 9.266 8.164 7.558a.489.489 0 01.344-.858h2l1.029-2.215a.53.53 0 01.942.003z"
    />
  );

export default SvgAwardRibbonStar;
