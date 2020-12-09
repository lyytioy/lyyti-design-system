import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17.168 16.037a2.559 2.559 0 00-3.537 0l-.385.384a46.692 46.692 0 01-5.788-5.79l.386-.384a2.51 2.51 0 000-3.537L5.72 4.589a2.505 2.505 0 00-3.535 0L1.022 5.753a3.514 3.514 0 00-.442 4.4A46.942 46.942 0 0013.721 23.3a3.538 3.538 0 004.4-.442l1.164-1.164a2.5 2.5 0 000-3.535zM16 2.38h7a1 1 0 100-2h-7a1 1 0 000 2zM23 4.38h-7a1 1 0 000 2h7a1 1 0 000-2zM23 8.38h-7a1 1 0 000 2h7a1 1 0 000-2z" />,
    <circle cx={11.998} cy={1.38} r={1.25} />,
    <circle cx={11.998} cy={5.38} r={1.25} />,
    <circle cx={11.998} cy={9.38} r={1.25} />
  );

export default SvgPhoneActionsMenu;
