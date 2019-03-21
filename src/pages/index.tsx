import React from 'react';
import styles from './index.css';
import {Link} from 'umi'
import { formatMessage } from 'umi-plugin-locale';

export default function() {
  return (
    <div className={styles.normal}>
      <Link to={'/admin'}>go admin</Link>
    </div>
  );
}
