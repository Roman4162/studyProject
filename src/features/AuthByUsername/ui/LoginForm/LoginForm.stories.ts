import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: 'username',
            password: 'password',
        },
    })],
};
export const withError: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: 'username',
            password: 'password',
            error: 'Error',
        },
    })],
};
export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    })],
};
