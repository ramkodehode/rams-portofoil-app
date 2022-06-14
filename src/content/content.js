import {
  AboutMe,
  Content,
  Elements,
  Heading,
  IntroTwo,
  IntroOne,
  Name,
  Image,
  Cursor,
  NameContainer,
} from "./contentStyle";
import test from "../images/test.jpg";
const ContentPage = () => {
  return (
    <Content>
      <Elements>
        <IntroOne>Hei, jeg heter</IntroOne>

        <NameContainer>
          <Name>
            Ramanan Subramaniam.
            <Cursor />
          </Name>
        </NameContainer>

        <IntroTwo>
          - Liker å bygge ting. Kall meg gjerne Ram for å gjøre ting litt
          enklere.
        </IntroTwo>

        <Heading>Om meg</Heading>
        <AboutMe>
          <Image src={test} alt="test"></Image>
          Jeg heter Ramanan Subramaniam. Noen kaller meg Ram for å gjøre det
          litt enklere. Jeg er fra Bergen og vokste opp med PC og internett. Jeg
          har alltid vært glad i data og teknologi og har vært nysgjerrig på
          hvordan de fungerer. Jeg har stor interesse for web-design og synes
          dette er veldig spennende og gøy. Det gjorde at jeg valgte min
          karriere som front-end utvikler. Jeg har hatt tidligere erfaringer med
          programmering. Blant annet har jeg laget en del prosjekter som
          Counter-APP, IMDB API søkemotor i React og en blogg side i Python
          Flask. Ved siden av driver jeg med musikk. Jeg spiller trommer, liker
          å gå turer og lese bøker. Som person er jeg behagelig å være med,
          liker å hjelpe andre mennesker og er samarbeidsvillig.
        </AboutMe>
      </Elements>
    </Content>
  );
};

export default ContentPage;
