import React, { useState, useEffect } from 'react';
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
import classes from './ExecTable.module.css';
import { Executive } from './types'; // Adjust the path as necessary

const jobColors = {
    engineer: 'blue',
    manager: 'cyan',
    designer: 'pink',
};

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

interface ExecTableProps {
    onEdit: (exec: Executive) => void;
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

function filterData(data: Executive[], search: string) {
    const query = search.toLowerCase().trim();
    if (query === '') {
        return data;
    }
    return data.filter((item) =>
        ['execName', 'execRole', 'execLinkedInLink', 'execFavObject'].some((key) =>
            (item[key as keyof Executive] as string).toLowerCase().includes(query)
        )
    );
}


function sortData(
    data: Executive[],
    payload: { sortBy: keyof Executive | null; reversed: boolean; search: string }
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

function ExecTable({ onEdit }: ExecTableProps) {
    const [search, setSearch] = useState('');
    const [executives, setExecutives] = useState<Executive[]>([]);
    const [sortedData, setSortedData] = useState<Executive[]>([]);
    const [sortBy, setSortBy] = useState<keyof Executive | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    useEffect(() => {
        const fetchExecutives = async () => {
            try {
                const response = await fetch('/api/Executive');
                const data: Executive[] = await response.json();
                setExecutives(data);
                setSortedData(data);
            } catch (error) {
                console.error('Error fetching executives:', error);
            }
        };

        fetchExecutives();
    }, []);

    const setSorting = (field: keyof Executive) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(executives, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(executives, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const deleteExecutive = async (id: number) => {
        try {
            const response = await fetch(`/api/Executive/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const updatedExecutives = executives.filter((exec) => exec.execId !== id);
            setExecutives(updatedExecutives);
            setSortedData(sortData(updatedExecutives, { sortBy, reversed: reverseSortDirection, search }));
        } catch (error) {
            console.error('There was a problem with the delete operation:', error);
        }
    };

    const rows = sortedData.map((row) => (
        <Table.Tr key={row.execId}>
            <Table.Td>{row.execName}</Table.Td>
            <Table.Td>
                <Badge color={jobColors[row.execRole.toLowerCase() as keyof typeof jobColors] || 'gray'}>
                    {row.execRole}
                </Badge>
            </Table.Td>
            <Table.Td>
                <a href={row.execLinkedInLink} target="_blank" rel="noopener noreferrer">
                    {row.execLinkedInLink}
                </a>
            </Table.Td>
            <Table.Td>{row.execFavObject}</Table.Td>
            <Table.Td>
                <Group spacing={0} position="right">
                    <ActionIcon onClick={() => onEdit(row)}>
                        <IconPencil size="1rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon color="red" onClick={() => deleteExecutive(row.execId)}>
                        <IconTrash size="1rem" stroke={1.5} />
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
                icon={<IconSearch size="0.9rem" stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" sx={{ tableLayout: 'fixed' }}>
                <Table.Thead>
                    <Table.Tr>
                        <Th sorted={sortBy === 'execName'} reversed={reverseSortDirection} onSort={() => setSorting('execName')}>
                            Name
                        </Th>
                        <Th sorted={sortBy === 'execRole'} reversed={reverseSortDirection} onSort={() => setSorting('execRole')}>
                            Role
                        </Th>
                        <Th sorted={sortBy === 'execLinkedInLink'} reversed={reverseSortDirection} onSort={() => setSorting('execLinkedInLink')}>
                            LinkedIn
                        </Th>
                        <Th sorted={sortBy === 'execFavObject'} reversed={reverseSortDirection} onSort={() => setSorting('execFavObject')}>
                            Favourite Celestial Object
                        </Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {rows.length > 0 ? rows : (
                        <Table.Tr>
                            <Table.Td colSpan={5}>
                                <Text weight={500} align="center">
                                    No executives found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}

export default ExecTable;
