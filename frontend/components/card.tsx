import React, {FC} from 'react';
import Image from 'next/image'

export const Card: FC<{ size: string }> = ({size}) => {
    return (
        <>
            {size === "small" &&
                <div style={{
                    ...styles.card,
                    ...styles.small
                }}>
                    <Image
                        src="/ramen.png"
                        alt="Picture of the author"
                        width={230}
                        height={220}
                    />
                </div>
            }
            {size === "medium" &&
                <div style={{
                    ...styles.card,
                    ...styles.medium
                }}>
                    <Image
                        src="/pngtree-healthy-food-png-image_3776802.jpeg"
                        alt="Picture of the salad"
                        width={230}
                        height={220}
                    />
                </div>
            }
            {size === "large" &&
                <div style={{
                    ...styles.card,
                    ...styles.large
                }}>
                    <Image
                        src="/hamburger.jpeg"
                        alt="Picture of the hamburger"
                        width={230}
                        height={220}
                    />
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
        backgroundColor: 'green'
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
