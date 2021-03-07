// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import App from '../front/components/App';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'App',
  component: App,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof App>> = args => <App {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
