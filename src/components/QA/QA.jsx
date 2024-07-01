import styles from './QA.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';
import { useTranslation } from 'react-i18next';

const qaList = [{
  id: 1,
  qKey: 'qa.question1',
  aKey: 'qa.answer1'
}, {
  id: 2,
  qKey: 'qa.question2',
  aKey: 'qa.answer2'
  }, {
  id: 3,
  qKey: 'qa.question3',
  aKey: 'qa.answer3'
  }, {
  id: 4,
  qKey: 'qa.question4',
  aKey: 'qa.answer4'
  }, {
  id: 5,
  qKey: 'qa.question5',
  aKey: 'qa.answer5'
  }]

const QACard = ({props}) => {
  const { qKey, aKey } = props
  const { t } = useTranslation()

  return (
      <div className={styles.qa}>
        <div className={styles.question}>{t(qKey)}</div>
        <div className={styles.answer}>{t(aKey)}</div>
      </div>
    )
  }

// 常見問題資料要等業主整理，先排了版型
const QA = () => {
  const { t } = useTranslation()

  return (
    <Container className={styles.container}>
      <div className={styles.bg}></div>
      <Wrapper>
        <ImgTitle
          title={t('qa.title')}
          img='/title/title_7.png'
          id='qa'
          />
        <div className={styles.qaWrapper}>
          <div className={styles.qaGroup}>
            {qaList.map(qa => {
              return (
                <QACard props={qa} key={qa.id} />
              )
            })}
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default QA;