import React from 'react';
import Head from 'next/head';
import Root from './Root';
import Footer from './Footer';

const TemplatePage = ({ page: data }) => (
  <Root>
    <Head>
      <title>Koka Laboratorija</title>
    </Head>
    <div className="py-5 my-5 text-center">
      <h4 className="mt-4">
        {/* {data.message} */}
        <div className="d-flex vh-100 justify-content-center mt-4">
          <div
            className="spinner-border text-warning"
            style={{ width: '5rem', height: '5rem', color: 'brown' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </h4>
    </div>
    <Footer />
  </Root>
);

export default TemplatePage;
