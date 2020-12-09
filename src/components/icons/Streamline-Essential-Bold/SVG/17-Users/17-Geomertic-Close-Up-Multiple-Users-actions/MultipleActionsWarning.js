import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17.5 10h.142a.5.5 0 00.312-.908 6 6 0 00-5.931-.561.5.5 0 00-.182.771 6.978 6.978 0 011.606 4.018.25.25 0 00.471.1l.972-1.852A2.94 2.94 0 0117.5 10z" />,
    <ellipse cx={14.014} cy={3.5} rx={3.513} ry={3.5} />,
    <path d="M12 13.6a6.025 6.025 0 00-12-.268.6.6 0 00.6.668h11.024a.378.378 0 00.376-.4z" />,
    <ellipse cx={5.514} cy={3.5} rx={3.513} ry={3.5} />,
    <path d="M18.782 12.271a1.45 1.45 0 00-2.562 0l-5.055 9.634a1.433 1.433 0 00.048 1.409 1.457 1.457 0 001.232.686h10.111a1.459 1.459 0 001.234-.687 1.434 1.434 0 00.047-1.408zM17.5 15.25a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V16a.75.75 0 01.75-.75zm0 7a1 1 0 111-1 1 1 0 01-1 1z" />
  );

export default SvgMultipleActionsWarning;
