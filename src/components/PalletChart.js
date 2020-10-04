import React from 'react'
import Chart from 'react-google-charts'

const PalletChart = () => {
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
                23,
            ]
            ]}
            options={{
            chart: {
                title: 'Pallet: INV-2592020_124756',
            },
            legend: { position: 'none' },
            colors: ['red'],
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