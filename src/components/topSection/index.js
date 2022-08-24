import React from "react";
import styled from "styled-components";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ExploreIcon from '@mui/icons-material/Explore';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import "../../components/topSection/index.css";

const TopSectionContainer = styled.div`
    position:absolute;
    width:180%;
    height:91%;
    top:32%;
    left:10%;
    transform:translate(-50%,-50%);
    background-color:transparent;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:13%;
    z-index:99;
    `;

    const Logo = styled.h1`
    margin:0;
    color: #fff;
    font-size:45px;
    font-weight:30px;
    margin-top:10px;
    `;

    // const Slogan = styled.h4`
    // margin:0;
    // color:#fff;
    // font-size: 30px;
    // margin-top: 10px
    // `;

    // const Paragraph = styled.p`
    // margin: 0;
    // margin-top:3em;
    // color:#fff;
    // font-size:14px;
    // line-height:1.5;
    // font-weight: 500;
    // max-width:30%;
    // text-align:center;
    // `;

    // const DonateButton = styled.button`
    //  outline: none;
    //  border: none;
    //  background-color: #27b927;
    //  color:#fff;
    //  font-size:16px;
    //  font-weight:700;
    //  border-radius:8px;
    //  padding:8px 2em;
    //  margin-top:3em;
    //  cursor:pointer;
    //  border: 2px solid transparent;
    //  transition: all 350ms ease-in-out;
     
    //  &:hover {
    //     background-color: transparent;
    //     border: 2px solid #27b927;
    //  }`


    export function TopSection(){
        return (
            <TopSectionContainer>
                
                <Logo>EARTH VIU</Logo>
                {/* <Slogan>Keep it cool for safe living</Slogan>
                <Paragraph>
                    You can help us cool off our world and have it go back to it's best state ever by donating to help fix our only world and beloved EARTH! Be cool and let the earth be cool. Let the ice burgs to live. Globe is warming and will set to fire. Stop polluting, it will cost extra. 
                </Paragraph>
                <DonateButton>Donate</DonateButton> */}
                
                <div className="access_container">
                    <AccessibilityNewIcon className="access" fontSize="large"></AccessibilityNewIcon>
                    <ExploreIcon className="explore" fontSize="large"></ExploreIcon>
                    <GpsFixedIcon className="gps" fontSize="large"></GpsFixedIcon>
                    <ViewInArIcon className="threedview" fontSize="large"></ViewInArIcon>
                    <TravelExploreIcon className="travel_explore" fontSize="large"></TravelExploreIcon>
                    <ZoomInIcon className="zoomin" fontSize="large" ></ZoomInIcon>
                    <ZoomOutIcon className="zoomout" fontSize="large"></ZoomOutIcon>
                </div>


                {/* <div className="explore">
                    <div className="exp1">

                    </div>
                </div> */}
            </TopSectionContainer>
        )
    }