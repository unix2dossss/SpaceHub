import { Title } from '@mantine/core';
import classes from './MeetExecs.module.css';
import UsersTable from './UsersTable';


function MeetExecs() {
    return (
        <div>
            <div className={classes.titleContainer}>
                <Title mb='md' fw={900} size="calc(2.25rem * var(--mantine-scale))" className={classes.title} order={2}>
                    Meet Our Executives
                </Title>
            </div>
            <div className={classes.tableContainer}>
                <UsersTable></UsersTable>
            </div>
        </div>

    )
};

export default MeetExecs;