import React from 'react'
import Chart from 'react-google-charts'

const PalletChart = (props) => {
    const boxCount = props.boxesInChart

    let barColor = 'green'

    if (boxCount > 20) {
        barColor = 'red'
    } else if (boxCount > 15) {
        barColor = 'orange'
    } else {
        barColor = 'green'
    }

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