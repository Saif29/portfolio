import { Box, Typography } from "@mui/material"
import { styles } from "./style"

const Header = () => {
    return (
        <Box sx={styles.header}>
            <Typography variant="h4" sx={styles.sign}>{'<Saif Ur Rehman />'}</Typography>
        </Box>
    )
}

export default Header