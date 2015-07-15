import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  possible: require("./possible.gif"),
  babel: require("./babel.png"),
  kangax: require("./kangax.png")
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fill caps textColor="black">
            ES6
          </Heading>
          <Heading size={2} fit caps margin="">
            Tomorrow's Javascript, today.
          </Heading>
          <Appear>
            <Text fit textSize={1} caps textColor="tertiary">shamelessly stolen from babel</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={1} fit caps>
            What is ES6?
          </Heading>
          <Appear fid="1">
            <Text textSize={60}>
              ECMAScript 6 (aka ECMAScript 2015)
            </Text>
          </Appear>
          <Appear fid="2">
            <Text textSize={40}>
              (formerly European Computer Manufacturers Association, now just nonsense letters)
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={1} caps fit>
            warning: incoming generalization
          </Heading>
        </Slide>
        <Slide>
          <Heading fit caps>
            ES5: Bad old JavaScript
          </Heading>
          <Appear fid="1">
            <Heading fit caps margin="60px 0 0 0 ">
              ES6: new good javascript
            </Heading>
          </Appear>
          <Appear fid="2">
            <Text textSize="60">
              ...with a small catch
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit caps size={1} margin="-50px 0 20px 0">
            Browser compatibility
          </Heading>
          <Appear>
            <Link href="http://kangax.github.io/compat-table/es6/"><Image width="100%" src={images.kangax}/></Link>
            <Text textSize="30">
              http://kangax.github.io/compat-table/es6/
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="black">
          <Heading fit caps color="tertiary">
            good news
          </Heading>
          <Appear>
            <Text textSize="50" textColor="tertiary">
              you can use ES6 today, painlessly
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <Image src={images.possible.replace('/','')} margin="0px auto 40px" height="293px"/>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} fit caps margin="-40px auto auto auto">
            ...thanks to Babel
          </Heading>
          <Image src={images.babel.replace('/', '')} margin="0px -50px 40px" height="593px"/>
        </Slide>
        <Slide>
          <Heading size={1}>
            okay. why should I?
          </Heading>
          <Appear>
            <Text caps textSize={90} margin="40px 0 0 0">
              good question
            </Text>
          </Appear>
        </Slide>
        <Slide>

        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
