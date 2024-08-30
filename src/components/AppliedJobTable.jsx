import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);

    // Handle cases where `allAppliedJobs` is undefined or empty
    if (!allAppliedJobs || allAppliedJobs.length === 0) {
        return <p>You haven't applied for any jobs yet.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <Table className="min-w-full">
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell className="text-sm">{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell className="text-sm">{appliedJob.job?.title}</TableCell>
                                <TableCell className="text-sm">{appliedJob.job?.company?.name}</TableCell>
                                <TableCell className="text-right text-sm">
                                    <Badge className={`${
                                        appliedJob?.status === "rejected" ? 'bg-red-400' :
                                        appliedJob.status === 'pending' ? 'bg-gray-400' :
                                        'bg-green-400'
                                    }`}>
                                        {appliedJob.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default AppliedJobTable;
