import Image from "next/image";


const Trade = () => {
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-5">
                {/* Column-1 */}
                <div>
                    <Image src={'/images/Trade/macbook.png'} alt="macBook-image" width={661} height={377} />
                </div>

                {/* Column-2 */}

                <div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">Navigate Your Finances with Clarity<br /> Any time</h3>
                    <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">Access your transactions on-the-go with our modern dashboard. Real-time insights, ultimate convenience, any time, anywhere.</p>
                </div>
            </div>
        </div>
    )
}

export default Trade;
