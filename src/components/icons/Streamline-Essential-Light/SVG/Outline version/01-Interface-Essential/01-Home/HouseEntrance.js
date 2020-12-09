import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouseEntrance = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16 24a.5.5 0 01-.5-.5v-6c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v6a.5.5 0 01-.5.5H1.5C.673 24 0 23.327 0 22.5V9.987c0-.465.21-.895.576-1.181l10.5-8.218c.263-.206.591-.319.924-.319s.661.113.924.319l10.5 8.218c.366.286.576.716.576 1.18V22.5c0 .827-.673 1.5-1.5 1.5H16zm6.5-1a.5.5 0 00.5-.5V9.987a.496.496 0 00-.192-.393l-10.5-8.218a.495.495 0 00-.616-.001l-10.5 8.218A.498.498 0 001 9.987V22.5a.5.5 0 00.5.5h6v-5.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5V23h6z" />
  );

export default SvgHouseEntrance;
