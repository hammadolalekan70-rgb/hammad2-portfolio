import '@testing-library/jest-dom/vitest'

// jsdom lacks IntersectionObserver (used by motion whileInView + Reveal).
// Mock it so scroll-reveal components render immediately in tests.
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    this.callback([{ isIntersecting: true }]);
  }
  unobserve() {}
  disconnect() {}
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = MockIntersectionObserver;
}
