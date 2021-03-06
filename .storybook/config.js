import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

addDecorator(withKnobs);
addDecorator(centered);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
