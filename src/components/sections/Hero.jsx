import styles from './Hero.module.css';
import { meta } from '../../data/portfolio';
import { ExternalLink } from '../shared/ExternalLink';

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={"container " + styles.inner}>
        <p className={styles.label} aria-hidden="true">
          {meta.role}
        </p>
        <h1 className={styles.name}>{meta.name}</h1>
        <p className={styles.tagline}>{meta.tagline}</p>
        <div className={styles.buttons}>
          <a href="#experience" className={styles.btnPrimary}>
            View work
          </a>
          <ExternalLink href={meta.linkedin} className={styles.btnSecondary}>
            Connect
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}