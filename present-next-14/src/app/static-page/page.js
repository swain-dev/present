import Head from 'next/head';

function StaticPage() {
  return (
    <div>
      <Head>
        <title>Heavy Static Page</title>
        <script src="/big-script.js" type="text/javascript"></script>
      </Head>
      <h1>This is a heavy static page</h1>
      <p>It includes a large JavaScript file for testing.</p>
    </div>
  );
}

export default StaticPage;