'use client'

import { Box, Typography } from "@mui/material"
import { styles } from "./style"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <Box sx={styles.heroSection}>
            <Box sx={styles.heroInnerWrapper}>
                <Box sx={styles.heroTextWrapper}>
                    <Typography variant="h5">Hi! Its </Typography>{' '}
                    <Typography variant="h4">Saif Ur Rehman</Typography>{' '}
                </Box>
                <Box sx={styles.heroTextWrapper}>
                    <Typography variant="h5">I am a </Typography>
                    <TypeAnimation
                        sequence={[
                            'Software Engineer',
                            1000,
                            'Frontend Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </Box>
            </Box>
            <Box sx={styles.heroInnerWrapper}>
                <Box sx={styles.heroImageWrapper}>
                    <Image sx={styles.heroImage} width={450} height={650} src={'/images/saif.jpeg'} />
                </Box>
            </Box>
        </Box>
    )
}

export default HeroSection