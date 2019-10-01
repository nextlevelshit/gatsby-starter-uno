import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import IndexPage from ".";

const ModalWhatPage = () => (
  // <Layout isModal={true}>
  //   <h2>Modal Page</h2>
  // </Layout>
  <IndexPage isModalOpen={true} />
)

export default ModalWhatPage