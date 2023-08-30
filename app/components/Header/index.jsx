import { Box, Typography } from "@mui/material"
import { styles } from "./style"

const Header = () => {
    return (
        <Box sx={styles.header}>
            <Box sx={styles.signContainer}>
                <Typography variant="h4" sx={styles.sign}>{'<Saif Ur Rehman />'}</Typography>
            </Box>
            <Box sx={styles.linksContainer}>
                <Typography>Home</Typography>
                <Typography>Education</Typography>
                <Typography>Experience</Typography>
                <Typography>Projects</Typography>
                <Typography>Contact Me</Typography>
            </Box>
        </Box>
    )
}

export default Header