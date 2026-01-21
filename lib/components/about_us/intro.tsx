import Image from "next/image";

const home_about_us = () => {
    return (
        <section className="flex items-center justify-center font-sans">
            <div className="flex w-full max-w-3xl flex-col items-center justify-between sm:items-start">
                google maps
            </div>
            <div className="flex w-full max-w-3xl flex-col items-center justify-between sm:items-start">
                <p>
                    Looking for comprehensive insurance coverage in Thurston County, WA?
                    Scheduling a consultation with The Total Agency is a breeze.
                    Our dedicated staff members will ensure that finding the right insurance solutions for your needs is straightforward and hassle-free.
                    Reach out today and let us protect what matters most to you.
                </p>
                <div className="flex">

                    <div className="flex">

                        <a
                            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Deploy Now
                        </a>
                    </div>

                    <div className="flex">
                        <a
                            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Documentation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default home_about_us;