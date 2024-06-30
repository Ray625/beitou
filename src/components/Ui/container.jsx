import styles from './container.module.scss';
import { forwardRef, useRef, useImperativeHandle } from 'react';

const Container = forwardRef(({ children, className }, ref) => {
  const sectionRef = useRef(null)

  useImperativeHandle(ref, () => ({
    // 只暴露需要的方法或屬性
    changeZindex: (num) => {
      if (sectionRef.current) {
        sectionRef.current.style.zIndex = num;
      }
    }
  }))

  return (
    <section className={`${styles.container} ${className ? className : ''}`} ref={sectionRef}>
      {children}
    </section>
  )
})

Container.displayName = 'Container'

const Wrapper = ({ children, className }) => {
  return (
    <div className={`${styles.wrapper} ${className? className : ''}`}>
      {children}
    </div>
  )
}

export { Container, Wrapper };