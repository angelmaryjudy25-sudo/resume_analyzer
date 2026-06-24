import React from 'react';
import { MoreHorizontal, Search, Filter } from 'lucide-react';

export const UserManagementTable = ({ users }) => (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mt-8">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Platform Users</h3>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input 
                        type="text" 
                        placeholder="Filter users..."
                        className="bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs font-medium focus:ring-2 focus:ring-slate-200 transition-all outline-none"
                    />
                </div>
                <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
                    <Filter size={14} />
                </button>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-medium text-slate-600">
                <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Role</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Created</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-3">
                                <p className="font-bold text-slate-900">{user.name}</p>
                                <p className="text-[10px] text-slate-400">{user.email}</p>
                            </td>
                            <td className="px-6 py-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                                    user.role === 'Admin' ? 'bg-slate-900 text-white' : 
                                    user.role === 'Recruiter' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-600'
                                }`}>{user.role}</span>
                            </td>
                            <td className="px-6 py-3">
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                        user.status === 'Active' ? 'bg-success' : 
                                        user.status === 'Pending' ? 'bg-warning' : 'bg-slate-300'
                                    }`} />
                                    {user.status}
                                </div>
                            </td>
                            <td className="px-6 py-3 text-[10px] font-bold text-slate-400">
                                {new Date(user.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-3 text-right">
                                <button className="p-1 hover:bg-slate-100 rounded transition-colors">
                                    <MoreHorizontal size={14} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
