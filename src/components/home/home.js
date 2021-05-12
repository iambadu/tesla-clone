import ReactFullPage from '@fullpage/react-fullpage';
import Header from '../header/header';
import * as Content from './content';

export default function Home() {
    return (
        <>
            <Header />
            <ReactFullPage
                scrollingSpeed={1500}
                render={() => {
                    return (
                        <>
                            <div id="fullpage-wrapper">
                                <Content.Section className=" section active">
                                    {/* <Content.SecWrap> */}
                                    <Content.SecContent>
                                        <Content.Title>Model S</Content.Title>
                                        <Content.SubTitle>
                                            Order Online for <a href="/">Touchless Delivery</a> </Content.SubTitle>
                                    </Content.SecContent>
                                    <Content.BContent>
                                        <Content.BtnWrap>
                                            <Content.Btn1>Custom Order</Content.Btn1>
                                            <Content.Btn2>Existing Inventory</Content.Btn2>
                                        </Content.BtnWrap>
                                        <Content.Bounce />
                                    </Content.BContent>

                                    {/* </Content.SecWrap> */}


                                </Content.Section>
                                <Content.Section2 className=" section">
                                    <Content.SecContent>
                                        <Content.Title>Model Y</Content.Title>
                                        <Content.SubTitle>
                                            Order Online for <a href="#arc">Touchless Delivery</a> </Content.SubTitle>
                                    </Content.SecContent>
                                    <Content.BContent>
                                        <Content.BtnWrap>
                                            <Content.Btn1>Custom Order</Content.Btn1>
                                            <Content.Btn2>Existing Inventory</Content.Btn2>
                                        </Content.BtnWrap>
                                    </Content.BContent>
                                </Content.Section2>
                                <Content.Section3 className=" section">
                                    <Content.SecContent>
                                        <Content.Title>Model 3</Content.Title>
                                        <Content.SubTitle>
                                            Order Online for <a href="#arc">Touchless Delivery</a> </Content.SubTitle>
                                    </Content.SecContent>
                                    <Content.BContent>
                                        <Content.BtnWrap>
                                            <Content.Btn1>Custom Order</Content.Btn1>
                                            <Content.Btn2>Existing Inventory</Content.Btn2>
                                        </Content.BtnWrap>
                                    </Content.BContent>
                                </Content.Section3>
                                <Content.Section4 className=" section">
                                    <Content.SecContent>
                                        <Content.Title>Model X</Content.Title>
                                        <Content.SubTitle>
                                            Order Online for <a href="#arc">Touchless Delivery</a> </Content.SubTitle>
                                    </Content.SecContent>
                                    <Content.BContent>
                                        <Content.BtnWrap>
                                            <Content.Btn1>Custom Order</Content.Btn1>
                                            <Content.Btn2>Existing Inventory</Content.Btn2>
                                        </Content.BtnWrap>
                                    </Content.BContent>
                                </Content.Section4>
                                <Content.Section5 className=" section">
                                    <Content.SecContent>
                                        <Content.Title>Lowest Cost Solar Panels in America</Content.Title>
                                        <Content.SubTitle>
                                            Order Online for <a href="#arc">Touchless Delivery</a> </Content.SubTitle>
                                    </Content.SecContent>
                                    <Content.BContent>
                                        <Content.BtnWrap>
                                            <Content.Btn1>Custom Order</Content.Btn1>
                                            <Content.Btn2>Existing Inventory</Content.Btn2>
                                        </Content.BtnWrap>
                                    </Content.BContent>
                                </Content.Section5>
                                <Content.Section6 className=" section">
                                    <Content.SecContent>
                                        <Content.Title>Solar for New Roofs</Content.Title>
                                        <Content.SubTitle>
                                            Solar Roof Costs Less Than a New Roof Plus Solar Panels
                                        </Content.SubTitle>
                                    </Content.SecContent>
                                    <Content.BContent>
                                        <Content.BtnWrap>
                                            <Content.Btn1>Custom Order</Content.Btn1>
                                            <Content.Btn2>Existing Inventory</Content.Btn2>
                                        </Content.BtnWrap>
                                    </Content.BContent>
                                </Content.Section6>
                                <Content.Section7 className=" section">
                                    <Content.SecContent>
                                        <Content.Title>Accessories</Content.Title>
                                    </Content.SecContent>
                                    <Content.BContent>
                                        <Content.BtnWrap>
                                            <Content.Btn1>Shop Now</Content.Btn1>
                                        </Content.BtnWrap>
                                        <Content.FootNav>
                                            <Content.FootList>
                                                <Content.FootItem>Tesla © 2021</Content.FootItem>
                                            </Content.FootList>
                                            <Content.FootList>
                                                <Content.FootItem>Privacy & Legal</Content.FootItem>
                                            </Content.FootList>
                                            <Content.FootList mob={true}>
                                                <Content.FootItem>Contact</Content.FootItem>
                                            </Content.FootList>
                                            <Content.FootList mob={true}>
                                                <Content.FootItem>Careers</Content.FootItem>
                                            </Content.FootList>
                                            <Content.FootList mob={true}>
                                                <Content.FootItem>Get Newsletter</Content.FootItem>
                                            </Content.FootList>
                                            <Content.FootList>
                                                <Content.FootItem>News</Content.FootItem>
                                            </Content.FootList>
                                            <Content.FootList mob={true}>
                                                <Content.FootItem>Forums</Content.FootItem>
                                            </Content.FootList>
                                            <Content.FootList mob={true}>
                                                <Content.FootItem>Locations</Content.FootItem>
                                            </Content.FootList>
                                        </Content.FootNav>
                                    </Content.BContent>
                                </Content.Section7>

                            </div>
                        </>
                    );
                }}
            />
        </>
    );
}





