import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description?: string;
  keywords?: string;
}

const Head: React.FC<HeadProps> = ({ title, description, keywords }) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Add any additional meta tags or links here */}
      {/* Example: <link rel="icon" href="/favicon.ico" /> */}
    </NextHead>
  );
};

export default Head;