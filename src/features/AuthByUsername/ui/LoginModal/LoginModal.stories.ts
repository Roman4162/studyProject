import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { LoginModal } from './LoginModal';

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
};
