import styled from 'styled-components/macro';

export const Wrap = styled.div`

`;
export const Section = styled.section`
background: url('/img/model-s.jpg')center center no-repeat;
background-size: cover!important;
display:flex!important;
text-align:center;
align-items:center;
justify-content:center;
flex-flow: column nowrap;
& > div {
position:relative;
height:100%!important;
width:100%;
flex-grow:1;
align-items:center;
justify-content:center;
flex-direction: column;
}
`;
export const BtnWrap = styled.div`
margin-bottom: 25px;
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content:center;
`;

export const Btn1 = styled.a`
font-weight: 600;
margin:8px;
color:#fff;
display:inline-block;
text-transform:uppercase;
border-radius: 20px;
font-size:14px;
min-width: 250px;
padding: 12px 0px;
background: #1F2937;
`;
export const Btn2 = styled(Btn1)`
background:#fff;
color:#1F2937;
`;

export const BContent = styled.div`
width: 100%;
display:flex;
flex-direction: column;
margin: 0 auto;
align-items:center;
justify-content: center;
position:absolute;
bottom:20px;
height: fit-content;
`;
export const Bounce = styled.span`
width:25px;
height:25px;
background: url('/img/bounce.svg');
display:block;
content:"";
    animation: bounce 2s infinite;e;
@keyframes bounce{
    0%,20%,50%,80%,to{
        transform:translateY(0)}40%{transform:translateY(5px)}60%{transform:translateY(3px)}
}
`;
export const SecWrap = styled.div`
align-items:center;
justify-content:center;
flex-direction: column;
display:flex;
`;
export const SecContent = styled.section`
flex-grow: 1;
padding:0 15px;
margin-top: calc(13vh + 15px);
text-align: center;
`;
export const Title = styled.h1`
font-weight:500;
color:#1F2937;
margin:0;
font-size: 38px;
@media (max-width: 600px) {
    font-size: 26px;

}`;
export const SubTitle = styled.h2`
font-size: 14px;
color:#1F2937;
a {
    color:#1F2937;
    text-decoration:underline;
}
font-weight: 400;
color:inherit;

`;
export const FootNav = styled.ul`
padding:0;
margin:0;
display:flex;
@media (max-width:600px) {
    flex-direction:column;
}
`;
export const FootList = styled.li`
@media (max-width:600px) {
    display: ${props => props.mob && 'none'};
}
list-style:none;
`;
export const FootItem = styled.a`
color: #1F2937;
font-size:12px;
margin:0 8px;
`;

export const Section2 = styled(Section)`
background: url('/img/model-y.jpg')center center no-repeat;
`;
export const Section3 = styled(Section)`
background: url('/img/model-3.jpg') center center no-repeat;
background-size: cover;
`;
export const Section4 = styled(Section)`
background: url('/img/model-x.jpg') center center no-repeat;
background-size: cover;`;
export const Section5 = styled(Section)`
background: url('/img/solarpanels.jpg') center center no-repeat;
background-size: cover;`;
export const Section6 = styled(Section)`
background: url('/img/solar-roof.jpg') center center no-repeat;
background-size: cover;`;
export const Section7 = styled(Section)`
background: url('/img/accessories.jpg') center center no-repeat;
background-size: cover;
`;

