import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import Heading from '.'

test('nested boundaries render increasing heading levels', () => {
  render(
    <Heading.Boundary>
      <Heading.H>Heading 1</Heading.H>
      <Heading.Boundary>
        <Heading.H>Heading 2a</Heading.H>
      </Heading.Boundary>
      <Heading.Boundary>
        <Heading.H>Heading 2b</Heading.H>
        <Heading.Boundary>
          <Heading.H>Heading 3</Heading.H>
        </Heading.Boundary>
      </Heading.Boundary>
    </Heading.Boundary>
  )

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading 1')
  expect(screen.getAllByRole('heading', { level: 2 }).map(h => h.textContent))
    .toEqual(['Heading 2a', 'Heading 2b'])
  expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Heading 3')
})

test('levelOverride hard-sets the section level', () => {
  render(
    <Heading.Boundary levelOverride={4}>
      <Heading.H>Override</Heading.H>
      <Heading.Boundary>
        <Heading.H>Child</Heading.H>
      </Heading.Boundary>
    </Heading.Boundary>
  )

  expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Override')
  expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Child')
})

test('levels deeper than 6 are clamped to h6', () => {
  render(
    <Heading.Boundary levelOverride={6}>
      <Heading.Boundary>
        <Heading.H>Too deep</Heading.H>
      </Heading.Boundary>
    </Heading.Boundary>
  )

  expect(screen.getByText('Too deep').tagName).toBe('H6')
})

test('forwards className, other props and ref', () => {
  const ref = createRef()
  render(
    <Heading.Boundary>
      <Heading.H ref={ref} className="title" id="main">Title</Heading.H>
    </Heading.Boundary>
  )

  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toHaveClass('title')
  expect(heading).toHaveAttribute('id', 'main')
  expect(ref.current).toBe(heading)
})
