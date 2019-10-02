/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// exports.onInitialClientRender = () => {
//   console.log("ReactDOM.render has executed")
// }

// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log('new pathname', location.pathname)
//   console.log('old pathname', prevLocation ? prevLocation.pathname : null)
// }

exports.shouldUpdateScroll = ({
  prevRouterProps: { location },
  getSavedScrollPosition,
}) => {
  return false
}