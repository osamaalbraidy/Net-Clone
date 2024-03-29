import AuthInputs from "../_components/AuthInputs/AuthInputs"

const page = () => {

    return (
        <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
            <div className='bg-black w-full h-full lg:bg-opacity-50'>
                <nav className='px-12 py-5'>
                    <img src="/images/logo.png" alt='' className='h-12' />
                </nav>
                <div className='flex justify-center'>
                    <AuthInputs />
                </div>
            </div>
        </div>
    )
}

export default page
