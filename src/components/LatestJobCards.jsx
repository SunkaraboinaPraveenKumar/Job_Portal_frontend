import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/description/${job._id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition-shadow duration-300'
        >
            {/* Job Company and Location */}
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name || 'Company Name'}</h1>
                <p className='text-sm text-gray-500'>{job?.location || 'Location'}</p>
            </div>

            {/* Job Title and Description */}
            <div className='my-2'>
                <h1 className='font-bold text-lg'>{job?.title || 'Job Title'}</h1>
                <p className='text-sm text-gray-600'>{job?.description || 'Job Description'}</p>
            </div>

            {/* Job Badges */}
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant="ghost">
                    {job?.position ? `${job.position} Positions` : 'Positions'}
                </Badge>
                <Badge className='text-[#F83002] font-bold' variant="ghost">
                    {job?.jobType || 'Job Type'}
                </Badge>
                <Badge className='text-[#7209b7] font-bold' variant="ghost">
                    {job?.salary ? `${job.salary} LPA` : 'Salary'}
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;
