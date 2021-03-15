import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/mateusfg7.png' alt='eu' />
      <div>
        <strong>Mateus Felipe</strong>
        <p>
          <img src='icons/level.svg' alt=' Level' />
          Level 1
        </p>
      </div>
    </div>
  );
}
