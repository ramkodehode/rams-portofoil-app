import {AboutMe, Content, Elements, Heading, Intro, Name} from './contentStyle';

const ContentPage = () => {
  return (
    <div>
      <Content>
        <Elements>
          <Intro>Hei, jeg heter</Intro>
          <Name>Ramanan Subramaniam. Liker å bygge ting</Name>
          <Intro>Kall meg gjerne Ram for å gjøre ting litt enklere. </Intro>
          <Heading>Om meg</Heading>
          <AboutMe>
            Akkurat nå holder jeg på med kurs hos Jobloop innen front-end
            utvikling. Jeg har endel tidligere erfaringer med programmering.
            Blant annet har jeg laget en del prosjekter som jeg har på Github.
            Jeg kom her for å bygge en solid erfaring, komme inn i
            arbeidsmarkedet og jobbe som front-end utvikler. Jeg har stor
            interesse for programmering, fordi jeg synes det er spennende og
            gøy. Jeg har alltid vært glad i data og teknologi. Dette gjorde at
            jeg valgte denne linjen. Ved siden av driver jeg med musikk. Jeg
            spiller trommer, liker å gå turer og lese bøker. Som person er jeg
            behagelig å være med.
          </AboutMe>
        </Elements>
      </Content>
    </div>
  );
};

export default ContentPage;
