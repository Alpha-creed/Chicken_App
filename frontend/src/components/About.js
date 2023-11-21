import React from 'react'
import { styled } from 'styled-components'
import AboutImg from "./Assest/About.png"
const About=()=> {
  const Overlay=styled.div`
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:20px;
    padding:20px;
  `
  const Img = styled.img`
    width:720px;
    padding-top:20px;
    object-fit:cover;
  `
  const AboutUs =styled.div``
  return (
    <Overlay id="about">
      <AboutUs>
      <h3>About Us</h3>
        Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                     Sit nulla officia est cupidatat quis sunt nisi exercitation consequat cillum est consequat ad deserunt. 
                     Adipisicing non non enim aute dolor occaecat aliquip ea voluptate. 
                     Cillum enim fugiat nisi cillum enim do duis commodo quis exercitation 
                    exercitation adipisicing et excepteur.  Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                     Sit nulla officia est cupidatat quis sunt nisi exercitation consequat cillum est consequat ad deserunt. 
                     Adipisicing non non enim aute dolor occaecat aliquip ea voluptate. 
                     Cillum enim fugiat nisi cillum enim do duis commodo quis exercitation 
                    exercitation adipisicing et excepteur.  Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                     Sit nulla officia est cupidatat quis sunt nisi exercitation consequat cillum est consequat ad deserunt. 
                     Adipisicing non non enim aute dolor occaecat aliquip ea voluptate. 
                     Cillum enim fugiat nisi cillum enim do duis commodo quis exercitation 
                    exercitation adipisicing et excepteur.  Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                     Sit nulla officia est cupidatat quis sunt nisi exercitation consequat cillum est consequat ad deserunt. 
                     Adipisicing non non enim aute dolor occaecat aliquip ea voluptate. 
                     Cillum enim fugiat nisi cillum enim do duis commodo quis exercitation 
                    exercitation adipisicing et excepteur.  Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                     Sit nulla officia est cupidatat quis sunt nisi exercitation consequat cillum est consequat ad deserunt. 
                     Adipisicing non non enim aute dolor occaecat aliquip ea voluptate. 
                     Cillum enim fugiat nisi cillum enim do duis commodo quis exercitation 
                    exercitation adipisicing et excepteur.  Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                     Sit nulla officia est cupidatat quis sunt nisi exercitation consequat cillum est consequat ad deserunt. 
                     Adipisicing non non enim aute dolor occaecat aliquip ea voluptate. 
                     Cillum enim fugiat nisi cillum enim do duis commodo quis exercitation 
                    exercitation adipisicing et excepteur.  Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                     Sit nulla officia est cupidatat quis sunt nisi exercitation consequat cillum est consequat ad deserunt. 
                     Adipisicing non non enim aute dolor occaecat aliquip ea voluptate. 
                     Cillum enim fugiat nisi cillum enim do duis commodo quis exercitation 
                    exercitation adipisicing et excepteur.  Mollit tempor exercitation excepteur elit ad irure sit cupidatat ipsum et non qui.
                 
                     </AboutUs>
<Img src={AboutImg}/>

            </Overlay>

  )
}

export default About
