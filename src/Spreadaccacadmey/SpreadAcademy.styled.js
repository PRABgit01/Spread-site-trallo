import styled from "styled-components";

export const SpreadAcademyContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fff6f6;
  align-items: center;
  @media (max-width: 700px) {
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
  padding: 0px 71px 0px 0px;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0px 0px 0px 0px;
  }
`;

export const Pstyle = styled.p`
  font-size: 13px;
`;

export const LeftWrapper = styled.div`
  max-width: max-content;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 700px) {
    padding: 7px 19px 64px 14px;
  }
`;

export const IconContainar = styled.div`
  background-color: #fff6f6;
  margin: 23px 0px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const RightCardImage = styled.img`
  max-width: 278px;
  z-index: 1;
  border-radius: 16px;
  @media (max-width: 700px) {
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
  color: white;
  @media (max-width: 700px) {
    padding: 11px 12px 11px 11px;
    right: -17px;
    width: 74%;
  }
`;

export const CardText = styled.span`
  font-size: 11px;
  font-weight: 650;
  line-height: 16px;
  margin: 2px 0px 2px 0px;
  @media (max-width: 700px) {
    font-size: 5px;
    line-height: 9px;
    font-weight: 791;
  }
`;

export const CardImage = styled.img`
  max-width: 30px;
  width: 100%;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  @media (max-width: 700px) {
    max-width: 17px;
    height: 17px;
  }
`;

export const RightWrapper = styled.div`
  height: auto;
  max-width: 48%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RightWrapperBefore = styled.img`
  position: absolute;
  top: -24px;
  left: 6%;
  width: 96px;
  height: 96px;
  z-index: 0;
  border: 0px solid red;
  border-radius: 50%;
  @media (max-width: 700px) {
    left: -21%;
  }
`;
export const RightWrapperAfter = styled.img`
  content: "";
  position: absolute;
  bottom: -18px;
  left: 3%;
  width: 90px;
  height: 57px;
  z-index: 1;
  @media (max-width: 700px) {
    left: -21%;
  }
`;

export const SpreadAcademyDescription = styled.div`
  margin: 31px 0px;
  line-height: 18px;
  border: 0px;
  vertical-align: baseline;
  @media (max-width: 700px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
export const Description = styled.p`
  color: black;
  font-style: sans-serif;
  font-size: 15px;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

export const EmtyDiv = styled.div`
  width: 106px;
  padding: 0px 69px 0px 19px;
`;

export const GradiendtTextWrapper = styled.div`
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 9px;
  margin-bottom: 20px;
  width: max-content;
  font-size: 15px;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

export const SpreadAcademyTitle = styled.span`
  letter-spacing: 1px;
  color: #212b36;
  font-style: sans-serif;
  line-height: 42px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-size: 42.4px;
  @media (max-width: 700px) {
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
