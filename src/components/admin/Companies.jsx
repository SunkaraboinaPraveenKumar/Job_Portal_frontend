import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useDispatch } from 'react-redux';
import { setSearchCompanyByText } from '@/redux/companySlice';

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input, dispatch]);

    return (
        <div>
            <Navbar />
            <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <Input
                        className="flex-1"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/companies/create")} className="mt-4 sm:mt-0">
                        New Company
                    </Button>
                </div>
                <div className='mt-6'>
                    <CompaniesTable />
                </div>
            </div>
        </div>
    );
};

export default Companies;
