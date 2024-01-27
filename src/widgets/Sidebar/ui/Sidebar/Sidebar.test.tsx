import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RenderComponent } from 'shared/lib/tests/RenderComponent/RenderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('test render', () => {
        RenderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        RenderComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
