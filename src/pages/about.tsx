import React from 'react';
import { config, useSpring } from 'react-spring';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { AnimatedBox } from '../elements';
import SEO from '../components/SEO';

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  const ageInYears = Math.floor(
    (new Date() - new Date(745588800000)) / 1000 / 60 / 60 / 24 / 365
  );
  const SEODesc = `Hi. my name is Sebastiaan Jansen! I'm a ${ageInYears}-year-old maker and developer for the Flemish broadcaster VRT.`;

  return (
    <Layout>
      <SEO title="About | Sebastiaan Jansen" desc={SEODesc} />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>I've been expecting you ...</h1>
        <p>
          Greetings, my name is Sebastiaan Jansen, aka Dr. Skunk, a {ageInYears}
          -year-old employee of the Flemish broadcaster{' '}
          <a href="https://www.vrt.be/" title="VRT main website">
            VRT
          </a>
          . I work there as a creative developer for the{' '}
          <a href="https://innovatie.vrt.be/en" title="VRT Innovation website">
            Innovation
          </a>{' '}
          department where I work mostly on full-stack rapid prototyping. Most
          projects are built using a combination of React, Node.js and Python.
          These projects are used in almost every department in VRT, including{' '}
          <a href="https://dewarmsteweek.be/" title="Homepage De Warmste Week">
            "De Warmste Week",
          </a>{' '}
          <a href="https://mnm.be/" title="MNM homepage">
            MNM
          </a>{' '}
          and{' '}
          <a href="https://www.vrt.be/vrtnws/" title="VRT NWS homepage">
            VRT NWS
          </a>
          . Some of these projects are:{' '}
          <a href="https://www.projectmarconi.eu/">Marconi</a>,{' '}
          <a href="https://www.projectcpn.eu/">CPN</a> and{' '}
          <a href="https://fandango-project.eu/">Fandango</a>.
        </p>
        <p>
          For leasure I spend a lot of time at my hackerspace{' '}
          <a
            href="https://area3001.com/"
            title="hackerspace Area3001 homespace"
          >
            Area 3001
          </a>{' '}
          where I make use of the 3D printers and lasercutters to build all
          sorts of Maker projects, which you can see in{' '}
          <Link to="/instagram">my Instagram feed</Link>. In the few hours I
          have left I do improv theatre at{' '}
          <a href="http://preparee.be/">Preparee</a>.
        </p>
        <h1>So what's the deal with your hair?</h1>
        <p>
          So right, I get asked this a lot. I have a auto-immune skin condition
          called vitiligo which makes patches of skin lose their pigment.
          Sometimes the hair on that spot becomes white, which you can see on my
          head. So no, it's not contagious and no, I don't dye my hair.
        </p>
        <p>
          Picture by <a href="https://guillaumedecock.com/">Guillaume Decock</a>
        </p>
      </AnimatedBox>
    </Layout>
  );
};

export default About;
