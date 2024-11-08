import React from 'react'
import { SectionContainer,StatsContainer,StatItem,BrandsContainer,Title,LogosGrid,Logo } from '../../style/views/clients'
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


  return (
    <SectionContainer>
    <StatsContainer>
      <StatItem>
        <h3>350 +</h3>
        <p>Clients Worldwide</p>
      </StatItem>
      <StatItem>
        <h3>20 +</h3>
        <p>Team Members</p>
      </StatItem>
      <StatItem>
        <h3>100 +</h3>
        <p>Projects Completed</p>
      </StatItem>
      <StatItem>
        <h3>85M +</h3>
        <p>Revenue Generated</p>
      </StatItem>
    </StatsContainer>

    {/* Brands Section */}
    <BrandsContainer>
      <Title>
        We worked with the world's biggest brands and the most innovative startups
      </Title>
      <LogosGrid>
        {/* <Logo><img src={spotify} alt="Spotify" /></Logo>
        <Logo><img src={dropbox} alt="Dropbox" /></Logo>
        <Logo><img src={tesla} alt="Tesla" /></Logo>
        <Logo><img src={reddit} alt="Reddit" /></Logo>
        <Logo><img src={google} alt="Google" /></Logo>
        <Logo><img src={stripe} alt="Stripe" /></Logo>
        <Logo><img src={dhl} alt="DHL" /></Logo>
        <Logo><img src={airbnb} alt="Airbnb" /></Logo> */}
            {
               clientsLogo.map((clients,index)=>{
                console.log(index)
                 return(
                   <Logo key={index} imageid={index} >
                    <img src={clients} alt="Clients logo" />
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