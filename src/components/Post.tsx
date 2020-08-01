import { Button, Link } from '@chakra-ui/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface IPost {
  alt: string;
  date: string;
  image: any;
  title: string;
  previewContent: any;
}

function Post({ alt, date, image, title, previewContent }: IPost): JSX.Element {
  const renderers = {
    link: Link,
  };
  return (
    <div className="container">
      <a href="/">
        <img alt={alt} src={image.fields.file.url} />
      </a>
      <div className="text">
        <h2>{title}</h2>
        <h4>{date}</h4>
        <ReactMarkdown source={previewContent} renderers={renderers} />
      </div>
      <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}

export default Post;
