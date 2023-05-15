import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Send = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      clipRule="evenodd"
      d="M20.562 11.106a1 1 0 0 1 0 1.791L4.444 20.892A1 1 0 0 1 3 19.997V14l9-2-9-2.206V4.007a1 1 0 0 1 1.444-.896l16.118 7.995Z"
      stroke="currentColor"
      fill="none"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  );

export default Send;
