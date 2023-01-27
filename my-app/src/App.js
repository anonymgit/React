//import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect}from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const response = await fetch('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1');
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);
  

  

  return (
    <>
   
    <header className="section-header23">
      <div className="page-padding-2">
        <div className="container-small">
          <div className="padding-vertical padding-custom2">
            <div className="letter"><div className="max-width-xlarge align-center">
              <div className="margin-bottom margin-small">
                <h1>Double the hires, half the effort<br /></h1>
              </div>
              <p className="text-size-medium-2">Open conversations and nurture relationships at scale and be the first choice when your ideal candidate is ready to explore.<br /></p>
              <div className="margin-top margin-medium">
                <div className="button-row is-button-row-center">
                  <a href="kula-outreach.html" className="button-tertiary w-button">View Kula Outreach</a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header><section className="section-layout349">
        <div className="page-padding-5">
          <div className="container-large">
            <div className="w-layout-grid layout349_component">
              <div
                id="w-node-_45b1d4c4-e943-021b-827b-af2ee8e915af-10cfef58"
                className="layout349_content-wrapper"
              >
                <div className="layout349_content">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-semibold">
                      <span className="text-span-11">Kula Outreach</span>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-10">Automated Candidate Follow-ups</h2>
                  </div>
                  <p className="text-size-medium-2">
                    For prospective candidates, send automated, periodic follow-ups
                    and value-adds to nurture long-term relationships
                    <br />
                  </p>
                  <div className="layout349_mobile-image-wrapper">
                    <img
                      src="../global-uploads.webflow.com/62efc7cb58ad153bfb146988/630cbfe1db67cfefc1a55580_ot.png"
                      loading="lazy"
                      srcSet="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630cbfe1db67cfefc1a55580_ot-p-500.png 500w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630cbfe1db67cfefc1a55580_ot-p-800.png 800w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630cbfe1db67cfefc1a55580_ot-p-1080.png 1080w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630cbfe1db67cfefc1a55580_ot-p-1600.png 1600w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630cbfe1db67cfefc1a55580_ot-p-2000.png 2000w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630cbfe1db67cfefc1a55580_ot.png 2442w"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 100vw"
                      alt=""
                      className="layout349_mobile-image" />
                  </div>
                  <div className="background-holder">
                    <div className="background-layer-2 background-color-1"></div>
                  </div>
                </div>
                <div
                  data-w-id="45b1d4c4-e943-021b-827b-af2ee8e915c5"
                  className="layout349_content"
                >
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-semibold">
                      <span className="text-span-11">Kula Outreach</span>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-10">Personalized Candidate Reach Outs</h2>
                  </div>
                  <p className="text-size-medium-2">
                    No more spray and pray. Ensure 1:1 communication to all of your
                    connections through dynamic personalization capabilities
                  </p>
                  <div className="layout349_mobile-image-wrapper">
                    <img
                      src="../global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db209a7ad3f0c0cc274a5_follow-yp-design.png"
                      loading="lazy"
                      srcSet="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db209a7ad3f0c0cc274a5_follow-yp-design-p-500.png 500w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db209a7ad3f0c0cc274a5_follow-yp-design-p-800.png 800w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db209a7ad3f0c0cc274a5_follow-yp-design-p-1080.png 1080w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db209a7ad3f0c0cc274a5_follow-yp-design-p-1600.png 1600w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db209a7ad3f0c0cc274a5_follow-yp-design-p-2000.png 2000w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630db209a7ad3f0c0cc274a5_follow-yp-design.png 2442w"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 100vw"
                      alt=""
                      className="layout349_mobile-image" />
                  </div>
                  <div style={{opacity:"0"}} className="background-holder">
                    <div className="background-layer-2 background-color-2"></div>
                  </div>
                </div>
                <div
                  data-w-id="45b1d4c4-e943-021b-827b-af2ee8e915da"
                  className="layout349_content"
                >
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-weight-semibold">
                      <span className="text-span-11">Kula Outreach</span>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-10">
                      <strong>Reach out on channels candidates prefer</strong>
                    </h2>
                  </div>
                  <p className="text-size-medium-2">
                    Devise multichannel engagement flows with email, LinkedIn
                    requests, and InMails.
                  </p>
                  <div className="layout349_mobile-image-wrapper">
                    <img
                      src="../global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b0fb6083655ed2c004ebb_out-2.png"
                      loading="lazy"
                      srcSet="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b0fb6083655ed2c004ebb_out-2-p-500.png 500w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b0fb6083655ed2c004ebb_out-2-p-800.png 800w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b0fb6083655ed2c004ebb_out-2-p-1080.png 1080w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b0fb6083655ed2c004ebb_out-2-p-1600.png 1600w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b0fb6083655ed2c004ebb_out-2-p-2000.png 2000w, https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630b0fb6083655ed2c004ebb_out-2.png 2443w"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, 100vw"
                      alt=""
                      className="layout349_mobile-image" />
                  </div>
                  <div style={{opacity:"0"}} className="background-holder">
                    <div className="background-layer-2 background-color-3"></div>
                  </div>
                </div>
              </div>
              <div className="layout349_desktop-image-wrapper">
                <div
                  data-poster-url="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-poster-00001.jpg"
                  data-video-urls="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4,https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.webm"
                  data-autoPlay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="layout349_image is-image1 w-background-video w-background-video-atom"
                >
                  <video
                    id="4d8255fa-4528-4a35-9f74-762cf104af37-video"
                    autoPlay=""
                    loop=""
                    //style="background-image:url(_https_/global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-poster-00001.jpg_)"
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                    
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
                      data-wf-ignore="true" />
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.webm"
                      data-wf-ignore="true" />
                  </video>
                </div>
                <div
                  data-poster-url="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-poster-00001.jpg"
                  data-video-urls="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4,https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-w-id="9c3e4ce8-6646-602f-ce80-a92be7ce45d5"
                  className="layout349_image is-image2 w-background-video w-background-video-atom"
                >
                  <video
                    id="9c3e4ce8-6646-602f-ce80-a92be7ce45d5-video"
                    autoPlay=""
                    loop=""
                    //style="background-image:url(_https_/global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-poster-00001.jpg_)"
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4"
                      data-wf-ignore="true" />
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.webm"
                      data-wf-ignore="true" />
                  </video>
                </div>
                <div
                  data-poster-url="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options (3)-poster-00001.jpg"
                  data-video-urls="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options (3)-transcode.mp4,https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options (3)-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  data-w-id="065e88bd-eb76-8c8e-9cbd-c716a1d288e9"
                  className="layout349_image is-image3 w-background-video w-background-video-atom"
                >
                  <video
                    id="065e88bd-eb76-8c8e-9cbd-c716a1d288e9-video"
                    autoPlay=""
                    loop=""
                    //style='background-image:url(_https_/global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-poster-00001.jpg")'
                    muted=""
                    playsInline=""
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options (3)-transcode.mp4"
                      data-wf-ignore="true" />
                    <source
                      src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options (3)-transcode.webm"
                      data-wf-ignore="true" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </>
      
    
  );
}

export default App;
