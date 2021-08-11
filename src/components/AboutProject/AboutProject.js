import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about' id='about'>
      <div className='about__box'>
        <div className='about__header'>
          <h2 className='about__heading'>О проекте</h2>
        </div>
        <div className='about__text-box'>
          <div className='about__text'>
            <h3 className='about__title'>Дипломный проект включал 5 этапов</h3>
            <p className='about__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about__text'>
            <h3 className='about__title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about__progress'>
          <div className='about__left-block'>
            <div className="about__green-block">
              <p className='about__sign'>1 неделя</p>
            </div>
              <p className='about__txt'>Back-end</p>
          </div>
          <div className='about__right-block'>
            <div className="about__grey-block">
              <p className='about__sign'>4 недели</p>
            </div>
              <p className='about__txt'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;