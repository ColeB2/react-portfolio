import React from 'react';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="portfolio--header">
      <h1 className="name">Cole B</h1>
      <h2 className="link">
        <a href="https://coleb.pythonanywhere.com/portfolio">Simple</a>
      </h2>
    </header>
  );
}
