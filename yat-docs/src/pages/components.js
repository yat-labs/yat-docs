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
	  <section>
    <div className="componentContainer">
    <h1>Alerts</h1>
        <div class="alert alert--primary" role="alert">
          <button aria-label="Close" class="close" type="button">
            <span aria-hidden="true">×</span>
          </button>
          This is a <strong>primary</strong> alert. You should probably pay attention to
          it.
        </div>
        <div class="alert alert--secondary" role="alert">
  <button aria-label="Close" class="close" type="button">
    <span aria-hidden="true">×</span>
  </button>
  This is a <strong>secondary</strong> alert. It&#x27;s not too important, you
  may ignore it.
</div>
<div class="alert alert--success" role="alert">
  <button aria-label="Close" class="close" type="button">
    <span aria-hidden="true">×</span>
  </button>
  This is a <strong>success</strong> alert. Something good must have happened!
</div>
<div class="alert alert--info" role="alert">
  <button aria-label="Close" class="close" type="button">
    <span aria-hidden="true">×</span>
  </button>
  This is an <strong>info</strong> alert. For your information only.
</div>
<div class="alert alert--warning" role="alert">
  <button aria-label="Close" class="close" type="button">
    <span aria-hidden="true">×</span>
  </button>
  This is a <strong>warning</strong> alert. Be warned, you should pay attention!
</div>
<div class="alert alert--danger" role="alert">
  <button aria-label="Close" class="close" type="button">
    <span aria-hidden="true">×</span>
  </button>
  This is a <strong>danger</strong> alert. Something has gone wrong, please
  investigate!
</div>
<h1>Buttons</h1>
<div>
  <button class="button button--primary">Primary</button>
  <button class="button button--secondary">Secondary</button>
  <button class="button button--success">Success</button>
  <button class="button button--info">Info</button>
  <button class="button button--warning">Warning</button>
  <button class="button button--danger">Danger</button>
  <button class="button button--link">Link</button>
</div>
<div>
  <button class="button button--outline button--primary">Primary</button>
  <button class="button button--outline button--secondary">Secondary</button>
  <button class="button button--outline button--success">Success</button>
  <button class="button button--outline button--info">Info</button>
  <button class="button button--outline button--warning">Warning</button>
  <button class="button button--outline button--danger">Danger</button>
</div>
<div>
  <button class="button button--outline button--active button--primary">
    Primary
  </button>
  <button class="button button--outline button--active button--secondary">
    Secondary
  </button>
  <button class="button button--outline button--active button--success">
    Success
  </button>
  <button class="button button--outline button--active button--info">
    Info
  </button>
  <button class="button button--outline button--active button--warning">
    Warning
  </button>
  <button class="button button--outline button--active button--danger">
    Danger
  </button>
  <button class="button button--outline button--active button--link">
    Link
  </button>
</div>
<div>
  <button class="button disabled button--primary">Primary</button>
  <button class="button disabled button--secondary">Secondary</button>
  <button class="button disabled button--success">Success</button>
  <button class="button disabled button--info">Info</button>
  <button class="button disabled button--warning">Warning</button>
  <button class="button disabled button--danger">Danger</button>
  <button class="button disabled button--link">Link</button>
</div>
<div>
  <a class="button button--primary" href="#url">
    Primary
  </a>
  <a class="button button--secondary" href="#url">
    Secondary
  </a>
  <a class="button button--success" href="#url">
    Success
  </a>
  <a class="button button--info" href="#url">
    Info
  </a>
  <a class="button button--warning" href="#url">
    Warning
  </a>
  <a class="button button--danger" href="#url">
    Danger
  </a>
  <a class="button button--link" href="#url">
    Link
  </a>
</div>
<div>
  <button class="button button--sm button--primary">Small Button</button>
  <button class="button button--primary">Default Button</button>
  <button class="button button--lg button--primary">Large Button</button>
</div>
<button class="button button--block button--primary">Block Button</button>

      </div>
		</section>
      </main>


    </Layout>
  );
}

export default Home;
