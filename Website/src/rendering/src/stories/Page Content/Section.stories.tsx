import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Section from '../../components/Page Content/Section';
import SpeakersGrid, { SpeakersGridProps } from '../../components/Speakers/SpeakersGrid';
import { GraphQLSpeaker } from 'src/types/speaker';

export default {
  title: 'Components/Page Content/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const speaker = {
  itemName: 'Item Name',
  name: {
    value: 'Item Name',
  },
  picture: {
    jsonValue: {
      value: {
        src: '/assets/img/shop/man-biker.jpg',
      },
    },
  },
  featured: {
    value: true,
  },
  role: {
    value: 'Speaker Role',
  },
} as GraphQLSpeaker;

const speakerProps = {
  fields: {
    data: {
      item: {
        children: {
          results: [speaker, speaker, speaker, speaker],
        },
      },
    },
  },
} as SpeakersGridProps;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>
    <SpeakersGrid {...speakerProps} />
  </Section>
);

export const LightSpeakers = Template.bind({});
LightSpeakers.args = {
  fields: {
    cssClass: {
      fields: {
        Value: {
          value: 'section__speakers',
        },
      },
    },
    brightness: {
      fields: {
        Value: {
          value: 'light',
        },
      },
    },
    title: {
      value: 'Section',
    },
    content: {
      value: 'Section Content',
    },
    callToActionLink: {
      value: {
        href: '/speakers',
        text: 'View Speakers',
      },
    },
  },
};

export const Light = Template.bind({});
Light.args = {
  fields: {
    cssClass: {
      fields: {
        Value: {
          value: '',
        },
      },
    },
    brightness: {
      fields: {
        Value: {
          value: 'light',
        },
      },
    },
    title: {
      value: 'Section',
    },
    content: {
      value: 'Section Content',
    },
    callToActionLink: {
      value: {
        href: '/speakers',
        text: 'View Speakers',
      },
    },
  },
};

export const Dark = Template.bind({});
Dark.args = {
  fields: {
    cssClass: {
      fields: {
        Value: {
          value: '',
        },
      },
    },
    brightness: {
      fields: {
        Value: {
          value: 'dark',
        },
      },
    },
    title: {
      value: 'Section',
    },
    content: {
      value: 'Section Content',
    },
    callToActionLink: {
      value: {
        href: '/speakers',
        text: 'View Speakers',
      },
    },
  },
};

export const DarkNews = Template.bind({});
DarkNews.args = {
  fields: {
    cssClass: {
      fields: {
        Value: {
          value: 'section__news',
        },
      },
    },
    brightness: {
      fields: {
        Value: {
          value: 'dark',
        },
      },
    },
    title: {
      value: 'Section',
    },
    content: {
      value: 'Section Content',
    },
    callToActionLink: {
      value: {
        href: '/speakers',
        text: 'View Speakers',
      },
    },
  },
};
