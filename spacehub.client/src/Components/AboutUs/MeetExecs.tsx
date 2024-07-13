import { Stack, Title } from '@mantine/core';
import UsersTable from './UsersTable';
import classes from './OurStory.module.css';

function MeetExecs() {
    return (
        <div className={ classes.ourStoryWrapper }>
            <div className={classes.wrapper}>
                <Stack>
                        <Title mb='md' fw={900} size="calc(2.25rem * var(--mantine-scale))" className={classes.title} order={2}>
                            Meet Our Executives
                        </Title>
                        <UsersTable></UsersTable>
                </Stack>
            </div>
        </div>
    )
};

export default MeetExecs;