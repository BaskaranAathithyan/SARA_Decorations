import React from 'react';
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-2.svg'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesH2,ServicesIcon,ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Digital Arts</ServicesH2>
                    <ServicesP>We are here to serve you. We will make your Loved one's Memories with our wonderful DigitalArts!</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Sara Gifts</ServicesH2>
                    <ServicesP>When the expectation is more than money. We will definitely fullfill your expextations through our amazing Gift Items.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Decorations</ServicesH2>
                    <ServicesP>Let's make this moment the most memorable one. We are loved to satisfy you with your dreams.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
