import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`👋🏼 from ${siteConfig.title}`}
      description="Yat API and SDK documentation and examples">

      <main>
  	  <section className="yatBg">
      <div className="yatHome">
    		<div className="yatContent">
    			<h1 className="bigHeading">Yat API <br />Reference</h1>
    			<p className="homeText">Helping you build awesome stuff with <a href="https://start.y.at/" target="_blank" className="yatHomeLink">Y.at</a><br/>
    			Integrate your app or website with Yat in minutes	with our easy to follow user guides</p>
    		  <div className="btnCenter">
    				<Link
    				  className={clsx(
    					'button button--primary button--lg yatBtn',
    					styles.getStarted,
    				  )}
    				  to={useBaseUrl('/docs/api-ref')}>
    				  Get Started
    				</Link>
          </div>
    		</div>
      </div>
  		</section>
      </main>
    </Layout>
  );
}

export default Home;
