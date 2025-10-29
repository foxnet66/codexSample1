/// <reference types="jest" />

import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  it('renders the title heading', () => {
    render(<Header title="Hello world" />);

    expect(screen.getByRole('heading', { level: 1, name: /hello world/i })).toBeInTheDocument();
  });

  it('renders an optional subtitle when provided', () => {
    const subtitle = 'Testing subtitle support';

    render(<Header title="Hello" subtitle={subtitle} />);

    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('omits the subtitle element when not provided', () => {
    render(<Header title="Hello" />);

    expect(screen.queryByText(/Testing subtitle support/i)).not.toBeInTheDocument();
  });
});
