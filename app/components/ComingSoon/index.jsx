import { Box, Typography } from "@mui/material"
import { styles } from "./style"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ComingSoon = () => {
    return (
        <Box sx={styles.comingSoonContainer}>
            <AccessTimeIcon sx={styles.clockIcon} />
            <Typography sx={styles.comingSoonText} variant="h6">Coming Soon!</Typography>
        </Box>
    )
}

export default ComingSoon