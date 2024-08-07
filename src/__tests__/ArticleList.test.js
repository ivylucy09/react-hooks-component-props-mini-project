// src/__tests__/ArticleList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from '../components/ArticleList';

const posts = [
  {
    id: 1,
    title: "First Post",
    date: "2024-08-01",
    preview: "This is the first post.",
    minutes: 10,
  },
  {
    id: 2,
    title: "Second Post",
    date: "2024-08-02",
    preview: "This is the second post.",
    minutes: 5,
  },
];

test("renders an Article component for each post passed as a prop", () => {
  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main").children).toHaveLength(posts.length);
});
