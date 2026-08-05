import React from 'react'

const Sections = ({ tabSection, setTabSection }) => {
    return (
        <div className='relative hidden md:flex justify-center md:justify-between items-center px-0 flex-col w-2/10 h-full'>
            <div className="flex h-full w-3/10 absolute bg-tabbedOrange right-0 z-10" />
            <div className={`flex h-0.5 w-7/10 absolute bg-linear-to-r from-alabasterGrey via-carbonBlack/8 to-alabasterGrey z-30 
                ${(tabSection === 0)
                    ? 'bottom-26'
                    : (tabSection === 1)
                        ? 'hidden'
                        : 'top-26'
                }`}
            />
            <div
                onClick={() => setTabSection(0)}
                className={`relative z-20 msi:text-xl 2xl:text-2xl h-13 md:h-1/3 w-full flex justify-center items-center px-3 select-none cursor-pointer border-l-8
                            ${(tabSection === 0)
                        ? 'font-semibold underline underline-offset-4 bg-tabbedOrange border-crimsonCarrot rounded-t-none'
                        : (tabSection === 1)
                            ? 'font-normal bg-alabasterGrey border-alabasterGrey hover:bg-tabbedOrangeAccent hover:border-tabbedOrangeAccent rounded-br-3xl'
                            : 'font-normal bg-alabasterGrey border-alabasterGrey hover:bg-tabbedOrangeAccent hover:border-tabbedOrangeAccent'
                    }
                         `}
            >
                <p>experience</p>
            </div>
            <div
                onClick={() => setTabSection(1)}
                className={`z-20 msi:text-xl 2xl:text-2xl h-13 md:h-1/3 w-full flex justify-center items-center px-3 select-none cursor-pointer border-l-8
                            ${(tabSection === 0)
                        ? 'font-normal rounded-tr-3xl bg-alabasterGrey border-alabasterGrey hover:bg-tabbedOrangeAccent hover:border-tabbedOrangeAccent'
                        : (tabSection === 1)
                            ? 'font-semibold underline underline-offset-4 bg-tabbedOrange border-crimsonCarrot rounded-t-none'
                            : 'font-normal bg-alabasterGrey border-alabasterGrey hover:bg-tabbedOrangeAccent hover:border-tabbedOrangeAccent rounded-br-3xl'
                    }
                         `}
            >
                <p>skills</p>
            </div>
            <div
                onClick={() => setTabSection(2)}
                className={`z-20 msi:text-xl 2xl:text-2xl h-13 md:h-1/3 w-full flex justify-center items-center px-3 select-none cursor-pointer border-l-8
                            ${(tabSection === 0)
                        ? 'font-normal bg-alabasterGrey border-alabasterGrey hover:bg-tabbedOrangeAccent hover:border-tabbedOrangeAccent'
                        : (tabSection === 1)
                            ? 'font-normal bg-alabasterGrey border-alabasterGrey rounded-tr-3xl hover:bg-tabbedOrangeAccent hover:border-tabbedOrangeAccent'
                            : 'font-semibold underline underline-offset-4 bg-tabbedOrange border-crimsonCarrot rounded-t-none'
                    }
                         `}
            >
                <p>skills</p>
            </div>
        </div>
    )
}

export default Sections