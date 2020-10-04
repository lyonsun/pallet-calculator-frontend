import React from 'react'
import Chart from 'react-google-charts'

const PalletChart = (props) => {
    let barColor = 'green'

    if (props.amount > 20) {
        barColor = 'red'
    } else if (props.amount > 10) {
        barColor = 'orange'
    } else {
        barColor = 'green'
    }

    const boxCount = props.amount !== '' ? props.amount : 0

    return (
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
            [
                'No. of boxes on pallet (max 25)',
                'Amount',
            ],
            [
                'No. of boxes',
                boxCount,
            ]
            ]}
            options={{
            chart: {
                title: `Pallet: ${props.palletID}`,
            },
            legend: { position: 'none' },
            colors: [barColor],
            axes: {
                y: {
                    all: {
                        range: {
                            max: 25,
                            min: 0,
                        }
                    }
                }
            },
            }}
        />
    )
}

export default PalletChart