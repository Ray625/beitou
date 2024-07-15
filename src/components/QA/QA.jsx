import styles from './QA.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import { useLocation } from 'react-router-dom';

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
  }, {
  id: 6,
  qKey: 'qa.question6',
  aKey: 'qa.answer6'
  }, {
  id: 7,
  qKey: 'qa.question7',
  aKey: 'qa.answer7'
  }, {
  id: 8,
  qKey: 'qa.question8',
  aKey: 'qa.answer8'
  }, {
  id: 9,
  qKey: 'qa.question9',
  aKey: 'qa.answer9'
  }, {
  id: 10,
  qKey: 'qa.question10',
  aKey: 'qa.answer10',
  }]

const QACard = ({props}) => {
  const { qKey, aKey } = props
  const { t } = useTranslation()
  const {pathname} = useLocation()

  return (
      <div className={styles.qa}>
        <div className={`${styles.question} ${pathname === '/en' && styles.textAlignStart}`}>{t(qKey)}</div>
      <div className={`${styles.answer} ${pathname === '/en' && styles.textAlignStart}`}>
        {parse(t(aKey))}
      </div>
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
          img={t('qa.titleImg')}
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