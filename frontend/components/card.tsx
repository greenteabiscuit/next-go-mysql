import React, {FC} from 'react';

export const Card: FC<{ size: string }> = ({size}) => {
    return (
        <>
            {size === "small" &&
                <div style={{
                    ...styles.card,
                    ...styles.small
                }}>
                </div>
            }
            {size === "medium" &&
                <div style={{
                    ...styles.card,
                    ...styles.medium
                }}>
                </div>
            }
            {size === "large" &&
                <div style={{
                    ...styles.card,
                    ...styles.large
                }}>
                </div>
            }
        </>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}
