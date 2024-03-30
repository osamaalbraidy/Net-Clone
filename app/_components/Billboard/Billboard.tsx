'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface Movie {
    videoUrl: string;
    thumbnailUrl: string;
    title: string;
    description: string;
}

const fetcher = async (url: string): Promise<Movie[]> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return await response.json();
}

const Billboard: React.FC = () => {
    const [data, setData] = useState<Movie[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetcher('api/movies');
                // Shuffle the array of movies randomly
                const shuffledData = shuffleArray(result);
                setData(shuffledData);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    // Function to shuffle array randomly
    const shuffleArray = (array: Movie[]): Movie[] => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <div className='relative h-[56.25vw]'>
            {error && <div>Error: {error}</div>}
            {data.length > 0 && (
                <>
                    <video
                        className='
                    w-full
                    h-[56.25vw]
                    object-cover
                    brightness-[60%]
                '
                        poster={data[0]?.thumbnailUrl}
                        src={data[0]?.videoUrl}
                        autoPlay
                        muted
                        loop
                    ></video>
                    <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
                        <p className='
                        text-white 
                        text-2xl 
                        md:text-5xl 
                        h-full w-[60%] 
                        lg:text-6xl 
                        font-bold 
                        drop-shadow-xl
                        '>
                            {data[0]?.title}
                        </p>
                        <p className='
                        text-white
                        text-[8px]
                        md:text-lg
                        mt-3
                        md:mt-8
                        w-[80%]
                        md:w-[80%]
                        lg:w-[50%]
                        drop-shadow-xl
                        '>
                            {data[0]?.description}
                        </p>
                        <div className='flex flex-row items-center mt-3 md:mt-4 gap3'>
                            <button className='
                            bg-white
                            text-white
                            bg-opacity-30
                            rounded-md
                            py-1 md:py-2
                            px-2 md:px-4
                            w-auto
                            text-xs lg:text-lg
                            font-semibold
                            flex 
                            flex-row
                            items-center
                            hover:bg-opacity-20
                            transition
                            '>
                                <AiOutlineInfoCircle className='mr-1 '/> 
                                More Info 
                            </button>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default Billboard;
