import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import NLS from "./../images/nls.svg";

const Imprint = ({ 
  authorFullAdress, 
  authorProfiles, 
  authorEmail, 
  authorPhone,
  isCollapsed
}) => {

  console.log(isCollapsed)

  const fullAdress = authorFullAdress.map((adressLine, i) => {
    return <span key={i}>{adressLine} <br/></span>
  })

  return (
    <section className="imprint">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
        
          <div className="w-full lg:w-1/3">
            <div className="lg:border-gray-700 lg:border-r pt-20">
              <p>
                {fullAdress}
              </p>
              {authorProfiles && <ul className="list --words">
                {authorProfiles.map(({ link, text, indicator }, i) =>
                  <li key={i}><i>{indicator}</i> <a href={link}>{text}</a></li>
                )}
              </ul>}
            </div>
          </div>

          <div className="w-full lg:w-2/3 mt-8 lg:mt-0 lg:pl-20 py-20">
            <Link to="/imprint" className="text-3xl">Imprint</Link>
            
            <div className={isCollapsed ? `hidden` : undefined}>

              <h2 id="information-according-to-§-5-tmg">Information according to § 5 TMG</h2>
              
              <p>
                {fullAdress}
              </p>

              <h2 id="contact">Contact</h2>

              <p>
                Telephone: <em>{authorPhone}</em><br/>
                E-mail: <em>{authorEmail}</em>
              </p>

              <h2 id="dispute-resolution">Dispute resolution</h2>

              <p>
                The European Commission provides a platform for online dispute resolution (ODR): 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
              </p>
              <p>
                You can find our e-mail address in the imprint above.
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer mediation body.
              </p>

              <h3 id="liability-for-content">Liability for content</h3>

              <p>
                As a service provider we are responsible according to § 7 Abs.1 TMG for our own contents on these pages according to the general laws.
                According to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                Obligations to remove or block the use of information in accordance with general laws remain unaffected by this.
                However, liability in this respect is only possible from the time of knowledge of a concrete violation of the law. As soon as we become aware of such infringements, we will remove the content immediately.</p>
              
              <h3 id="liability-for-links">Liability for links</h3>

              <p>
                Our offer contains links to external websites of third parties on whose contents we have no influence.
                Therefore, we cannot assume any liability for these external contents.
                The respective provider or operator of the pages is always responsible for the contents of the linked pages.
                The linked pages were checked for possible legal infringements at the time of linking.
                Illegal contents were not recognisable at the time of linking.
              </p>
              <p>
                A permanent control of the contents of the linked pages is not reasonable without concrete evidence of an infringement.
                As soon as we become aware of any legal infringements, we will remove such links immediately.
              </p>

              <h3 id="copyright">Copyright</h3>
              
              <p>
                The contents and works on these pages created by the site operators are subject to German copyright law.
                Duplication, processing, distribution and any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.
                Downloads and copies of these pages are only permitted for private, non-commercial use.
                Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected.
                In particular, contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly.
                As soon as we become aware of any infringements of the law, we will remove such content immediately.
              </p>

              <h3>Creator of this website</h3>

              <div className="flex">
                <div className="md:w-3/4 lg:w-4/5">
                  <p><i>Michael Czechowski</i> designed and programmed this piece of Internet. I thank him very much for his efforts, patience and technical vision. He is a <a href="https://dailysh.it">Designer, Philosopher and Consultant based in Berlin and Stuttgart</a>. He enriches the community with his <a href="https://dailysh.it">creative programming</a>.</p>
                </div>
                <div className="md:w-1/4 lg:w-1/5 pl-5">
                  <NLS className="w-full h-auto" />
                </div>
              </div>

              <h3>External ressources</h3>
              <ul className="list --bullets">
                <li>
                  <a href="https://unsplash.com/photos/HSFEeS-Jvxw">
                    Photo by Parker Whitson on Unsplash         
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/YXDTQ4e5wDo">
                    Photo by Felipe Bustillo on Unsplash        
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/Vg1o2mipcJc">
                    Photo by Mohammed Hassan on Unsplash        
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/6hUa_5hiDxw">
                    Photo by Houcine Ncib on Unsplash           
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/0adw8Y-3OGA">
                    Photo by christopher lemercier on Unsplash  
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/HGpfvykcI5U">
                    Photo by Aditya Ali on Unsplash             
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/muvYcFC8UWA">
                    Photo by Sunyu Kim on Unsplash              
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/lVmJ7cxIMFA">
                    Photo by Oswaldo Ibáñez on Unsplash         
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/CUADwVXAlkk">
                    Photo by Parker Whitson on Unsplash         
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/Jn9uPCJX2Ks">
                    Photo by Caique Silva on Unsplash           
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/kqSazaTGriE">
                    Photo by Emile Mbunzama on Unsplash         
                  </a>
                </li>
                <li>
                  <a href="https://unsplash.com/photos/nVu_pNoZYxg">
                    Photo by Brian on Unsplash                  
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Imprint.propTypes = {
  authorFullAdress: PropTypes.arrayOf(
    PropTypes.string
  ),
  authorProfiles: PropTypes.arrayOf(
    PropTypes.object
  ),
  authorEmail: PropTypes.string,
  authorPhone: PropTypes.string,
  isCollapsed: PropTypes.bool,
}

Imprint.defaultProps = {
  authorFullAdress: [],
  authorProfiles: [],
  authorEmail: `email not available`,
  authorPhone: `Can be requested by email`,
  isCollapsed: false
}

export default Imprint