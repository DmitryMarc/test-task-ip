import {FC} from 'react';
import classes from './styles.module.scss';
import {Button} from "@/components/ui";
import {Socials, Statistics} from "@/components";

const STATISTICS = [
    {
        id: 1,
        title: 'subscribers',
        value: '20k+'
    },
    {
        id: 2,
        title: 'successful cases',
        value: '19,5K'
    },
    {
        id: 3,
        title: 'rating',
        value: '4.8/5'
    }
]

const SOCIALS = [
    {
        id: 1,
        title: 'Google play',
        description: 'get it on',
        iconName: 'google-play'
    },
    {
        id: 2,
        title: 'App Store',
        description: 'Available on the',
        iconName: 'app-store'
    }
]


export const MainPage: FC = () => {
    return (
        <div className={classes.page}>
            <h1 className={classes.page__title}>Do you want to Learn more About cryptocurrencies
                <span className={classes.page__title__highlight}> quickly and easily ?</span>
            </h1>

            <div className={classes.page__info}>
                <span className={classes.page__info__description}>
                    Subscribe to our channel to learn more
                </span>

                <Statistics data={STATISTICS} />

                <Button customClass={classes.page__info__btn} >
                    Join Whatsapp
                </Button>
            </div>

            <Socials data={SOCIALS} />
        </div>
    )
}
