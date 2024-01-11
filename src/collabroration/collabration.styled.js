import { styled } from "styled-components";

export const CollobrationSection = styled.section`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px auto;
  background-color: rgb(255, 255, 255);
  margin: 0px;
  max-width: unset;
`;

export const CollobrationContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
  min-height: 70vh;
  justify-content: space-around;
`;

export const CollobrationWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 65vh;
  gap: 8.5rem;
  position: relative;
`;

export const CollobrationIcon = styled.div`
  position: absolute;
  top: 40px;
  right: -25px;
`;

export const LeftBox = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  width: 100%;
  max-width: 50%;
  vertical-align: baseline;
  vertical-align: middle;
  border-style: none;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  max-width: 40%;
  margin: 0px;
  padding: 0px;
  border: 0px;
  vertical-align: baseline;
`;

export const CollobrationImage = styled.img`
  width: 100%;
`;

export const TextBox = styled.div`
  font-size: 48px;
  line-height: 46px;
`;

export const ParagraphBox = styled.div`
  font-size: 15px;
  line-height: 25px;
`;

export const PartnerBox = styled.div`
  display: flex;
  gap: 10.7rem;
  justify-content: space-between;
  margin-bottom: 2.2rem;
  margin-top: -1.9rem;
  align-items: center;
`;
export const SmallIcon = styled.div`
  width: 4.7rem;
  border: 2px solid rgb(255, 78, 84);
  margin-bottom: 0.9rem;
  border-radius: 100vmax;
`;

export const RightPartnerContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50%;
`;
export const LeftPartnerContainer = styled.div`
  display: flex;
  gap: 2px;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50%;
  align-items: start;
  flex-direction: column;
`;

export const PartnerImage = styled.img`
     max-width: 146px;;
`;

export const Title=styled.span`
font-size: 20px;
line-height: 13px;
font-weight: 500;
`