import React, {useState} from 'react'
import ReactPlayer from 'react-player';
import Video from '../../video/video.mp4';
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContant ,HeroH1,HeroBtnWrapper,HeroP,ArrowForward,ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <ReactPlayer
                    url={Video}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                />
            </HeroBg>
            <HeroContant>
                <HeroH1>Sara Decorationss</HeroH1>
                <HeroP>Let's make this moment most memorable one</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                        
                    >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContant>
        </HeroContainer>
    );
};

export default HeroSection;
