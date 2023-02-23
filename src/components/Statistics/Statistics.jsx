import PropTypes from 'prop-types';
import style from './statistics.module.scss';

const Statistics = (props) => {
    const {title, children} = props;

    return (
        <section className={style.statistics}>
            {title && (<h2 className={style.title}>{title}</h2>)}

            <ul className={style.stat}>
                {children}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
}

export default Statistics;