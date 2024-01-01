import Image from "next/image";

interface FeeData {
    paymentMethod: string;
    area: string;
    variableFee: string;
    fixedFee: string;
}

const feeData: FeeData[] = [
    {
        paymentMethod: "Credit card",
        area: "EEA*",
        variableFee: "1.8%",
        fixedFee: "€0.25",
    },
    {
        paymentMethod: "Credit card",
        area: "Out of EEA*",
        variableFee: "3%",
        fixedFee: "€0.35",
    },
];

const Table = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="exchange-section">
                <div className="table-b bg-navyblue p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl text-center">The prices below are all including tax</h3>
                    <table className="table-auto w-full mt-10">
    <thead>
        <tr className="text-white bg-darkblue rounded-lg">
            <th className="px-4 py-4 font-normal text-center">Payment Method</th>
            <th className="pr+1 py-4 text-start font-normal ">Area</th>
            <th className="pl-2 py-4 font-normal text-center">Variable Fee</th>
            <th className="px-4 py-4 font-normal text-center"></th>
            <th className="px-4 py-4 font-normal text-center">Fixed Fee</th>
        </tr>
    </thead>
    <tbody>
        {feeData.map((item, i) => (
            <tr key={i} className="border-b border-b-darkblue">
                <td className="px-4 py-6 text-center text-white">{item.paymentMethod}</td>
                <td className="pr+1 py-6  text-white">{item.area}</td>
                <td className="pl-2 py-6 text-center text-white">{item.variableFee}</td>
                <td className="px-4 py-6 text-center text-white">+</td>
                <td className="px-4 py-6 text-center text-white">{item.fixedFee}</td>
            </tr>
        ))}
    </tbody>
</table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default Table;
