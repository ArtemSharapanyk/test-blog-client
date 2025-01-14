import React, { JSX } from "react";
import { ArticleContentElement } from "../types/ArticleContent";

const renderText = (element: ArticleContentElement) => {
  let content = <>{element.text}</>;

  if (element.bold) {
    content = <strong>{content}</strong>;
  }
  if (element.italic) {
    content = <em>{content}</em>;
  }
  if (element.underline) {
    content = <u>{content}</u>;
  }
  if (element.strikethrough) {
    content = <del>{content}</del>;
  }

  return content;
};

const renderChildren = (children: ArticleContentElement[]): React.ReactNode => {
  return children.map((child, index) => (
    <React.Fragment key={index}>{renderArticleContent(child)}</React.Fragment>
  ));
};

export const renderArticleContent = (
  content: ArticleContentElement
): React.ReactNode => {
  if (content.code) {
    return (
      <pre className="bg-gray-400 rounded-md p-4 xs:overflow-x-scroll sm:overflow-x-auto">
        <code>{content.text}</code>
      </pre>
    );
  }

  switch (content.type) {
    case "link":
      return (
        <a href={content.url} target="_blank" rel="noopener noreferrer">
          {renderChildren(content.children || [])}
        </a>
      );

    case "heading":
      const HeadingTag = `h${content.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag style={{ marginBottom: "1rem" }}>
          {renderChildren(content.children || [])}
        </HeadingTag>
      );

    case "paragraph":
      return (
        <p style={{ marginBottom: "1rem" }}>
          {renderChildren(content.children || [])}
        </p>
      );

    case "list":
      if (content.format === "unordered") {
        return (
          <ul>
            {content.children?.map((listItem, index) => (
              <li className="list-disc" key={index}>
                {renderChildren(listItem.children || [])}
              </li>
            ))}
          </ul>
        );
      }

      if (content.format === "ordered") {
        return (
          <ol>
            {content.children?.map((listItem, index) => (
              <li className="list-decimal" key={index}>
                {renderChildren(listItem.children || [])}
              </li>
            ))}
          </ol>
        );
      }

    case "text":
      return renderText(content);

    default:
      return null;
  }
};
