'use client'

import React, { useState } from "react";
import Image from 'next/image'
import Prokratura from "../../public/mdm++++ 3.png"
import Prokratura2 from "../../public/Remove-bg.ai_1700556647313.png"
import Chart from "react-apexcharts";
import Diagramma from "../../components/Diagramma"


const getTopics = async () => {
    try {
        const res = await fetch('/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Mavzular yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('Mavzular yuklanishda xatolik: ', error);
        return { mavzula: [] };
    }
};
export default function page() {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                labels: {
                    style: {
                        colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
                    }
                }
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    });

    return (
        <>
            <div className='super_admin_page'>
                <div className="flex justify-center items-center gap-10 pt-5">
                    <Image src={Prokratura2} width={100} height={100} alt='image' />
                    <Image src={Prokratura} width={200} height={100} alt='image' />
                </div>
                {/* 
                <div className="app">
                    <div className="row">
                        <div className="flex justify-center">
                            <Chart options={chartData.options} series={chartData.series} type="bar" width="1300" />
                        </div> */}
                <Diagramma />
                {/* </div>
                </div> */}
            </div >
        </>
    )
}