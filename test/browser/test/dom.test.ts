import { expect, test } from 'vitest'
import { page } from '@vitest/browser/context'
import { createNode } from '#src/createNode'
import '../src/button.css'

test('renders div', async () => {
  await page.viewport(1500, 600)
  document.body.style.background = '#f3f3f3'
  const wrapper = document.createElement('div')
  wrapper.className = 'wrapper'
  document.body.appendChild(wrapper)
  const div = createNode()
  wrapper.appendChild(div)
  expect(div.textContent).toBe('Hello World!')
})
