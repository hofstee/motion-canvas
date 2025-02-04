import {useShortcuts} from '../../contexts/shortcuts';
import {Versions} from './Versions';
import styles from './Footer.module.scss';

export function Footer() {
  const {shortcuts, currentModule} = useShortcuts();
  return (
    <div className={styles.root}>
      <div className={styles.shortcuts}>
        {shortcuts[currentModule].map(({key, action}) => (
          <div className={styles.shortcut}>
            <span className={styles.key}>{key}</span>
            <span className={styles.action}>{action}</span>
          </div>
        ))}
      </div>
      <Versions />
    </div>
  );
}
