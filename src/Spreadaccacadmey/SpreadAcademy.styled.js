import styled from "styled-components";

export const SpreadAcademyContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff6f6;

  @media (max-width: 991px) {
    justify-content: flex-start;
  }
`;
export const SpreadAcademySection = styled.section`
  background-color: #fff6f6;
`;

export const SpreadAcademyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 26px 0px 0px;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0px 0px 0px 0px;
  }
`;

export const Pstyle = styled.p`
  font-size: 13px;
  line-height: 1px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  width: auto;
  max-width: max-content;
  padding: 0px 80px 0px 0px;

  @media (max-width: 991px) {
    padding: 7px 19px 64px 14px;
  }
`;

export const IconContainar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff6f6;
  margin: 23px 0px;
  height: auto;
  width: auto;
`;

export const RightCardImage = styled.img`
  width: 100%;
  max-width: 278px;
  z-index: 1;
  border-radius: 16px;

  @media (max-width: 991px) {
    max-width: 178px;
  }
`;

export const SmallCard = styled.div`
  position: absolute;
  top: -17px;
  right: -3px;
  background: rgb(254, 79, 82);
  border-radius: 3px;
  padding: 7px 1px 5px 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 260px;
  width: 100%;
  z-index: 2;
  color: #fff;

  @media (max-width: 991px) {
    padding: 15px 1px 15px 10px;
    right: -69px;
    width: 74%;
  }
`;

export const CardText = styled.span`
  font-size: 11px;
  font-weight: 650;
  line-height: 16px;
  margin: 2px 0px 2px 0px;

  @media (max-width: 991px) {
    font-size: 7px;
    line-height: 6px;
    font-weight: 700;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 991px) {
    max-width: 17px;
    height: 17px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 48%;
  height: auto;
  position: relative;
  padding: 0px 0px 0px 51px;
`;

export const RightWrapperBefore = styled.img`
  width: 100%;
  max-width: 96px;
  height: 96px;
  top: -24px;
  left: 13%;
  position: absolute;
  z-index: 0;
  border: 0px solid red;
  border-radius: 50%;

  @media (max-width: 991px) {
    left: 11%;
  }
`;

export const RightWrapperAfter = styled.img`
  position: absolute;
  bottom: -15px;
  left: 13%;
  width: 90px;
  height: 57px;
  z-index: 1;

  @media (max-width: 991px) {
    left: 11%;
  }
`;

export const SpreadAcademyDescription = styled.div`
  width: 100%;
  max-width: 376px;
  margin: 31px 0px;
  line-height: 20px;
  border: 0px;
  vertical-align: baseline;

  @media (max-width: 991px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const Description = styled.p`
  color: #000;
  font-style: sans-serif;
  font-size: 14px;

  @media (max-width: 991px) {
    font-size: 10px;
  }
`;

export const GradiendtTextWrapper = styled.div`
  width: 100%;
  max-width: max-content;
  line-height: 1.5;
  font-weight: 400;
  color: #000;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 9px;
  margin-bottom: 20px;
  font-size: 15px;

  @media (max-width: 991px) {
    font-size: 10px;
  }
`;

export const SpreadAcademyTitle = styled.span`
  color: #212b36;
  font-style: sans-serif;
  line-height: 42px;
  letter-spacing: 1px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-size: 37.4px;
  
  @media (max-width: 991px) {
    letter-spacing: 1px;
    color: #212b36;
    font-style: sans-serif;
    line-height: 29px;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-size: 27.4px;
  }
`;

export const LeftSideIcon = styled.img``;

export const SpreadTitleWrapper = styled.div`
  width: 100%;
  max-width: 466px;
`;
