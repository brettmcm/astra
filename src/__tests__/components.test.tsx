import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Button } from '../AstraLibraryKit/components/button'
import { Badge } from '../AstraLibraryKit/components/badge'
import { SwitchField } from '../AstraLibraryKit/components/switch_field'
import { Toast } from '../AstraLibraryKit/components/toast'
import { cn } from '../AstraLibraryKit/components/utils'

afterEach(cleanup)

describe('cn utility', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', 'visible')).toBe('base visible')
  })

  it('merges conflicting tailwind classes', () => {
    expect(cn('px-4', 'px-2')).toBe('px-2')
  })
})

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies primary variant by default', () => {
    render(<Button>Primary</Button>)
    const btn = screen.getByRole('button', { name: /primary/i })
    expect(btn.className).toContain('bg-[#5250f3]')
  })

  it('applies neutral variant', () => {
    render(<Button variant="neutral">Neutral</Button>)
    const btn = screen.getByRole('button', { name: /neutral/i })
    expect(btn.className).toContain('border-[#5250f3]')
  })

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button', { name: /disabled/i })).toBeDisabled()
  })

  it('fires onClick', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button', { name: /click/i }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('renders start and end icons', () => {
    render(
      <Button iconStart={<span data-testid="start" />} iconEnd={<span data-testid="end" />}>
        With Icons
      </Button>
    )
    expect(screen.getByTestId('start')).toBeInTheDocument()
    expect(screen.getByTestId('end')).toBeInTheDocument()
  })
})

describe('Badge', () => {
  it('renders with label', () => {
    render(<Badge label="New" />)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('defaults to "Label" text', () => {
    render(<Badge />)
    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('shows remove button when removable', () => {
    render(<Badge removable label="Tag" />)
    expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument()
  })

  it('does not show remove button by default', () => {
    render(<Badge label="Tag" />)
    expect(screen.queryByRole('button', { name: /remove/i })).not.toBeInTheDocument()
  })

  it('calls onRemove when remove is clicked', () => {
    const onRemove = vi.fn()
    render(<Badge removable onRemove={onRemove} label="Tag" />)
    fireEvent.click(screen.getByRole('button', { name: /remove/i }))
    expect(onRemove).toHaveBeenCalledOnce()
  })
})

describe('SwitchField', () => {
  it('renders label and description', () => {
    render(<SwitchField label="Dark mode" description="Enable dark theme" />)
    expect(screen.getByText('Dark mode')).toBeInTheDocument()
    expect(screen.getByText('Enable dark theme')).toBeInTheDocument()
  })

  it('toggles on click', () => {
    const onChange = vi.fn()
    const { container } = render(<SwitchField label="Toggle" onChange={onChange} defaultSelected={false} />)
    const switchBtn = container.querySelector('button')!
    fireEvent.click(switchBtn)
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('does not toggle when disabled', () => {
    const onChange = vi.fn()
    const { container } = render(<SwitchField label="Toggle" onChange={onChange} disabled />)
    const switchBtn = container.querySelector('button')!
    fireEvent.click(switchBtn)
    expect(onChange).not.toHaveBeenCalled()
  })
})

describe('Toast', () => {
  it('renders message', () => {
    render(<Toast message="Saving..." />)
    expect(screen.getByText('Saving...')).toBeInTheDocument()
  })

  it('shows cancel button by default', () => {
    render(<Toast message="Working" />)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('hides cancel button when showCancel is false', () => {
    render(<Toast message="Working" showCancel={false} />)
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument()
  })

  it('calls onCancel when cancel is clicked', () => {
    const onCancel = vi.fn()
    render(<Toast message="Working" onCancel={onCancel} />)
    fireEvent.click(screen.getByText('Cancel'))
    expect(onCancel).toHaveBeenCalledOnce()
  })
})
