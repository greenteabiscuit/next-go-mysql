import React from 'react';

import { Card } from './card';

function PinterestLayout() {
    return (
        <div style={styles.pin_container}>
            <Card size={"small"} />
            <Card size={"medium"} />
            <Card size={"large"} />
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '600px',
        height: '600px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 100px)',
        gridAutoRows: '10px',
        position: 'absolute' as 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'black',
        zIndex: 1
    }
}

export default PinterestLayout;