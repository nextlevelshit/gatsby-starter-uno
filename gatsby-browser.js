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
  // routerProps: { location },
  getSavedScrollPosition,
}) => {
  // const { pathname } = location
  // const scrollToTopRoutes = [`/privacy-policy`, `/page-2`]

  // if (scrollToTopRoutes.indexOf(pathname) !== -1) {
  //   window.scrollTo(0,0)
  // }
  console.log(location.pathname)
  const { pathname } = location

  const queriedPosition = getSavedScrollPosition(location)

  console.log(queriedPosition)

  return false
}