import React, { FC } from 'react';

import { Card } from './card';

export const PinterestLayout: FC<{}> = ({}) => {
    return (
        <>
            <div style={styles.pin_container}>
                <Card size={"small"} />
                <Card size={"medium"} />
                <Card size={"large"} />
            </div>
        </>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '40vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        left: '50%',
        justifyContent: 'center',
        backgroundColor: 'white',
        centerAlign: 'true',
        opacity: '100%'
    }
}
