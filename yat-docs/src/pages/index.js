import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'User guides',
    imageUrl: 'img/feature_img1.png',
    description: (
      <>
        Integrate your app or website with Yat in minutes with our easy-to-follow <a href="/docs/overview">user guides</a>.
      </>
    ),
  },
  {
    title: 'API reference documentation',
    imageUrl: 'img/feature_img2.png',
    description: (
      <>
        Dive straight into the <a href="/docs/api-ref/">API reference documentation</a>.
      </>
    ),
  },
  {
    title: 'SDK documentation',
    imageUrl: 'img/feature_img3.png',
    description: (
      <>
        We have SDK libraries and <a href="/docs/sdks/nodejs/sdk_nodejs_index">documentation</a> for several languages.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`👋🏼 from ${siteConfig.title}`}
      description="Yat API and SDK documentation and examples">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/docs/api-ref')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
