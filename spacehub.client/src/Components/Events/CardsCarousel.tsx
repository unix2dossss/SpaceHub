//import '@mantine/carousel/styles.css';
//import { Carousel } from '@mantine/carousel';
//import { useMediaQuery } from '@mantine/hooks';
//import { Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
//import classes from './CardsCarousel.module.css';

//interface CardProps {
//    image: string;
//    title: string;
//    category: string;
//}

//function Card({ image, title, category }: CardProps) {
//    return (
//        <Paper
//            shadow="md"
//            p="xl"
//            radius="md"
//            style={{ backgroundImage: `url(${image})` }}
//            className={classes.card}
//        >
//            <div>
//                <Text className={classes.category} size="xs">
//                    {category}
//                </Text>
//                <Title order={3} className={classes.title}>
//                    {title}
//                </Title>
//            </div>
//            <Button variant="white" color="dark">
//                Read article
//            </Button>
//        </Paper>
//    );
//}

//const data = [
//    {
//        image:
//            'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//        title: 'Best forests to visit in North America',
//        category: 'nature',
//    },
//    {
//        image:
//            'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//        title: 'Hawaii beaches review: better than you think',
//        category: 'beach',
//    },
//    {
//        image:
//            'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//        title: 'Mountains at night: 12 best locations to enjoy the view',
//        category: 'nature',
//    },
//    {
//        image:
//            'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//        title: 'Aurora in Norway: when to visit for best experience',
//        category: 'nature',
//    },
//    {
//        image:
//            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//        title: 'Best places to visit this winter',
//        category: 'tourism',
//    },
//    {
//        image:
//            'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
//        title: 'Active volcanos reviews: travel at your own risk',
//        category: 'nature',
//    },
//];

//function CardsCarousel() {
//    const theme = useMantineTheme();
//    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
//    const slides = data.map((item) => (
//        <Carousel.Slide key={item.title}>
//            <Card {...item} />
//        </Carousel.Slide>
//    ));

//    return (
//        <Carousel
//            slideSize={{ base: '75%', sm: '33%', md: '25%' }}
//            slideGap={{ base: 'md', sm: 'lg' }}
//            align="start"
//            slidesToScroll={mobile ? 1 : 2}
//            mb="lg"
//        >
//            {slides}
//        </Carousel>
//    );
//}

//export default CardsCarousel;



import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, Anchor } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import { useEffect, useState } from 'react';

interface CardProps {
    eventName: string;
    eventCatergory: string;
    eventDescription: string;
    eventLink: string;
    eventCardBG: string;
    eventTime: string;
    eventPast: boolean
}

function Card({ eventName, eventCatergory, eventDescription, eventLink, eventCardBG, eventTime, eventPast }: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${eventLink})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {eventCatergory}
                </Text>
                <Title order={3} className={classes.title}>
                    {eventName}
                </Title>
                <Text className={classes.category} size="sm">
                    {eventDescription}
                </Text>
            </div>
            <Button variant="white" color="dark">
                <Anchor href={eventLink}>Register</Anchor>
            </Button>
        </Paper>
    );
}

function CardsCarousel() {
    const [events, setEvents] = useState([]);
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    useEffect(() => {
        const fetchExecutives = async () => {
            try {
                const response = await fetch('/api/Event');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching executives:', error);
            }
        };

        fetchExecutives();
    }, []);

    const slides = events.map((item) => (
        <Carousel.Slide key={item.eventName}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <>
            {slides.length === 0 ? (
                <></>
            ) : (
                <Carousel
                    slideSize={{ base: '75%', sm: '33%', md: '25%' }}
                    slideGap={{ base: 'md', sm: 'lg' }}
                    align="start"
                    slidesToScroll={mobile ? 1 : 2}
                    mb="lg"
                >
                    {slides}
                </Carousel>
            )}
        </>
    );

}

export default CardsCarousel;