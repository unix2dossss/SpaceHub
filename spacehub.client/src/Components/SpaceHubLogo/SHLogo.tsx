import { Image } from '@mantine/core';
import shaLogoSVG from '../../assets/SHA_Text_Logo.png';
import { Link } from 'react-router-dom';


function SHLogo() {
    return (
            <Link to="/">
                <Image
                    src={shaLogoSVG}
                    height={40}
                />
            </Link>  
    );
}

export default SHLogo;