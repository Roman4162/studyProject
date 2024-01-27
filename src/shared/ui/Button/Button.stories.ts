import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEXT',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'TEXT',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outlined: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
