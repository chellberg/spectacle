import React from "react/addons";

import {
  Appear, BlockQuote, Cite, Code, CodePane, Deck, Fill,
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
  kangax: require("./kangax.png"),
  keepcalm: require("./keepcalm.png")
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
          <Heading size={2} textColor="tertiary" fit caps margin="0 0 80px 0">
            Tomorrow's Javascript, today.
          </Heading>
          <Appear>
            <Text fit textSize="15" caps textColor="black">title shamelessly stolen from basically every ES6 post ever</Text>
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
        <Slide transition={['slide', 'spin']} bgColor="black">
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
        <Slide bgColor="black">
          <BlockQuote>
            <Quote>ES6 will change the way you write JS code.</Quote>
            <Cite>Mozilla - ES6 in Depth: An Introduction</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide']} bgColor="black">
          <Image src={images.keepcalm.replace('/','')} margin="-80px auto 20px" height="100%" />
          <Text textSize={40} textColor="tertiary">
            Photo credit: Miles Sterrett
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fill caps margin="-80px 0 40px 0">
            fat arrow
          </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!./fatarrow1.example")} />
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fill caps margin="-80px 0 40px 0">
            fat arrow
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./fatarrow2.example")} />
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fit caps margin="-80px 0 40px 0">
            string interpolation (template strings)
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./strings.example")} />
        </Slide>


        <Slide transition={["slide"]}>
          <Heading fit caps margin="-80px 0 40px 0">
            default parameters
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./defaultparams.example")} />
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fit caps margin="-80px 0 40px 0">
            rest/spread
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./restspread.example")} />
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fit caps margin="-80px 0 40px 0">
            destructuring assignment
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./destructuring1.example")} />
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fit caps margin="-80px 0 40px 0">
            destructuring arguments
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./destructuring2.example")} />
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fit caps margin="-80px 0 40px 0">
            destructuring/pattern matching arrays
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./destructuring3.example")} />
        </Slide>

        <Slide transition={["slide"]}>
          <Heading fit caps margin="-80px 0 40px 0">
            modules - import/export
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./module1.example")} />
          <Text textSize={50}>
            then...
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./module2.example")} />
        </Slide>

         <Slide transition={["slide"]}>
          <Heading fill caps margin="-80px 0 40px 0">
            classes
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./classes.example")} />
        </Slide>

         <Slide transition={["slide"]}>
          <Heading fill caps margin="-80px 0 40px 0">
            inheritance
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./inheritance.example")} />
        </Slide>

        <Slide>
          <Heading fit caps margin="-80px 0 40px 0">
            How to Babel
          </Heading>
          <Code>
            npm install babel
          </Code>
          <Text textSize={30} caps fill>
            ...then...
          </Text>
          <Code>
            babel index.js -o bundle.js
          </Code>
          <Text textSize={30} caps fill>
            done!
          </Text>
        </Slide>


        <Slide>
          <Heading fill caps margin="-80px 0 40px 0">
            Resources
          </Heading>
          <Link href="http://www.getfretless.com/reasons-i-like-js-again-es6/">
            <Text textSize={60}>
              http://www.getfretless.com/reasons-i-like-js-again-es6/
            </Text>
          </Link>
          <Link href="https://github.com/lukehoban/es6features">
            <Text textSize={60}>
              https://github.com/lukehoban/es6features
            </Text>
          </Link>
          <Link href="https://hacks.mozilla.org/2015/04/es6-in-depth-an-introduction/">
            <Text fit textSize={60}>
              https://hacks.mozilla.org/2015/04/es6-in-depth-an-introduction/
            </Text>
          </Link>
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
