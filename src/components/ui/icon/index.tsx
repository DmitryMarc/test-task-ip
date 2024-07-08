import classes from './styles.module.scss';
import {FC} from "react";
import {sprite} from "@/assets/icons";

interface IProps {
    customClass?: string;
    iconName?: 'google-play' | 'app-store' | string;
}

export const Icon: FC<IProps> = ({customClass, iconName}) => {
    return (
        <div className={customClass}>
            <svg className={classes.icon}>
                <use href={`${sprite}#${iconName}`}/>
            </svg>
        </div>
    )
}