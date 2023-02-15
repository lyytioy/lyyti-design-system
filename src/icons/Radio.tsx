import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Radio = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      d="M12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6Zm0-6C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm0 21.6A9.597 9.597 0 0 1 2.4 12c0-5.304 4.296-9.6 9.6-9.6 5.304 0 9.6 4.296 9.6 9.6 0 5.304-4.296 9.6-9.6 9.6Z"
      fill="currentColor"
    />
  );

export default Radio;
