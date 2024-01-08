import styled from "styled-components";

export const WhySpreadMainSection = styled.section`
  background: #fff;

  @media (max-width: 991px) {
    margin: 244px 0px 0px 0px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1003px;
  margin: 0px auto;

  @media (max-width: 991px) {
    max-width: 998px;
    padding: 0px 15px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  padding: 36px 0px;
  margin-top: 20px;
  z-index: 0;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    margin: 0px auto;
    background: rgb(244, 247, 249);
    width: 100%;
    max-width: 837px;
    height: 414px;

    @media (max-width: 991px) {
      width: 100%;
      height: 80%;
      top: 86px;
    }
  }
`;

export const WhyspreadTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WhySpreadTitle = styled.h3`
  align-items: center;
`;

export const SpreadTitle = styled.h3`
  font-size: 14px;
  line-height: 3px;
  margin-top: 31px;
  margin-bottom: 0.5em;
  color: #212b36;
  font-weight: 700;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 1px;
  }
`;

export const SpreadPara = styled.p`
  font-size: 14px;
  line-height: 28px;
  text-align: start;

  @media (max-width: 991px) {
    font-size: 9px;
    line-height: 19px;
  }
`;

export const FirstBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  max-width: 33%;
  min-height: 290px;
  padding: 30px;
  z-index: 2;
  font-size: 1.5rem;
  line-height: 1px;
  box-shadow: rgba(49, 49, 49, 0.1) 0px 81.2357px 64px;

  @media (max-width: 991px) {
    max-width: 290px;
    min-height: 151px;
  }
`;

export const LogoBox = styled.div`
  display: contents;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img``;

export const SecondBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 33%;
  border-radius: 5px;
  min-height: 290px;
  padding: 30px;
  background: #fff;
  z-index: 2;
  font-size: 1.5rem;

  @media (max-width: 991px) {
    max-width: 290px;
    min-height: 151px;
  }
`;

export const ThirdBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  max-width: 33%;
  min-height: 290px;
  padding: 30px;
  z-index: 2;
  font-size: 1.5rem;
  box-shadow: rgba(49, 49, 49, 0.1) 0px 81.2357px 64px;
  
  @media (max-width: 991px) {
    max-width: 290px;
    min-height: 151px;
  }
`;
