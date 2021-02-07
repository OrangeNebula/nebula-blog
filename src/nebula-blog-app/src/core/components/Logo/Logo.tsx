import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.Logo}>
      <div className={styles.Background} style={{ background: `url(${process.env.PUBLIC_URL}/img/nebula.jpg)` }} />
      <div className={styles.Clouds} style={{ background: `url(${process.env.PUBLIC_URL}/img/clouds.png)` }} />
    </div>
  )
}

export default Logo;