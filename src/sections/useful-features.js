/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb-2.png';
import diamond from 'assets/images/icons/diamond.png';
import help from 'assets/images/icons/help.png';
import award from 'assets/images/icons/award.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Exclusive deals',
    description: `Follow trending reciepies and secure an exclusive deal for great recipies.   `,
  },
  {
    id: 2,
    icon: diamond,
    title: 'Smart menu',
    description: `Monitor rising reciepies, spices, sauces and cooking methods in the market to remain competitive.`,
  },
  {
    id: 3,
    icon: help,
    title: 'Fresh menu ',
    description: `keep your menu updated with little changes that make big differences`,
  },
  {
    id: 4,
    icon: award,
    title: 'Uniqueness score and rating',
    description: `Measure the degree of your uniquenes against your competitors`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box as="section" id="useful-features" variant="section.usefulFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Value for Restaurants"
          description="Gain competitive advantage and offer a truely unique menu."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature
              key={item.id}
              data={item}
              className="feature-item"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    marginBottom: 80,
  },
  features: {
    gap: 60,
    display: ['grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: [
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 26px 0 0',
        ],
      },
    },
  },
};
