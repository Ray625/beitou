import styles from './describe.module.scss';

const Describe = ({ describe, describe2, describe3, className }) => {
  return (
      <div className={`${styles.describe} ${className ? className : ''}`}>
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