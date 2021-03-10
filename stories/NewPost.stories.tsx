// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { NewPost } from '../front/components/presentationals/pages/NewPost';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'NewPost',
  component: NewPost,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof NewPost>> = args => <NewPost {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
