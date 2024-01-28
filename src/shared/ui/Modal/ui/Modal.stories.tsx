import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit accusantium dicta. Accusamus at sit voluptatum excepturi quaerat! Modi, dicta quod maiores recusandae alias optio deleniti dolore ex deserunt rem?',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit accusantium dicta. Accusamus at sit voluptatum excepturi quaerat! Modi, dicta quod maiores recusandae alias optio deleniti dolore ex deserunt rem?',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
