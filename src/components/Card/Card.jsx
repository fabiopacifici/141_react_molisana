import styles from './Card.module.css'
/* export default function Card({ image, title }) {

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className={styles.card}>
        <img src={image} alt={title} />
        <div>{title}</div>
      </div>
    </div>
  )

} */

export default function Card({ product }) {

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className={styles.card}>
        <img src={product.src} alt={product.title} />
        <div>{product.title}</div>
      </div>
    </div>
  )

}