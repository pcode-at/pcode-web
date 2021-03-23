"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var rebass_1 = require("rebass");
var theme_1 = require("../theme");
var stitches_config_1 = require("../stitches.config");
var styled_system_1 = require("styled-system");
var node_inspector_1 = require("node:inspector");
exports.Footer = function (_a) {
    var className = _a.className;
    var FooterLayout = stitches_config_1.styled(rebass_1.Box, {
        width: theme_1.theme.Footer.Background.Width,
        height: theme_1.theme.Footer.Background.Height
    });
    var Background = stitches_config_1.styled(styled_system_1.backgroundImage, {});
    var WaveStyle = stitches_config_1.styled(rebass_1.Box, {
        width: '100%',
        height: '100%',
        // background-color: ${themeDeprecated.colors[color]};
        mask: node_inspector_1.url().. / static / rectangle.svg
    }), maskPosition, maskRepeat, maskSize;
};
return (react_1["default"].createElement("div", { className: className }));
// -------------------------
// const Background = styled('image', {
//     // src: '../static/rectangle.svg',
// });
// const BackgroundLayout = styled(Background, {
//     width: theme.Footer.Background.Width,
//     height: theme.Footer.Background.Height,
//     color: theme.Footer.Background.Color,
// });
// type Props = {
//     className?: string;
//     backgroundImage: string;
// };
// export const Footer: React.FC<Props> = ({ 
//     className,
//     backgroundImage = '../static/rectangle.svg'
// }) => {
//     const BackgroundImageLayout = styled('div', {
//         width: theme.Footer.Background.Width,
//         height: theme.Footer.Background.Height,
//         // color: theme.Footer.Background.Color,
//     });
//     const BackgroundImage = styled('image', {
//         imageSource: backgroundImage,
//     })
//     return (
//         <div className={className}>
//             {/* <BackgroundImageLayout>
//                 <BackgroundImage/>
//             </BackgroundImageLayout> */}
//             <BackgroundImage/>
//         </div>
//     );
// };       
// --------------------------
// const Background = styled(rectangle, {
//     mask: (rectangle),
//     maskRepeat: 'no-repeat',
// });
// const BackgroundLayout = styled(Background, {
//     width: theme.Footer.Background.Width,
//     height: theme.Footer.Background.Height,
//     color: theme.Footer.Background.Color,
// });
// const TextArea = styled('div', {
// });
// const TextAreaLayout = styled(TextArea, {
//     width: theme.Footer.TextArea.Width,
//     height: theme.Footer.TextArea.Height,
//     lineHeight: theme.Footer.TextArea.LineHeight,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     textAlign: 'center',
//     textTransform: 'lowercase',  
// });
// type Props = {
//     className?: string;
// };
// export const Footer: React.FC<Props> = ({ className }) => {
//     return (
//         <Footer className={className}>
//             {/* <BackgroundLayout>
//                 <Background/>
//             </BackgroundLayout> */}
//         </Footer>
//     );
// };
// ------------------------
// ------------------------
// type Props = {
//     className?: string;
// };
// export const Footer: React.FC<Props> = ({ className }) => {
//     return (
//         <div className={className}>
//             <Flex
//                 paddingTop="2em"
//                 paddingBottom="2em"
//                 backgroundColor={Color.SecondaryDark}
//                 flexDirection="column"
//                 sx={{
//                     '@media screen and (min-width: 615px)': {
//                         justifyContent: 'space-between',
//                         flexDirection: 'row',
//                     },
//                 }}
//             >
//                 <Flex
//                     paddingLeft="2em"
//                     flexDirection="column"
//                     marginBottom="2em"
//                     sx={{
//                         '@media screen and (min-width: 615px)': {
//                             flexDirection: 'row',
//                         },
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             margin: '0 0 1em 0',
//                             '@media screen and (min-width: 615px)': {
//                                 margin: '0 1.5em 1em 0',
//                             },
//                         }}
//                     >
//                         <CopyText
//                             color={Color.SecondaryLight}
//                             fontStyle={FontStyle.Light}
//                         >
//                             pcode - software engineering
//                         </CopyText>
//                         <CopyText
//                             color={Color.SecondaryLight}
//                             fontStyle={FontStyle.Light}
//                         >
//                             +43 664 1652141
//                         </CopyText>
//                         <CopyText
//                             color={Color.SecondaryLight}
//                             fontStyle={FontStyle.Light}
//                         >
//                             office@pcode.at
//                         </CopyText>
//                     </Box>
//                     <div>
//                         <CopyText
//                             color={Color.SecondaryLight}
//                             fontStyle={FontStyle.Light}
//                         >
//                             peter-behrens platz 2
//                         </CopyText>
//                         <CopyText
//                             color={Color.SecondaryLight}
//                             fontStyle={FontStyle.Light}
//                         >
//                             4020 Linz, Austria
//                         </CopyText>
//                         <CopyText
//                             color={Color.SecondaryLight}
//                             fontStyle={FontStyle.Light}
//                         >
//                             Axis Coworking loft
//                         </CopyText>
//                     </div>
//                 </Flex>
//                 <Box
//                     sx={{
//                         paddingLeft: '2em',
//                         lineHeight: '1.5em',
//                         '@media screen and (min-width: 615px)': {
//                             paddingLeft: '0',
//                             paddingRight: '4em',
//                         },
//                     }}
//                 >
//                     <a href={CONSTANTS.IMPRESSUM_LINK} target="blank">
//                         <CopyText
//                             color={Color.White}
//                             fontStyle={FontStyle.Light}
//                         >
//                             Impressum
//                         </CopyText>
//                     </a>
//                     <a href={CONSTANTS.DATA_PRIVACY_LINK} target="blank">
//                         <CopyText
//                             color={Color.White}
//                             fontStyle={FontStyle.Light}
//                         >
//                             Datenschutz
//                         </CopyText>
//                     </a>
//                     <a href={CONSTANTS.AGB_LINK} target="blank">
//                         <CopyText
//                             color={Color.White}
//                             fontStyle={FontStyle.Light}
//                         >
//                             AGB
//                         </CopyText>
//                     </a>
//                 </Box>
//             </Flex>
//         </div>
//     );
// };
