import classes from './styles.module.scss'
import {FC} from "react";
import {Button, Icon} from "@/components/ui";

type ButtonsType = {
    id: number | string;
    title: string;
    description: string;
    iconName: string;
}

interface IProps {
    data: ButtonsType[]
}

export const Socials: FC<IProps> = ({data}) => {
    return (
        <div className={classes.list}>
            {data?.map(item => (
                <Button key={item.id} customClass={classes.list__item}>
                    <Icon iconName={item.iconName} customClass={classes.list__item__icon} />
                    <div className={classes.list__item__info}>
                        <span className={classes.list__itemDescription}>{item.description}</span>
                        <h4 className={classes.list__itemTitle}>{item.title}</h4>
                    </div>
                </Button>
            ))}
        </div>
    )
}