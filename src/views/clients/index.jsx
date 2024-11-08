import React from 'react'
import { SectionContainer,StatsWrapper,StatsContainer,StatItem,BrandsContainer,Title,LogosGrid,Logo,LogoImg } from '../../style/views/clients'
import spotify from '../../assets/svg/spotify.svg'
import dropbox from '../../assets/svg/dropbox.svg'
import tesla from '../../assets/svg/tesla.svg'
import reddit from '../../assets/svg/reddit.svg'
import google from '../../assets/svg/google.svg'
import stripe from '../../assets/svg/stripe.svg'
import dhl from '../../assets/svg/dhl.svg'
import airbnb from '../../assets/svg/airbnb.svg'




const clientsLogo = [spotify, dropbox, tesla, reddit, google, stripe, dhl, airbnb];

const Clients = () => {

  const statsData = [
    { value: "350 +", description: "Clients Worldwide" },
    { value: "20 +", description: "Team Members" },
    { value: "100 +", description: "Projects Completed" },
    { value: "85M +", description: "Revenue Generated" },
  ];

  return (
    <SectionContainer>
    <StatsContainer>
         <StatsWrapper>
            {statsData.map((stat, index) => (
            <StatItem key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.description}</p>
            </StatItem>
          ))}
         </StatsWrapper>
    </StatsContainer>

    {/* Brands Section */}
    <BrandsContainer>
      <Title>
        We worked with the world's biggest <br/>
        brands and the most innovative startups
      </Title>
      <LogosGrid>
            {
               clientsLogo.map((clients,index)=>{
                console.log(index)
                 return(
                   <Logo key={index} imageid={index} >
                    <LogoImg src={clients} alt="Clients logo" />
                    </Logo>
                 )  
               }) 
            } 
      </LogosGrid>
      </BrandsContainer>
    </SectionContainer>
  )
}

export default Clients