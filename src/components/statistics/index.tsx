import classes from './styles.module.scss'
import {FC} from "react";

type MetricType = {
    id: number | string;
    title: string;
    value: string;
}

interface IProps {
    data: MetricType[]
}

export const Statistics: FC<IProps> = ({data}) => {
    return (
        <ul className={classes.list}>
            {data?.map(item => (
                <li key={item.id} className={classes.list__item}>
                    <span className={classes.list__item__value}>
                        {item.value}
                    </span>
                    <h4 className={classes.list__item__title}>
                        {item.title}
                    </h4>
                </li>
            ))}
        </ul>
    )
}