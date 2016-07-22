// "use strict";
//
// import React, {PropTypes} from "react";
// import FontAwesome from "react-fontawesome";
//
// export const LoadingIndicator = ({requests}) => {
//     if (requests > 0) {
//         return (
//             <div id="loadingIndicator">
//                 <i className="fa fa-spinner fa-pulse fa-3x fa-fw"/>
//             </div>
//
//
//         );
//     } else {
//         return (
//             <div style={{backgroundColor: "white", width: "15px"}}>
//                 <FontAwesome
//                     style={{backgroundColor: "white"}}
//                     name='rocket'
//                     size='2x'
//                     spin
//                 />
//             </div>
//         );
//     }
// };
//
// LoadingIndicator.propTypes = {
//     requests: PropTypes.number
// };