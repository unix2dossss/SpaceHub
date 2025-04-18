import { useState, useEffect } from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
    Badge,
    ActionIcon,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch, IconPencil, IconTrash } from '@tabler/icons-react';
import classes from './MembersTable.module.css'; // Ensure you have the CSS file

interface Student {
    studentID: string;
    firstName: string;
    lastName: string;
    email: string;
    pronouns: string;
    upi: string;
    study: string[];
    major: string;
    semesterPlan: string;
    payOffline: boolean;
    paid: boolean;
    studySerialized: string;
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: Student[], search: string) {
    const query = search.toLowerCase().trim();
    if (query === '') {
        return data;
    }
    return data.filter((item) =>
        ['firstName', 'lastName', 'email', 'pronouns', 'upi', 'major', 'semesterPlan'].some((key) =>
            item[key].toLowerCase().includes(query)
        )
    );
}

function sortData(
    data: Student[],
    payload: { sortBy: keyof Student | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    const filteredData = filterData(data, payload.search);

    if (!sortBy) {
        return filteredData;
    }

    return filteredData.sort((a, b) => {
        if (payload.reversed) {
            return b[sortBy].localeCompare(a[sortBy]);
        }
        return a[sortBy].localeCompare(b[sortBy]);
    });
}

function MembersTable() {
    const [search, setSearch] = useState('');
    const [students, setStudents] = useState<Student[]>([]);
    const [sortedData, setSortedData] = useState<Student[]>([]);
    const [sortBy, setSortBy] = useState<keyof Student | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('/api/Member');
                const data: Student[] = await response.json();
                setStudents(data);
                setSortedData(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    const setSorting = (field: keyof Student) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(students, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(students, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const deleteStudent = async (id: string) => {
        console.log(id);
        try {
            const response = await fetch(`/api/Member/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Update students state to reflect deletion
            const updatedStudents = students.filter((student) => student.studentID !== id);
            setStudents(updatedStudents);
            setSortedData(sortData(updatedStudents, { sortBy, reversed: reverseSortDirection, search }));

            console.log('Student deleted successfully');
        } catch (error) {
            console.error('There was a problem with the delete operation:', error);
        }
    };

    const rows = sortedData.map((item) => (
        <Table.Tr key={item.studentID}>
            <Table.Td>
                <Group gap="sm">
                    <Text fz="sm" fw={500}>
                        {item.firstName} {item.lastName}
                    </Text>
                </Group>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.email}</Text>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.pronouns}</Text>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.upi}</Text>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.major}</Text>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.semesterPlan}</Text>
            </Table.Td>
            <Table.Td>
                <Badge color={item.payOffline ? 'yellow' : 'green'} variant="light">
                    {item.payOffline ? 'Offline' : 'Online'}
                </Badge>
            </Table.Td>
            <Table.Td>
                <Badge color={item.paid ? 'green' : 'red'} variant="light">
                    {item.paid ? 'Paid' : 'Unpaid'}
                </Badge>
            </Table.Td>
            <Table.Td>
                <Group gap={0} justify="flex-end">
                    <ActionIcon variant="subtle" color="gray">
                        <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        variant="subtle"
                        color="red"
                        onClick={() => deleteStudent(item.studentID)} // Pass the ID to delete function
                    >
                        <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed" style={{ width: 'auto' }}>
                <Table.Tbody>
                    <Table.Tr>
                        <Th
                            sorted={sortBy === 'firstName'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('firstName')}
                        >
                            Name
                        </Th>
                        <Th
                            sorted={sortBy === 'email'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('email')}
                        >
                            Email
                        </Th>
                        <Th
                            sorted={sortBy === 'pronouns'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('pronouns')}
                        >
                            Pronouns
                        </Th>
                        <Th
                            sorted={sortBy === 'upi'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('upi')}
                        >
                            UPI
                        </Th>
                        <Th
                            sorted={sortBy === 'major'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('major')}
                        >
                            Major
                        </Th>
                        <Th
                            sorted={sortBy === 'semesterPlan'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('semesterPlan')}
                        >
                            Semester Plan
                        </Th>
                        <Th
                            sorted={sortBy === 'payOffline'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('payOffline')}
                        >
                            Payment Method
                        </Th>
                        <Th
                            sorted={sortBy === 'paid'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('paid')}
                        >
                            Payment Status
                        </Th>
                    </Table.Tr>
                </Table.Tbody>
                <Table.Tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={9}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}

export default MembersTable;