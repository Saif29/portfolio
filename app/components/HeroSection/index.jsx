import { Box, Typography } from "@mui/material"
import { styles } from "./style"
import Image from "next/image"

const HeroSection = () => {
    return (
        <Box sx={styles.heroSection}>
            <Box sx={styles.heroInnerWrapper}>
                <Typography>Hi! Its Saif Ur Rehman</Typography>
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