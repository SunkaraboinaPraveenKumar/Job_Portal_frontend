import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <Carousel className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto my-10">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2" key={index}>
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className="w-full rounded-full text-xs sm:text-sm md:text-base">
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel;
