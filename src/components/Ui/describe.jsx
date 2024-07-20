import styles from './describe.module.scss';
import { useLocation } from 'react-router-dom';

const Describe = ({ describe, describe2, describe3, className }) => {
  const { pathname } = useLocation()

  return (
      <div className={`${styles.describe} ${className ? className : styles.textAlignJustify} ${pathname === '/en' && styles.describeEn}`}>
        {describe}
        {describe2 &&
          <>
            <br /><br />
            {describe2}
          </>
        }
        {describe3 &&
          <>
            <br /><br />
            {describe3}
          </>
        }
      </div >
  )
}

export { Describe };