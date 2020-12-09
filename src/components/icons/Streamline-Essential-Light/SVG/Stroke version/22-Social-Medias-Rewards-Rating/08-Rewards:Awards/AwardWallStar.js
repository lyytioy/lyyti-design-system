import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardWallStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-wall-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="award-wall-star_svg__a" d="M3 5h18" />,
    <circle className="award-wall-star_svg__a" cx={22} cy={5} r={1} />,
    <circle className="award-wall-star_svg__a" cx={2} cy={5} r={1} />,
    <path
      className="award-wall-star_svg__a"
      d="M18.668 19.38a2.093 2.093 0 00.832-1.555V5h-15v12.825a2.093 2.093 0 00.832 1.555l5.836 3.891a1.627 1.627 0 001.664 0zM5 5L11.178.735a1.557 1.557 0 011.644 0L19 5"
    />,
    <path
      className="award-wall-star_svg__a"
      d="M12.472 9.112L13.5 11.5h2a.49.49 0 01.346.855L14.11 13.89l.962 2.209a.524.524 0 01-.746.655L12 15.447l-2.322 1.307a.524.524 0 01-.746-.655l.962-2.209-1.736-1.535A.489.489 0 018.5 11.5h2l1.029-2.388a.53.53 0 01.943 0z"
    />
  );

export default SvgAwardWallStar;
