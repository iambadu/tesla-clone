import styled from 'styled-components/macro';

export const Wrap = styled.section`
padding: 20px 10px;
display: flex;
align-items:center;
z-index:500;
position:fixed;
left:0;
right: 0;
background-color:transparent;
`;
export const Logo = styled.div`
padding-left: 15px;
object-fit:scale-down;
margin-right:auto;
max-width: 100px;
img {
    width: 100%;
}
`;

export const NavWrap = styled.ul`
margin:0;
padding:0;
display:flex;
@media (max-width:1100px) {
    display:none;
}
text-transform:uppercase;
`;

export const NavItem = styled.a`
font-weight: 600;
font-size:14px;
margin:0 10px;
`;
export const NavList = styled.li`
list-style: none;
`;
export const RNavWrap = styled(NavWrap)`
@media (max-width:1100px) {
    display:none;
}
margin-left:auto;
display:flex;
align-items: center;
`;
export const Menu = styled.div`
position:relative;
z-index: 1800;
`;
export const MenuIcon = styled.span`
cursor: pointer;
display: inline-block;
height: 14px;
width:26px;
background-repeat: no-repeat;
background-image: url('./img/hamburger.svg');
`;

export const CloseIcon = styled.span`
right:0;
top:20px;
cursor: pointer;
display: inline-block;
position:absolute;
height: 16px;
width:28px;
padding-right:10px;
background-repeat: no-repeat;
background-image: url('./img/close.svg');
`;

export const SndNavWrap = styled.div`
position:fixed;
overflow-x:none;
top:0;
right:0;
left:0;
bottom:0;
width:100%;
height:100%;
color:#fff;
background: rgba(0,0,0,.5);
z-index:1000;
`;
export const SndNavContent = styled.ul`

margin:0;
top:0;
position:fixed;
overflow-y:scroll;
z-index:1600;
display: inline-block;
right:0;
padding:70px 20px 0 20px;
height:100%;
box-sizing:border-box;
min-width:312px;
background: #fff;
color: #444;
`;
export const SndNavList = styled.li`
list-style:none;
`;
export const SndNavItem = styled.a`
padding: 20px 10px;
font-weight: 600;
display: block;
border-bottom: 1px solid #B1B1B1
`;