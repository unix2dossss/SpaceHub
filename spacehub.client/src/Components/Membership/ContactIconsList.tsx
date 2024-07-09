import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconBrandInstagram, IconBrandFacebook, IconAt, IconBrandDiscord, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'spacehub.uoa@gmail.com', icon: IconAt },
  { title: 'Discord', description: 'Spacehub Discord Server', icon: IconBrandDiscord },
  { title: 'Instagram', description: '@sha_uoa', icon: IconBrandInstagram },
  { title: 'Facebook', description: 'Space Hub Auckland', icon: IconBrandFacebook },
  { title: 'LinkedIn', description: 'Stay Connected', icon: IconBrandLinkedin },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}