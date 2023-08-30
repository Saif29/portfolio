export const styles = {
    heroSection: {
        paddingTop: '90px',
        height: '200vh',
        display: 'flex',
        '@media(max-width: 600px)': {
            flexDirection: 'column-reverse',
        }
    },
    heroInnerWrapper: {
        flex: '1',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
    },
    heroTextWrapper: {
        display: 'flex',
        width: '60%',
        alignItems: 'flex-end',
        gap: '7px',
        '.index-module_type__E-SaG': {
            fontWeight : '600',
        }
    },
    heroText: {
    },
    heroImageWrapper: {
        border: '1px solid black',
        width: '400px',
        height: '400px',
        overflow: 'hidden',
        borderRadius: '100%',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',

    },
    heroImage: {
    },
}