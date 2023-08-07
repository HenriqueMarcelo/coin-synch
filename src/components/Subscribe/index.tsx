import './styles.scss'

export function Subscribe() {
  return (
    <section className="subscribe__full">
      <div className="subscribe__container container">
        <div>
          <h3 className="subscribe__small">Lorem ipsum</h3>
          <h2 className="subscribe__title">Lorem ipsum</h2>
          <p className="subscribe__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>
        <form action="" className="subscribe__form">
          <label htmlFor="" className="subscribe__label">
            Email
            <input placeholder="Email" className="subscribe__input" />
          </label>
          <button className="subscribe__button">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
