import {
  AboutMe,
  Content,
  Elements,
  Heading,
  IntroTwo,
  IntroOne,
  Name,
  Image,
} from './contentStyle';
import test from '../img/test.jpg';
const ContentPage = () => {
  return (
    <div>
      <Content>
        <Elements>
          <IntroOne>Hei, jeg heter</IntroOne>
          <Name>Ramanan Subramaniam.</Name>
          <IntroTwo>
            Liker å bygge ting. Kall meg gjerne Ram for å gjøre ting litt
            enklere.
          </IntroTwo>
          <Heading>Om meg</Heading>
          <Image src={test} alt="test"></Image>
          <AboutMe></AboutMe>
        </Elements>
      </Content>
    </div>
  );
};

export default ContentPage;
