import api from './axios';
import { mockStats, mockRecentAnalysis } from '../mocks/candidateData';

export const candidateService = {
    getDashboardStats: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ data: mockStats }), 500);
        });
    },

    uploadResume: async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return api.post('/resumes/upload/', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },

    getRecentAnalysis: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ data: mockRecentAnalysis }), 500);
        });
    }
};
