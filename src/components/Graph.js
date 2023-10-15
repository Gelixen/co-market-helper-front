import React, {useRef} from 'react';
import {AgChartsReact} from 'ag-charts-react';

const ChartExample = (props) => {

    const chartRef = useRef(null);

    const ValueFormatter = function (params) {
        // if the data contains values that are not valid numbers,
        // the formatter's `value` will be `undefined`

        var valueMils = Math.floor(params.value / 1_000_000)
        var valueThousands = (Math.floor(params.value % 1_000_000 / 1_000) + "");

        if (valueMils >= 1) {
            var thousandsPart = valueThousands > 100 ? "." + Math.floor(valueThousands / 100) : "";
            console.log(valueThousands + "   " + thousandsPart)
            return valueMils + thousandsPart + "kk";
        } else {
            return valueThousands + "k";
        }
    };

    const options = {
        autoSize: true,
        title: {
            text: props.item,
        },
        subtitle: {
            text: props.subtitle,
        },
        data: props.data?.[props.item],
        series: [
            {
                type: "column",
                xKey: "date",
                yKey: "volume",
                label: {
                    formatter: function (params) {
                        // if the data contains values that are not valid numbers,
                        // the formatter's `value` will be `undefined`
                        return params.value === undefined ? '' : params.value.toFixed(0);
                    }
                }
            },
            {
                xKey: 'date',
                yKey: 'minPrice',
                label: {formatter: ValueFormatter}
            },
            {
                xKey: 'date',
                yKey: 'averagePrice',
                label: {formatter: ValueFormatter}
            },
            {
                xKey: 'date',
                yKey: 'maxPrice',
                label: {formatter: ValueFormatter}
            }
        ],
        axes: [
            {
                type: 'category',
                position: 'bottom',
                gridStyle: [
                    {
                        stroke: undefined,
                    },
                ],
            },
            {
                // primary y axis
                type: 'number',
                position: 'left',
                keys: ['minPrice', 'maxPrice', 'averagePrice'],
//        title: {
//          text: 'Adults Who Eat 5 A Day (%)',
//        },
            },
            {
                // secondary y axis
                type: 'number',
                position: 'right',
                keys: ['volume'],
//        title: {
//          text: 'Portions Consumed (Per Day)',
//        },
            },
        ],
    }


//useEffect(()=>{
//  setOptions({
//    ...options,
////                   autoSize: true,
//                   title: {
//                     text: props.item,
//                   },
//           //        subtitle: {
//           //          text: 'per person per week in Krakozhia',
//           //        },
//                   data: props.data?.[props.item],
//               })
//  },[props])


    return (<AgChartsReact ref={chartRef} options={options}/>);

};

export default ChartExample;