import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    const renderSkills = () => {
        if (user?.profile?.skills?.length) {
            return user.profile.skills.map((skill, index) => (
                <Badge key={index} className="mr-1">{skill}</Badge>
            ));
        }
        return <span>NA</span>;
    };

    const renderResumeLink = () => {
        if (user?.profile?.resume) {
            return (
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={user.profile.resume}
                    className='text-blue-500 hover:underline cursor-pointer'
                >
                    {user.profile.resumeOriginalName}
                </a>
            );
        }
        return <span>NA</span>;
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage
                                src={user?.profile?.avatar || 'https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg'}
                                alt="profile"
                            />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname || 'Full Name'}</h1>
                            <p>{user?.profile?.bio || 'Bio not available'}</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setOpen(true)}
                        className="text-right lg:text-left"
                        variant="outline"
                        size="sm"
                    >
                        <Pen className="w-4 h-4" />
                    </Button>
                </div>

                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email || 'Email not available'}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber || 'Phone number not available'}</span>
                    </div>
                </div>

                <div className='my-5'>
                    <h1 className='font-bold text-lg'>Skills</h1>
                    <div className='flex flex-wrap gap-1'>
                        {renderSkills()}
                    </div>
                </div>

                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {renderResumeLink()}
                </div>
            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl my-5 p-8'>
                <h1 className='font-bold text-lg mb-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;
