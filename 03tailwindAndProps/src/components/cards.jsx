// import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

// eslint-disable-next-line react/prop-types
function Cards({username}) {
    return (
        <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title={username} description="www.instagram.com" />
        </Card>
    )
}

export default Cards
