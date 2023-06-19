import React, { FC, HtmlHTMLAttributes, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import './chart.css';
import axios from "axios";
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"
interface data {
    title: string,
    price: string,

}
const Chart: FC = () => {
    ChartJS.register(
        BarElement, CategoryScale, LinearScale, Tooltip, Legend
    )

    const [stateRozetka, setRozetka] = useState<data[] | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/getData");
                setRozetka(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const [stateFoxtrot, setFoxtrot] = useState<data[] | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/getDataFoxtrot");
                setFoxtrot(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    const result = () => {
        let summRozetka = 0;

        if (stateRozetka) {
            const price: string[] = stateRozetka.map((object) => object.price);

            for (let i = 0; i < price.length; i++) {
                const without = price[i].replace("₴", "");
                const priceValue = parseFloat(without);
                summRozetka += priceValue / 10;
            }

            return summRozetka;
        }
    };

    const resultFoxtrot = () => {
        let summFoxtrot = 0;

        if (stateFoxtrot) {
            const price: string[] = stateFoxtrot.map((object) => object.price);

            for (let i = 0; i < price.length; i++) {
                const without = price[i].replace("₴", "");
                const priceValue = parseFloat(without);
                summFoxtrot += priceValue / 9;
            }

            return summFoxtrot;
        }
    }; const resultComfy = () => {
        let summComfy = 32.6;
        return summComfy
    };
    const resultProm = () => {
        let summProm = 31.6;


        return summProm;

    };
    const resultEldorado = () => {
        let summEldorado = 29.2;


        return summEldorado;

    };
    useEffect(() => {
        const newData = {
            labels: ["Rozetka", "Eldorado", "Prom", "Foxtrot", "Comfy"],
            datasets: [
                {
                    label: "Asus tuf gaming f15",
                    data: [result(), resultEldorado(), resultProm(), resultFoxtrot(), resultComfy()],
                    backgroundColor: ["#47B22F", "#FF0000", "#692F91", "#FF671F", "#C5C5C5"],
                    borderColor: "black",
                    borderWidth: 1,
                    barThickness: 80,
                },
            ],
        };

        setChartData(newData);
    }, [stateRozetka, stateFoxtrot]);

    const [chartData, setChartData] = useState<any>({
        labels: ["Rozetka", "Eldorado", "Prom", "Foxtrot", "Comfi"],
        datasets: [
            {
                label: "Comfi",
                data: [result(), 3, 4, 2, 6],
                backgroundColor: ["#47B22F", "#FF0000", "#692F91", "#FF671F", "#C5C5C5"],
                borderColor: "black",
                borderWidth: 1,
                barThickness: 80,
            },
        ],
    });

    console.log(result());

    return (
        <div className="Chart" id="Chart">
            <div className="container">
                <div className="chartText">
                    <div className="chartTitle">Chart prices</div>
                    <div className="chartSubtitle"></div>
                </div>
                <div className="chartItems">
                    <div className="chartBody">
                        <Bar data={chartData} />
                    </div>
                    <div className="chartLaptop">
                        <div className="chartImage"></div>
                        <div className="chartCharacterisctics">
                            <div className="chartName">ASUS TUF Gaming F15</div>
                            <ul>
                                <li>Processor -
                                    Intel® Core™ i5-10300H Processor 2.5 GHZ (8M Cache, up to 4.5 GHz, 4 cores)
                                    Intel® Core™ i5-10200H Processor, 2.4 GHz (8M Cache, up to 4.1 GHz, 4 cores)
                                </li>
                                <li>Graphics -
                                    NVIDIA® GeForce GTX™ 1650, 4GB GDDR5
                                    NVIDIA® GeForce GTX™ 1650, 4GB GDDR6</li>
                                <li>Display
                                    15.6-inch, FHD (1920 x 1080) 16:9, Value IPS-level, Anti-glare display, sRGB:62.5%, Adobe:47.1%, Refresh Rate:144Hz, Optimus</li>
                                <li>Memory -
                                    8GB DDR4 SO-DIMM(2933MHz for i5-10300H/i7-10750H/i7-10870H), Max Capacity:32GB
                                    8GB DDR4 SO-DIMM(2933MHz for i5-10300H/i7-10750H/i7-10870H) x 2, Max Capacity:32GB
                                    16GB DDR4 SO-DIMM(2933MHz for i5-10300H/i7-10750H/i7-10870H), Max Capacity:32GB</li>
                                <li>Storage -
                                    512GB PCIe® 3.0 NVMe™ M.2 SSD
                                    1TB PCIe® 3.0 NVMe™ M.2 SSD</li>
                                <li >Battery -
                                    48WHrs, 3S1P, 3-cell Li-ion</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Chart) 