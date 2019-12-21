import React from 'react';
import {Box, Flex, Link} from 'rebass';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';
import { right } from 'styled-system';
import { CSSObject } from '@styled-system/css';

// export const Menu: React.FC = () => {
//   let show, setShow = false;

//   return (
//     <>
//       <Button variant="danger" ref={target} onClick={() => !show}>
//         Click me to see
//       </Button>
//       <Overlay target={target.current} show={show} placement="right">
//         {({
//           placement,
//           scheduleUpdate,
//           arrowProps,
//           outOfBoundaries,
//           show: _show,
//           ...props
//         }) => (
//           <div
//             {...props}
//             style={{
//               backgroundColor: 'rgba(255, 100, 100, 0.85)',
//               padding: '2px 10px',
//               color: 'white',
//               borderRadius: 3,
//               ...props.style,
//             }}
//           >
//             Simple tooltip
//           </div>
//         )}
//       </Overlay>
//     </>
//   );
// };

const linkStyle: CSSObject = {
  color: 'white',
  textDecoration: 'none',
  fontSize: "7vh",
  fontFamily: "raleway",
  marginTop: "2vh",
}

export const Menu: React.FC = () => {
  return (
    <Box
    overflow="hidden"
    bg='secondary2'
    height='100vh'
    width='100vw'
    css={{position: "relative"}}
    >
    <Flex>
      <Box      
      marginTop="-5vh"     
      marginLeft="auto"
      marginRight="5vw"
      height="auto"
      width="80vh"
      >
      <Box
      marginRight="5vw"
      css={{top: "8rem",
            right: "6vw",
            zIndex: 10,
            position: "absolute"}}
      >
      <Flex
      flexDirection="column"
      >
        <Link css={linkStyle} href='#'>who we are</Link>
        <Link css={linkStyle} href='#'>what we do</Link>
        <Link css={linkStyle} href='#'>how we work</Link>
        <Link css={linkStyle} href='#'>join us</Link>
        <Link css={linkStyle} href='#'>contact us</Link>
        </Flex>
      </Box>
      <Box
      css={{transform: "rotate(-15deg)"}}
      >
      <PcodeShape width="80vh" color={Color.Primary} />
      </Box> 
      </Box>
    </Flex>
     
    </Box>
    
  );
}

