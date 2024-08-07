import React from 'react';

const renderEmojis = (minutes) => {
  const numEmojis = Math.ceil(minutes / 5);
  return "🍕".repeat(numEmojis);
};

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  const emojiString = renderEmojis(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {emojiString} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
