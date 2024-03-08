
const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

// public/GoogleAnalyticsScript.tsx
const GoogleAnalyticsScript = () => (
  <>
    <script async src={gtag}></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HC4FF8T6KY');
        `,
      }}
    />
  </>
);

export default GoogleAnalyticsScript;
