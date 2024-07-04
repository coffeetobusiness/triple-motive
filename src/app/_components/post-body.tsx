import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={markdownStyles["markdown"] + " text-lg text-gray-200 mb-10"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
